import React from "react";
import pro1 from "../assets/images/pro1.png";
import pro2 from "../assets/images/pro2.png";
import pro3 from "../assets/images/pro3.png";
import pro4 from "../assets/images/pro4.png";
import pro5 from "../assets/images/pro5.png";
import pro6 from "../assets/images/pro6.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="heading">
          <h2 className="sec-title">Portfolio</h2>
        </div>
        <div className="projects">
          <div className="single-project">
            <div className="image-container">
              <img src={pro1} />
              <div className="porject-info">
                <h3>Cart</h3>
                <p className="pro-desc">Shopping cart using redux toolkit</p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/store/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="image-container">
              <img src={pro2} />
              <div className="porject-info">
                <h3>ToDo list</h3>
                <p className="pro-desc">Add , delete , update todos </p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/todolist/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="image-container">
              <img src={pro3} />
              <div className="porject-info">
                <h3>Menu</h3>
                <p className="pro-desc">
                  Javascript website that displays data from JSON file
                </p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/menu/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="image-container">
              <img src={pro4} />
              <div className="porject-info">
                <h3>Food search</h3>
                <p className="pro-desc">Fetch food recipes from an API .</p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/filterfood/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="image-container">
              <img src={pro5} />
              <div className="porject-info">
                <h3>Coder</h3>
                <p className="pro-desc">
                  Responsive website that uses html , css and react js.
                </p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/coder/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="single-project">
            <div className="image-container">
              <img src={pro6} />
              <div className="porject-info">
                <h3>HTML&Css Template</h3>
                <p className="pro-desc">
                  Modern template with cool features and animation.
                </p>
                <div className="arrow">
                  <a
                    href="https://lilas-alshowayti.github.io/html-cssTemplate/"
                    target="_blank"
                  >
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
