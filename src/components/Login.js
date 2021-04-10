import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Login.css";

export class Login extends Component {
    render() {
        return (
            <div>

                <link rel="stylesheet" href="Loginstyle.css" ></link>

                <body>
                    <form className="box" action="Loginnn.html">
                        <a className="flex title-font font-medium items-center text-center text-decoration-none justify-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="" fill="none" stroke="currentColor" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width={2} className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-3xl">Shopify</span>
                        </a>
                        <h4>Login</h4>
                        <input type="text" placeholder="Username" name="" />
                        <input type="password" placeholder="Password" name="" />

                        <NavLink to="/products">
                            <button className="text-decoration-none"> <strong>Login</strong></button>
                        </NavLink>
                    </form>
                </body>
            </div>
        )
    }
}

export default Login;
