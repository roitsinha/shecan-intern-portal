import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-columns">
        {/* Left: Contact Form */}
        <div className="form-section">
          <h1>Contact & Help</h1>
          <p>Have a question or need support? Reach out to us!</p>
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you ASAP.</p>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" required />

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Details */}
        <div className="details-section">
          <h2>Foundation Details</h2>
          <p>
            <strong>General Enquiries:</strong>{" "}
            <a href="mailto:info@shecanfoundation.org">
              info@shecanfoundation.org
            </a>
          </p>
          <p>
            <strong>Internship Support:</strong>{" "}
            <a href="mailto:internsupport@shecanfoundation.org">
              internsupport@shecanfoundation.org
            </a>
          </p>

          <h2>Connect With Us</h2>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
