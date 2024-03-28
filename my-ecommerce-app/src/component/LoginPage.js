import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage(){
    const [loginStatus, setLoginStatus] = useState(true)

    return(
        <div>
            <Header />
            {loginStatus && <LoginForm setLoginStatus={setLoginStatus}/>}
            {!loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}
            <Footer />
        </div>
    );
}
export default LoginPage;