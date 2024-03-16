import React from 'react'

import CustomerReview from './CustomerReview';

function HomeMainSection(){

    return(
        <div>
            {/*About Us Section*/}
            <section class="about-us">
                <h2>About Us</h2>
                <p>We are two engineers revolutionizing the world of software development. 
                    Currently, we are working out of our respective houses and running on nothing 
                    but minimal sleep and a passion for technology. It is a lot of work to take on, 
                    but we love what we do and as they say, when you love what you do you'll never 
                    work a day in your life!
                </p>

                <h2>Our Vision</h2>
                <p> Our company's vision is to automate the software development process, 
                    eliminating the tedious task of handwriting code line by line, and 
                    allowing for more efficient software development. You might ask, 
                    how are we any different than ChatGPT? Our innovative bots are specially 
                    trained in code generation, not only producing code that is correct but also 
                    producing efficient code while maintaining effective memory management.
                </p>
            {/*<!-- Shop Now Button -->*/}
            </section>
            <section class="shop-now">
                <button><a href="/Products">Shop Now</a></button>
            </section>
            {/*<!-- Customer Reviews/Testimonials Section -->*/}
            <section class="customer-reviews">
                <h2>Customer Reviews</h2>
                <CustomerReview />
                <CustomerReview />
            </section>
        </div>
    );
}
export default HomeMainSection;