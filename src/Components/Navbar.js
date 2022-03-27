import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
                <div className="container">
                    <Link to="/">
                        <img src={Logo} alt="store logo" />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/Cart" >
                        <ButtonContainer>
                            <span>
                                <i className="fas fa-shopping-cart me-2"></i>
                            </span>
                            My Cart
                        </ButtonContainer>
                    </Link>
                </div>
            </Nav>
        )
    }
}

const Nav = styled.nav`
background-color: var(--mainBlue);
.nav-link {
    color: var(--mainWhite) !important;
    &:hover {
        color: var(--lightBlue) !important;
    }
}

`