import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../AuthContext';

// const LoginForm = ({setLoginStatus, setLoggedInState}) =>{
const LoginForm = ({setLoginStatus, setLoggedInState, handleLogIn, handleLogOut}) =>{
    // const {loggedInState, setLoggedInState} = useAuth();
    // const storedLoggedInState = localStorage.getItem('loggedInState');
    // const [loggedInState, setLoggedInState] = useState(false);
    // const [loggedInState, setLoggedInState] = useState(() => {
    //     const storedLoggedInState = localStorage.getItem('loggedInState');
    //     // return storedLoggedInState ? JSON.parse(storedLoggedInState) : false
    //     return JSON.parse(storedLoggedInState);
    // });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function handleClick(){
        setLoginStatus(false);
    }

    // const handleLogIn = () => {
    //     setLoggedInState(true);
    //     // localStorage.setItem('loggedInState', loggedInState)
    //     forceReload(true);
    //     // navigate('.././Products')
    // }

    // const handleLogOut = () => {
    //     setLoggedInState(false);
    //     // localStorage.setItem('loggedInState', loggedInState)
    //     forceReload(true);
    // }

    // const handleNavigate = async() => {
    //     navigate('.././Products')

    // }
    // useEffect(() => {
    //     console.log(loggedInState ? "logged in before loginform" : "not logged in before loginform")
    //     // setLoggedInState(localStorage.getItem('loggedInState'))
    //     localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
    //     console.log(loggedInState ? "logged in loginform" : "not logged in loginform")
    // }, [loggedInState]);
    const handleHandleLogIn = () => {
        handleLogIn();
    }

    const handleFetch = async(e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/Login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username":username, "password":password})
            })
            const data = await response.json();

            if(data["message"] === "Username and password valid"){
                console.log('allowed')
                handleLogIn()
                // setLoggedInState(true);
                // setLoggedInState(true);  

                // console.log("after setting, loggedInState is: ", )
                // localStorage.setItem('loggedInState', loggedInState)            
                // console.log("logged in", loggedInState)
                return "login"
                // currentPage !== "Product" ? navigate('.././Products') :
                // navigate('.././Products')
                console.log("memory login", localStorage.getItem('loggedInState'))
                console.log(" not navigate :(")
            }
            else{
                console.log("not allowed")
                handleLogOut();
                // console.log("logged in", loggedInState)
                console.log("memory login", localStorage.getItem('loggedInState'))
                // navigate('.././Products')
                return "logout"

                setErrorMessage(data.message)

                }
        }
        catch (error) {
            console.error('Log in error', error)
        }

    }
    const handleSubmit = async (e) => {
        try {
            const goodLogin = await handleFetch(e);
            if (goodLogin === "login") {
                navigate('.././Products');
            }
        } catch (error) {
            console.error('Error handling submit:', error);
            // Handle error case
        }
    };
    
    return(
        <div>
            <form style={{margin: "10px 0px 10px 0px"}}>
                {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                <div class="login-fields">
                    <div class="username">   
                        <label for="username">Username:</label><br />
                        <input type="text" id="username" name="username" placeholder="Enter Your Username" style={{width: "200px"}} onChange={(e) => {setUsername(e.target.value)}} required />
                    </div>
                    <div class="password"> 
                        <label for="password">Password:</label><br />
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" style={{width: "200px"}} onChange={(e) => {setPassword(e.target.value)}} required /><br />
                        <button type="button" onClick={handleSubmit}>Login</button>   
                    </div>
                </div>
                <button type='button' onClick={handleClick}>Switch to Signup</button>
            </form>
        </div>
    );
}
export default LoginForm;