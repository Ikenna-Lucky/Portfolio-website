import React from "react";
import "./Experience.css";
import { HiCheckBadge } from "react-icons/hi2";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills That I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* for the backend skill section */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Php</h4>
                <small className="text-light">beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>Express js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiCheckBadge className="experience_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
