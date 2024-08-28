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
                <div class="image-container">
  <div class="image-box">
  <img src="/img/js.jpg" alt="js" class="circled-img" />  
    
  </div>
  <div class="image-box">
  <img src="/img/python.jpg" alt="python" class="circled-img" />
    
  </div>
  <div class="image-box">
  <img src="/img/react.jpg" alt="react" class="circled-img" />
  </div>
</div>
                <Footer/>

            </div>          
            
        </div>
    );
}

export default HomePage;