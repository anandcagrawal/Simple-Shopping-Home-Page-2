import React, { Component } from 'react';
import Menu from "./svg/bars.svg";
import CartIcon from "./svg/cart.svg";
import Close from "./svg/cross.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./Context";
import Login from "./Login";


export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        const { toggle } = this.state;
        const { cart } = this.context;
        return (
            <header>
                <div className="Menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="25" />
                </div>
                <div className="Logo">
                    <h1> <Link to="/"> StopShop </Link> </h1>
                </div>

                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/login">Logout</Link></li>
                        <li className="Close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="25" />
                        </li>
                    </ul>

                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="25" />
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;
