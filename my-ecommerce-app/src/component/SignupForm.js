import React from 'react';

const SignupForm = ({setLoginStatus}) => {
    function handleClick(){
        setLoginStatus(true)
    }

    return(
        <div>
            <form style={{margin: "10px 0px 10px 0px"}}>
                <div class="username">   
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter Your Username" style={{width: "200px"}} required />
                </div>
                <div class="password"> 
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" style={{width: "200px"}} required />
                </div>
                <div class="confirm-password">
                    <label for="confirm-password">Confirm Password:</label><br />
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Your Password" style={{width: "200px"}} required />
                </div>
                <div class="email">
                    <label for="email">Email:</label><br />
                    <input type="text" id="email" name="email" placeholder="Enter Your Email" style={{width: "200px"}} required /><br />
                    <button type="button" /*Add onclick functionality here*/>Signup</button>  
                    <button type="button" onClick={handleClick}>Back To Login</button>
                </div>
            </form>
        </div>
    );
}
export default SignupForm;