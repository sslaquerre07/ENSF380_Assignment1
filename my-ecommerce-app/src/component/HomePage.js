import React from 'react';

import Header from './Header.js';
import HomeMainSection from './HomeMainSection.js';
import Footer from './Footer.js';
import './HomePage.css';

function HomePage(){
    return(
        <div>
            <Header />
            <HomeMainSection />
            <Footer />
        </div>
    )
}
export default HomePage;