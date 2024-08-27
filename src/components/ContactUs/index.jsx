import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p>Hello! I'm Karina, and I'm a passionate web developer with experience in building dynamic web applications. I love coding and exploring new technologies. Feel free to reach out if you have any
          questions or just want to connect! There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised 
          words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
       All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
       combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
       or non-characteristic words etc.</p>
       
        <div className="flexbox-container">
          {/* Flexbox Item 1: Image */}
          <div className="flexbox-item flexbox-item-1">
            <img src="pink_peonies.jpeg" alt="Contact Image" className="flexbox-image" />
          </div>

          
          <div className="item2">
            <form>
              <div>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
              </div>

              <div>
                <label>
                  Email:
                  <input type="email" name="email" />
                </label>
              </div>

              <div>
                <label>
                  Message:
                  <textarea name="message"></textarea>
                </label>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;