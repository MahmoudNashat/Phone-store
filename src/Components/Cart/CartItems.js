import React from 'react'

export default function CartItems({ item, value }) {
    const { img, title, price, total, count, id } = item;
    const { decrement, increment, removeItem } = value;
    return (
        <div className="row text-capitalize mb-4 align-items-center cart-item">
            <div className="col-10 col-lg-2 mx-auto mb-2">
                <img src={img} className="img-fluid" style={{ width: "75px", height: "75px" }} alt="product" />
            </div>
            <div className="col-10 col-lg-2 mx-auto mb-2">
                {title}
            </div>
            <div className="col-10 col-lg-2 text-blue mx-auto mb-2">
                $ {price}
            </div>
            <div className="col-10 col-lg-2 mx-auto mb-2">
                <div className="d-flex justify-content-center">
                    <span className="quantity me-2 btn" onClick={() => decrement(id)}>
                        <i className="fas fa-minus"></i>
                    </span>
                    <span className="quantity me-2 btn count">
                        {count}
                    </span>
                    <span className="quantity me-2 btn" onClick={() => { increment(id) }}>
                        <i className="fas fa-plus"></i>
                    </span>
                </div>
            </div>
            <div className="col-10 col-lg-2 remove mx-auto mb-2" onClick={() => removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
            <div className="col-10 col-lg-2 mx-auto mb-2">
                <strong>item total : $ {total}</strong>
            </div>
        </div>
    )
}
