import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiLinkedin } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'service_dx0hcgc',  // Replace with your EmailJS service ID
      'template_lqrkf2m', // Replace with your EmailJS template ID
      form.current,
      't3gPt7xXjycVaN3Dw'      // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus("Message Sent ✅");
      form.current.reset();
    })
    .catch(() => {
      setStatus("Failed to Send ❌");
    });
  };

  return (
    <section id="contact" className="contact-section  w-full bg-black bg-dot-white/[0.4] bg-dot-black/[0.1] relative flex items-center justify-center">
      <div className="contact-container">
        <h2>Let's <span>Connect</span> </h2>
        <p className="subtitle">Interested in collaborating or hiring? Drop a message!</p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">{status}</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/krishnan-t-17-02-2005-/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
          <a href="https://github.com/krishnan1235" target="_blank" rel="noopener noreferrer"><IoLogoGithub />
          </a>
          <a href="https://leetcode.com/u/krishnan_2005/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
