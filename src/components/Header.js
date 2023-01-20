import React from "react";
import Typewriter from "typewriter-effect";
import pic from "../assets/images/2.png";
import cv from "../assets/cv.pdf";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="details">
          <h2 className="hi">Hi, I Am</h2>
          <div className="name-job">
            <Typewriter
              options={{
                strings: ["Lilas Alshowayti", "A Frontend Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="description">
            I am a junior front-end developer and enthusiast in creating web
            applications using HTML , CSS , Javascript and React . I am
            passionate about learning and understanding web technologies in
            depth.
          </div>
          <div className="btn-container">
            <a href={cv} download>
              <button className="btn primary-btn">Download CV</button>
            </a>
            <a href="#contact">
              <button className="btn secondary-btn">Contact Me</button>
            </a>
          </div>
        </div>
        <div className="img-section">
          <div className="img-container">
            <img src={pic} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
