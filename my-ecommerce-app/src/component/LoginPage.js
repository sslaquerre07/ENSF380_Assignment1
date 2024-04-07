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

    // useEffect(() => {
    //     console.log(loggedInState ? "logged in before loginpage" : "not logged in before loginpage")
    //     localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
    //     console.log(loggedInState ? "logged in after loginpage" : "not logged in before loginpage")
    // }, [loggedInState]);
    return(
        <div>
            <Header />
            {loginStatus && <LoginForm setLoginStatus={setLoginStatus} currentPage={"login"} forceReload={forceReload}/>}
            {!loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}
            <Footer />
        </div>
    );
}
export default LoginPage;