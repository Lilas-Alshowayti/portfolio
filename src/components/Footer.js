import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer">
      <div className="rel">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d9cab3"
            fill-opacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,64C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

        <div className="icons-container">
          <h3>Finde Me On</h3>
          <div className="icons">
            <a href="https://github.com/Lilas-Alshowayti/" target="_blank">
              <BsGithub></BsGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/lilas-alshowayti-b05918124/"
              target="_blank"
            >
              <BsLinkedin></BsLinkedin>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
