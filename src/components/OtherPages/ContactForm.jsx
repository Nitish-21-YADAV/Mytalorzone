import React from "react";
import "../../styles/ContactForm.css";
import NavBar from '../NavBar'

function ContactForm() {
  return (
    <div className="contact-parent">
      <NavBar/>
      <div className="contact-container">
        <div className="contact-card">
          <div className="form-section">
            <h2>Contact Us</h2>
            <p>
              Have any questions or feedback? Feel free to get in touch with us.
            </p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="message-section">
            <h2>We'd Love to Hear From You!</h2>
            <p>
              Reach out to us with your inquiries, suggestions, or just to say
              hello. We value your feedback and will get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
