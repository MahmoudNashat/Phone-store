import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductsContext = React.createContext();

class ProductsProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
        cart: [],
        modalProduct: detailProduct,
        modalOpen: false,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }
    componentDidMount() {
        const ProductsData = JSON.parse(localStorage.getItem("products"));
        if (localStorage.getItem("products")) {
            this.setState(() => {
                return {
                    products: ProductsData.products,
                    cart: ProductsData.cart
                }
            })
        } else {
            this.setState(() => {
                return {
                    cart: []
                }
            })
        }

    }
    componentDidUpdate(nextProps, nextState) {
        localStorage.setItem("products", JSON.stringify(nextState));
    }
    addToCart = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]

            }
        }, () => { this.addTotals() })
    }
    getItem = (id) => {
        const productsItem = this.state.products.find(item => item.id === id);
        return productsItem;
    }
    showDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        });
    }
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }
    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }
    decrement = id => {
        let tempCart = [...this.state.cart];
        let Item = tempCart.find(item => item.id === id);
        let index = tempCart.indexOf(Item);
        let product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => this.addTotals());
        }
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        let Item = tempCart.find(item => item.id === id);
        let index = tempCart.indexOf(Item);
        let product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => this.addTotals());
    };
    removeItem = id => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        let tempProducts = [...this.state.products];
        let removedItem = this.getItem(id);
        let index = tempProducts.indexOf(removedItem);
        let product = tempProducts[index];
        product.inCart = false;
        product.count = 0;
        product.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => { this.addTotals() })
    }
    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => subTotal += item.total);
        let tempTax = subTotal * 0.1;
        let tax = parseFloat(tempTax.toFixed(2));
        let total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    scrollTop = () => {
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <ProductsContext.Provider value={
                {
                    ...this.state,
                    addtocart: this.addToCart,
                    showdetails: this.showDetails,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    decrement: this.decrement,
                    increment: this.increment,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    scrollTop: this.scrollTop

                }
            }>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsConsumer, ProductsProvider };