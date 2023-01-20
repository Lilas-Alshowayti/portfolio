import React from "react";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77ta9kl",
        "template_ylj1agn",
        form.current,
        "xsZh07m6blcxSuqH9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="heading">
          <h2 className="sec-title">Contact</h2>
        </div>
        <div className="content">
          <div className="in-touch">
            <div>Get in touch</div>
            <div className="contact-me">Contact me</div>
          </div>
          <div className="form">
            {done ? (
              <div className="thanks">Thanks for contacting me</div>
            ) : (
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="user_name"
                  className="user"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="user_email"
                  className="user"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  className="user"
                  placeholder="Message"
                />
                <input
                  type="submit"
                  value="Send"
                  className="btn secondary-btn"
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
