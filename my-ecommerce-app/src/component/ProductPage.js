import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';

const ProductPage = () => {
    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false
    });
    const navigate = useNavigate();

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
        if (!loggedInState) {
            navigate('.././Login');
        }
    }, [cart, loggedInState]);


    const addToCart = (product) => {
        const existingItemIndex = cart.findIndex(item => item.name === product.name);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity++;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (doomedProduct) => {
        const existingItemIndex = cart.findIndex(item => item.name === doomedProduct.name);
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity--;

        setCart(updatedCart[existingItemIndex].quantity <= 0 ? updatedCart.filter(item => item.name !== doomedProduct.name) : updatedCart);
    };
    return (
    <div className="product-page">
        <Header />
        <table>
            <tr>
                <td><ProductList addToCart={addToCart}/></td>
                <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart}/></td>
            </tr>
        </table>

        <Footer />
    </div>
    );
};

export default ProductPage;