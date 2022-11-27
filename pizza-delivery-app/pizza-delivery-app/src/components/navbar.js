import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'
import '../css files/navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="clearfix">
                        <div className="d-inline">
                            <div className="d-inline navbar-brand mydata">Pizzeria</div>
                            <Link to="/"><img src={logo} alt="logo" width='40px' /></Link>
                        </div>
                        <div className=" navbar-nav d-inline">
                        <Link className="nav-link d-inline mydata" to="/order">Order Pizza</Link>
                        <Link className="nav-link d-inline mydata" to="/build">Build Your Pizza</Link>
                        </div>
                    </div>

                    <Link to='/shopping'><button type="button" className="btn btn-warning text-white btncss"><i className="fa-solid fa-cart-shopping"></i>Shoping Cart</button></Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;