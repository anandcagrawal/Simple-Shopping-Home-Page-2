import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Sneakers",
                "src": "https://images.pexels.com/photos/2529159/pexels-photo-2529159.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529159.jpg&fm=jpg",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "59.99"
            },

            {
                "_id": "2",
                "title": "Adidas UltaBoost",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "59.99",
                "src": "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?cs=srgb&dl=pexels-ray-piedra-1464625.jpg&fm=jpg"
            },

            {
                "_id": "3",
                "title": "Nike Pump",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "79.99",
                "src": "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?cs=srgb&dl=pexels-wallace-chuck-3261068.jpg&fm=jpg"

            },

            {
                "_id": "4",
                "title": "Nike React",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "99.99",
                "src": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529148.jpg&fm=jpg"

            },

            {
                "_id": "5",
                "title": "Adidas NMD",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "99.99",
                "src": "https://images.pexels.com/photos/4462782/pexels-photo-4462782.jpeg?cs=srgb&dl=pexels-antonio-dillard-4462782.jpg&fm=jpg"
            },

            {
                "_id": "6",
                "title": "Adidas Sketchers",
                "description": "This is the details of the shoes",
                "content": "Detail information of the shoes",
                "price": "79.99",
                "src": "https://images.pexels.com/photos/2529158/pexels-photo-2529158.jpeg?cs=srgb&dl=pexels-melvin-buezo-2529158.jpg&fm=jpg"

            }
        ],

        cart: []
    };

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("Product has been added.")
        }
    };


    render() {
        const { products, cart } = this.state;
        const { addCart } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}