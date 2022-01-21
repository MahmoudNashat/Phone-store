import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    <h2 className="col-10 mx-auto text-center text-capitalize h1 text-title display-1 pt-5">
                        404
                    </h2>
                    <h2 className="col-10 mx-auto text-center text-capitalize h1 text-title">
                        error
                    </h2>
                    <h3 className="col-10 mx-auto text-center text-capitalize text-title pt-5">
                        the requested path  <strong className="text-danger">{this.props.location.pathname}</strong> is not defined
                    </h3>
                </div>
            </div>
        )
    }
}
