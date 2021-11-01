import React, { Component } from 'react';
import Title from "./Title"
import { ProductsConsumer } from '../context';
import Products from "./Products";
export default class ProductsList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="py-2">
                        <div className="container">
                            <Title name="our" title="products"/>
                            <div className="row">
                                <ProductsConsumer>
                                    {
                                        value => {
                                            return  value.products.map(product => {
                                                return <Products key={product.id}  product={product}/>
                                            })
                                        }
                                    }
                                </ProductsConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}
