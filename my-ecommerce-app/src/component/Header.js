import React from 'react'


function Header(){
    return(
        <div>
            <header>
                <img src="images/logo.png" alt="company logo" height="100px" />
                <h1>LaMeyer Solutions Inc</h1>
            </header>
            <div class="nav-bar">
                <p><a href="/">Home Page</a></p>
                <p><a href="/Products">Product Page</a></p>
                <p><a href="/Login">Login Page</a></p>
                <p><a href="/">Contacts Page</a></p>
            </div>
        </div>
    );
}
export default Header;