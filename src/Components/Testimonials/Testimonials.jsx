import React from "react";
import "./Testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Avatar1,
      name: "Mohammed Ajar",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, impedit harum dicta aut reprehenderit veniam tempora provident explicabo consequatur rerum, sunt voluptatibus pariatur accusamus blanditiis, animi ad nobis. Rerum, natus?",
    },
    {
      id: 2,
      image: Avatar2,
      name: "Samuel Obi",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, impedit harum dicta aut reprehenderit veniam tempora provident explicabo consequatur rerum, sunt voluptatibus pariatur accusamus blanditiis, animi ad nobis. Rerum, natus?",
    },
    {
      id: 3,
      image: Avatar3,
      name: "Goodluck Reginald",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, impedit harum dicta aut reprehenderit veniam tempora provident explicabo consequatur rerum, sunt voluptatibus pariatur accusamus blanditiis, animi ad nobis. Rerum, natus?",
    },
    {
      id: 4,
      image: Avatar4,
      name: "Edith Kingsley",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, impedit harum dicta aut reprehenderit veniam tempora provident explicabo consequatur rerum, sunt voluptatibus pariatur accusamus blanditiis, animi ad nobis. Rerum, natus?",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className=" container testimonial__container"
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
