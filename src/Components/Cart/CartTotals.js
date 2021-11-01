import React from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from "./PaypalButton";

export default function CartTotals({value, history}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-11  text-capitalize text-end mb-5">
                        <Link to="/">
                            <button className="btn btn-outline-danger px-5 mt-3 text-capitalize" onClick={
                                () => {clearCart()}
                            }>clear cart</button>
                        </Link>
                        <h5 className="mt-4">
                            <span className="text-title">subtotal : </span>
                            <strong className="text-blue fst-italic">$ {cartSubtotal}</strong>
                        </h5>
                        <h5 className="mt-3">
                            <span className="text-title">tax : </span>
                            <strong className="text-blue fst-italic">$ {cartTax}</strong>
                        </h5>
                        <h5 className="mt-3 mb-3">
                            <span className="text-title">total : </span>
                            <strong className="text-blue fst-italic">$ {cartTotal}</strong>
                        </h5>
                        <PaypalButton clearCart={clearCart} total={cartTotal} history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
