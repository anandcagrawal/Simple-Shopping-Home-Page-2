import React, { Component } from 'react';
import { DataContext } from "./Context";
import { Link } from 'react-router-dom';
import "./css/Details.css";

export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const { cart } = this.context;

        return (
            <>
                {
                    cart.map(item => (
                        <div clasName="details" key={item.id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>

                                <p>{item.description}</p>
                                <p>{item.content}</p>

                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Cart;

