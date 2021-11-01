import React from 'react'

export default function Heading({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center py-4 text-title">
                <h1 className="text-capitalize fw-bold">
                    {name}
                    <strong className="text-blue">{title}</strong>
                </h1>
            </div>
            
        </div>
    )
}
