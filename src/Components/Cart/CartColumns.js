import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid mx-auto text-center mt-3">
            <div className="row">
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">products</p>
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">product name</p>
                </div>                
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">price</p>
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">quantity</p>
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">remove</p>
                </div>
                <div className="col-10 col-lg-2 d-none d-lg-block">
                    <p className="text-uppercase">total</p>
                </div>
            </div>
            
        </div>
    )
}
