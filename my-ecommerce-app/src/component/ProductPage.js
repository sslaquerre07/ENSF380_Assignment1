import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const ProductPage = () => {
    // const storedLoggedInState = localStorage.getItem('loggedInState');
    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false
        // return JSON.parse(storedLoggedInState);
    });
    const navigate = useNavigate();

    // const [loggedInState, setLoggedInState] = useState(false);
    // const { loggedInState, setLoggedInState } = useAuth();
    // const [loginStatus, setLoginStatus] = useState(true);
    // const [reload, forceReload] = useState(false)
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        // console.log(loggedInState ? "logged in before productpage" : "not logged in before productpage")
        localStorage.setItem('cart', JSON.stringify(cart));
        // setLoggedInState(JSON.parse(localStorage.getItem('loggedInState')))
        localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
        // console.log(loggedInState ? "logged in productpgae" : "not logged in productpage")
        if (!loggedInState) {
            navigate('.././Login');
        }
    }, [cart]);


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
    // console.log("end product page loggedInState: ", loggedInState)
    return (
    <div className="product-page">
        <Header />
        {/* {!loggedInState && loginStatus && <LoginForm setLoginStatus={setLoginStatus} currentPage={"Product"} forceReload={forceReload} setLoggedInState={setLoggedInState}/>}
        {!loggedInState && !loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}

        {loggedInState && <table>
            <tr>
                <td><ProductList addToCart={addToCart}/></td>
                <td style={{verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart}/></td>
            </tr>
        </table>} */}
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

// function ProductPage(){
//     return(
//         <div>
//             <Header />
//             <Footer />
//         </div>
//     );
// };

export default ProductPage;