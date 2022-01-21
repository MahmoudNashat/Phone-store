import React, { Component } from 'react';
import { ProductsConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
export default class Details extends Component {
    render() {
        return (
            <ProductsConsumer>
                {value => {
                    const { id, title, company, price, info, img, inCart } = value.detailProduct;
                    return (
                        <div className="container pt-3 pb-5">
                            <div className="row">
                                {/* Title */}
                                <h2 className="col-10 pt-5 mx-auto text-center text-blue">{title}</h2>
                            </div>
                            <div className="row mt-3">
                                {/* img */}
                                <div className="col-10 col-md-6 mx-auto mb-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* info */}
                                <div className="col-10 col-md-6 text-capitalize">
                                    <h3 className="mt-3">
                                        model: {title}
                                    </h3>
                                    <h4 className="text-title text-muted mt-3">
                                        made by : {company}
                                    </h4>
                                    <p className="mt-3 text-blue fw-bold">
                                        price : <span>$</span>
                                        {price}
                                    </p>
                                    <p className="mt-3 mb-0 fw-bold">
                                        some info about product :
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer className="me-3">back to products</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                            value.addtocart(id);
                                            value.openModal(id);
                                        }
                                        }>
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductsConsumer>
        )
    }
}
