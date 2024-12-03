import React from "react";
import "./Portfolio.css";
import image1 from "../../assets/portfolio1.jpg";
import image2 from "../../assets/portfolio2.jpg";
import image3 from "../../assets/portfolio3.jpg";
import image4 from "../../assets/portfolio4.jpg";
import image5 from "../../assets/portfolio5.png";
import image6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Trip Planner App",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25251071-Trip-Planner-App",
    },
    {
      id: 2,
      image: image2,
      title: "HR Web Platform",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25268377-HR-Web-Platform",
    },
    {
      id: 3,
      image: image3,
      title: "Crypto Trading Platform",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25250848-Crypto-Trading-Platform",
    },
    {
      id: 4,
      image: image4,
      title: "Payoneer Website Redesign",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25227454-Payoneer-Website-Redesign",
    },
    {
      id: 5,
      image: image5,
      title: "HR Platform Design",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25215750-HR-Platform-Design",
    },
    {
      id: 6,
      image: image6,
      title: "Home Swap Platform Design",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/25265613-Home-Swap-Platform-Design",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
