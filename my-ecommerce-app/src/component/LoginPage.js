import {React, useState, useEffect} from "react";
// import { useAuth } from '../AuthContext';
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = () => {
    const [loginStatus, setLoginStatus] = useState(true)
    const [reload, forceReload] = useState(false)
    // const [loggedInState, setLoggedInState] = useState(false);
    // const storedLoggedInState = localStorage.getItem('loggedInState');
    // const [loggedInState, setLoggedInState] = useState(storedLoggedInState);
    // const {loggedInState, setLoggedInState} = useAuth();

    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false
        // return JSON.parse(storedLoggedInState);
    });

    function handleLogIn() {
        localStorage.setItem('loggedInState', JSON.stringify(true));
        setLoggedInState(true);
        // localStorage.setItem('loggedInState', loggedInState)
        // forceReload(true);
        // navigate('.././Products')
    }

    function handleLogOut() {
        localStorage.setItem('loggedInState', JSON.stringify(false));
        setLoggedInState(false);
    }
    
    useEffect(() => {
        console.log(loggedInState ? "logged in before loginpage" : "not logged in before loginpage")
        // localStorage.setItem('loggedInState', JSON.stringify(loggedInState));
        console.log(loggedInState ? "logged in after loginpage" : "not logged in before loginpage")
    }, [loggedInState]);
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