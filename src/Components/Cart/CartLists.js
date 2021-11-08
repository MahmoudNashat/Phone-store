import React from 'react';
import CartItems from "./CartItems";

export default function CartLists({ value }) {
    const { cart } = value;
    return (
        <div className="container-fluid mx-auto text-center mt-3">
            {cart.map(item => {
                return <CartItems value={value} item={item} key={item.id} />
            })}
        </div>
    )
}
