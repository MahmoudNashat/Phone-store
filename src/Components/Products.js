import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ProductsConsumer } from "../context";

export default class Products extends Component {
    render() {
        const { img, title, id, inCart, price } = this.props.product;
        return (
            <ProductWrapper className="col-10 col-md-6 col-lg-3 my-3 mx-auto">
                <div className="card">
                    <ProductsConsumer>
                        {value => (
                            <div className="img-container p-3" onClick={
                                () => {
                                    value.showdetails(id);
                                    value.scrollTop();
                                }
                            }>
                                <Link to="/Details">
                                    <img src={img} className="card-img-top" alt="products" />
                                </Link>
                                <button className="cart-btn"
                                    onClick={() => {
                                        value.addtocart(id);
                                        value.openModal(id);
                                    }}
                                    disabled={
                                        inCart ? true : false
                                    }>
                                    {
                                        inCart ? <span>in cart</span> : <i className="fas fa-cart-plus" />
                                    }
                                </button>
                            </div>
                        )}
                    </ProductsConsumer>
                    <div className="card-footer d-flex justify-content-between ">
                        <p className="m-0 align-self-center">
                            {title}
                        </p>
                        <h5 className="m-0 text-blue fst-italic">
                            <span className="me-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
.card {
    border: none;
    transition: all .5s linear;
    .card-footer {
        border : transparent;
    }
    &:hover {
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
    transition: all .5s linear;
}
.card-img-top {
    transition: all .5s linear;

}
@media (max-width: 768px) {
    .cart-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        border: none;
        background: var(--lightBlue);
        padding: 5px 6px;
        border-radius: 10px 0 0 0 ;
        color: var(--mainWhite);
        font-size: 16px;
        text-transform: capitalize;
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer
    }
}
@media (min-width: 769px) {
    .cart-btn {
        position: absolute;
        right: 0;
        bottom: 0;
        border: none;
        background: var(--lightBlue);
        padding: 5px 6px;
        border-radius: 10px 0 0 0 ;
        color: var(--mainWhite);
        font-size: 16px;
        text-transform: capitalize;
        transform: translate(100%, 100%);
        transition: all .5s linear;
    
    }
    .img-container:hover .card-img-top {
        transform: scale(1.1)
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    
    }
    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer
    }
} 
`