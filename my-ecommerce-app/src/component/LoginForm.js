import React from 'react';

const LoginForm = ({setLoginStatus}) =>{
    function handleClick(){
        setLoginStatus(false);
    }

    return(
        <div>
            <form style={{margin: "10px 0px 10px 0px"}}>
                <div class="login-fields">
                    <div class="username">   
                        <label for="username">Username:</label><br />
                        <input type="text" id="username" name="username" placeholder="Enter Your Username" style={{width: "200px"}} required />
                    </div>
                    <div class="password"> 
                        <label for="password">Password:</label><br />
                        <input type="password" id="password" name="password" placeholder="Enter Your Password" style={{width: "200px"}} required /><br />
                        <button type="button" /*Add onclick functionality here*/>Login</button>   
                    </div>
                </div>
                <button type='button' onClick={handleClick}>Switch to Signup</button>
            </form>
        </div>
    );
}
export default LoginForm;