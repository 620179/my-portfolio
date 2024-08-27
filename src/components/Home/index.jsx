import React from 'react';
import Gallery from '../Gallery';
import Buttons from '../Buttons';
import Footer from '../Footer';
import "../../styles/index.css"

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="title-container">
                <Gallery/>
                <Buttons/>
                <h1 className="title">Innovating with Technology</h1>
               
                <Footer/>

            </div>          
            
        </div>
    );
}

export default HomePage;