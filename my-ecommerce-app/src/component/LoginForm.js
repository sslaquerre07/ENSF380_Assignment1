import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginForm = ({setLoginStatus, setLoggedInState, handleLogIn, handleLogOut}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function handleClick(){
        setLoginStatus(false);
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
                handleLogIn()
                return "login"
            }
            else{
                handleLogOut();
                setErrorMessage(data.message)
                return "logout"


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