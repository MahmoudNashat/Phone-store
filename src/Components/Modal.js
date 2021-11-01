import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
import { ProductsConsumer } from '../context';

export default class Modal extends Component {
    render() {
        return (
            <ProductsConsumer>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div className="p-3 col-8 col-md-6 col-lg-4 text-center text-capitalize mx-auto" id="modal">
                                            <h5>item added to cart</h5>
                                            <img src={img} className="img-fluid" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/" className="d-block m-2">
                                                <ButtonContainer onClick={() => {closeModal()}}>
                                                    continue shopping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/Cart">
                                                <ButtonContainer cart onClick={() => {closeModal()}}>
                                                    go to cart  
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductsConsumer>
        )

    
    }
}
const ModalContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background: rgba(0, 0, 0, 0.4);
#modal {
    background: var(--mainWhite);
}
`