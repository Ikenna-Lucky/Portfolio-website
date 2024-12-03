import React from "react";
import "./About.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { VscFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>3+ Years Work</small>
            </article>

            <article className="about__card">
              <GoPeople className="about__card-icon" />
              <h5>Clients</h5>
              <small>300+ WorldWide</small>
            </article>

            <article className="about__card">
              <VscFolder className="about__card-icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            blanditiis dignissimos incidunt explicabo quam asperiores vitae vero
            quae. Optio numquam qui amet non! Neque reprehenderit nobis
            doloribus, at dolore sequi eos animi obcaecati, odit dolorum
            consequatur, natus voluptatum dicta a?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
