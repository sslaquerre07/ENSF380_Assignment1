import {React, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = () => {
    const [loginStatus, setLoginStatus] = useState(true)

    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false
    });

    function handleLogIn() {
        localStorage.setItem('loggedInState', JSON.stringify(true));
        setLoggedInState(true);
    }

    function handleLogOut() {
        localStorage.setItem('loggedInState', JSON.stringify(false));
        setLoggedInState(false);
    }
    
    return(
        <div>
            <Header />
            {loginStatus && <LoginForm setLoginStatus={setLoginStatus} setLoggedInState={setLoggedInState} handleLogIn={handleLogIn} handleLogOut={handleLogOut}/>}
            {!loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}
            <Footer />
        </div>
    );
}
export default LoginPage;