import React, {useState, useEffect} from 'react';

const SignupForm = ({setLoginStatus}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Sets all variables while being changed
    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    //Handle form submssion
    function handleSubmission(event){
        event.preventDefault();
        //Reset error messages for every new submission
        setErrorMessage(''); 
        handleSubmissionErrors();   
    }

    useEffect(() => {
        if(!username){/*Just an additional check to avoid the rendering on the first attempt */}
        else if (!errorMessage){
            fetch("http://localhost:5000/Login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username":username, "password":password, "email":email})
            })
            .then(response => response.json())
            .then(data => {
                if(data["message"] === "Username already in use"){
                    setErrorMessage("Username already in use")
                }
                else{
                    setErrorMessage("Successful Signup")
                }
            })
        }
    }, [errorMessage, email, password, username]);

    function handleSubmissionErrors(){
        if(!username.trim() || !password.trim() || !confirmPassword.trim() || !email.trim()){
            setErrorMessage("All Fields Required");
        }
        else{
            if(!validUsername(username)){
                setErrorMessage("Invalid Username");
            }
            if(!validPassword(password)){
                setErrorMessage("Invalid Password");
            }
            if(password !== confirmPassword){
                setErrorMessage("Passwords do not match");
            }
            if(!validEmail(email)){
                setErrorMessage("Invalid Email");
            }
        }
    }

    /*Check the validity of the submitted data*/
    function validUsername(username) {
        let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        return usernameRegex.test(username);
    }
    function validPassword(password) {
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[\w!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/;
        return passwordRegex.test(password);
    }
    function validEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleClick(){
        setLoginStatus(true)
    }

    return(
        <div>
            <form style={{margin: "10px 0px 10px 0px"}}>
                {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                <div class="username">   
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" placeholder="Enter Your Username" style={{width: "200px"}} onChange={handleUserNameChange} required />
                </div>
                <div class="password"> 
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password" placeholder="Enter Your Password" style={{width: "200px"}} onChange={handlePasswordChange} required />
                </div>
                <div class="confirm-password">
                    <label for="confirm-password">Confirm Password:</label><br />
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Your Password" style={{width: "200px"}} onChange={handleConfirmPasswordChange} required />
                </div>
                <div class="email">
                    <label for="email">Email:</label><br />
                    <input type="text" id="email" name="email" placeholder="Enter Your Email" style={{width: "200px"}} onChange={handleEmailChange} required /><br />
                    <button type="button" onClick={handleSubmission}>Signup</button><br/> 
                    <button type="button" onClick={handleClick}>Back To Login</button>
                </div>
            </form>
        </div>
    );
}
export default SignupForm;