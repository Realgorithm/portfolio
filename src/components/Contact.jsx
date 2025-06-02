// components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message sent!"),
        (err) => alert("Error: " + err.text)
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
