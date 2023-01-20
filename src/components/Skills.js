import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="heading">
          <h2 className="sec-title">Skills</h2>
        </div>
        <div className="myskills">
          <div className="single-skill">
            <div className="icon">
              <DiCss3 size={"4rem"}></DiCss3>
            </div>
            <p className="skill-name">CSS</p>
          </div>
          <div className="single-skill">
            <div className="icon">
              <AiOutlineHtml5 size={"4rem"}></AiOutlineHtml5>
            </div>
            <p className="skill-name">HTML</p>
          </div>
          <div className="single-skill">
            <div className="icon">
              <TbBrandJavascript size={"4rem"}></TbBrandJavascript>
            </div>
            <p className="skill-name">Javascript</p>
          </div>
          <div className="single-skill">
            <div className="icon">
              <FaReact size={"4rem"}></FaReact>
            </div>
            <p className="skill-name">React</p>
          </div>
          <div className="single-skill">
            <div className="icon">
              <SiRedux size={"4rem"}></SiRedux>
            </div>
            <p className="skill-name">Redux</p>
          </div>
        </div>
        <a href="#contact">
          <button className="btn secondary-btn ">Contact Me</button>
        </a>
      </div>
    </section>
  );
};

export default Skills;
