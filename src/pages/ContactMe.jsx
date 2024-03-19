import { useState } from "react";

import "../style/contactMe.css";

const ContactMe = () => {
  const [formState] = useState({ name: "", email: "", message: "" });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-me-section">
      <a href="mailto:shanhun.codes@gmail.com" className="email">
        Shanhun.codes@gmail.com
      </a>
      <h3 className="title">Contact Me!</h3>
      <p className="aussieHey">G&apos;Day! Get in contact with me below!</p>

      {/* FORM */}
      <form
        className="contact-form"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* input for name  */}
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
          required
        />{" "}
        <br />
        {/* email input */}
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={email}
          required
        />{" "}
        <br />
        {/* message input */}
        <textarea
          className="input text-area"
          name="message"
          rows="10"
          placeholder="Write your message here!! Lets Talk ideas!!!"
          defaultValue={message}
          required
        ></textarea>
        <br />
        <button
          className="contact-submit-btn"
          type="submit"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
