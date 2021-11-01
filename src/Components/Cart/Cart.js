import React, { Component } from 'react';
import { ProductsConsumer } from '../../context';
import Title from "../Title";
import EmptyCart from "./EmptyCart";
import CartColumns from './CartColumns';
import CartLists from './CartLists';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <ProductsConsumer>
                {value => {
                    const {cart} = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumns />
                                <CartLists value={value}/>
                                <CartTotals value={value} history={this.props.history}/>
                            </React.Fragment>
                        );
                    }else {
                        return <EmptyCart />;
                    }
                }}
            </ProductsConsumer>
        )
    }
}
