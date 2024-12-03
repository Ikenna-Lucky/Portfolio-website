import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { PiMessengerLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_psw8g9z", "template_l8vuw4h", form.current, {
        publicKey: "ZISrMTg9p1UDVNnH9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ikennagoodluck212@gmail.com</h5>
            <a href="mailto:ikennagoodluck212@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <PiMessengerLogoBold className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ikenna Mbaekwe</h5>
            <a
              href="https://m.me/profile.php?id=100080067259202&_rdc=1&_rdr"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+234 91...22</h5>
            <a href="https://wa.me/+2349070574211" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
