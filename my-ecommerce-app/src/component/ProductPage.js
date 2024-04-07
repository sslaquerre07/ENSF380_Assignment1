import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import Header from './Header.js';
import Footer from './Footer.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const ProductPage = () => {
    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false;
    });

    // const [loggedInState, setLoggedInState] = useState(false);
    // const { loggedInState, setLoggedInState } = useAuth();
    const [loginStatus, setLoginStatus] = useState(true);

    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        console.log(loggedInState ? "logged in before productpage" : "not logged in before productpage")
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
        console.log(loggedInState ? "logged in productpgae" : "not logged in productpage")
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
        {/* {() => {console.log(loggedInState)}} */}
        <Header />
        {!loggedInState && loginStatus && <LoginForm setLoginStatus={setLoginStatus} />}
        {!loggedInState && !loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}

        {loggedInState && <table>
            <tr>
                <td><ProductList addToCart={addToCart}/></td>
                <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart}/></td>
            </tr>
        </table>}
        <Footer />
    </div>
    );
};

// function ProductPage(){
//     return(
//         <div>
//             <Header />
//             <Footer />
//         </div>
//     );
// };

export default ProductPage;