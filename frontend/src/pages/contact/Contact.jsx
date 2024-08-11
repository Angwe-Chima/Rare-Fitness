import { useState, useEffect } from "react";
import axios from "../../api/axios.js"; // Ensure axios is properly set up
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 
  const [isSubmitted, setIsSubmitted] = useState(false); 

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false); 
        setStatus("");
      }, 60000); // 60 seconds

    return () => clearTimeout(timer); 
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/email", formData); 
      setStatus("Message sent successfully! come back in 1min");
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("There was an error sending the message!", error);
      setStatus("Failed to send message, please try again later.");
    }
  };

  return (
    <div className="contact">
      {/* First Section */}
      <div className="image-container1">
        <div className="text-overlay">
          <h3>Our Contact</h3>
          <p>
            Reach out to us with any questions or concerns you may have, and
            we'll be happy to help!
          </p>
        </div>
      </div>

      <div className="section2">
        <div className="left-section">
          <div className="getInTouch">
            <h3>GET IN TOUCH</h3>
            <p>Our Contact Detail</p>
          </div>

          <div className="detailsandIcons">
            <div>
              <div>
                <div className="cell">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/contact%2FgetInTouch%2Femail.png?alt=media&token=5de1f40a-ef3e-421a-8b06-009d4ea89989"
                    alt=""
                  />
                  <h3>Email Us</h3>
                </div>
                <h5>rarefit@gmail.com</h5>
              </div>
              <div>
                <div className="cell">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/contact%2FgetInTouch%2Fstudio.png?alt=media&token=f05cb2d9-1cfe-41be-8016-4eb756a109dc"
                    alt=""
                  />
                  <h3>Gym Studio</h3>
                </div>
                <h5>No 12 Lake Avenue Lekki, Lagos Nigeria</h5>
              </div>
            </div>

            <div>
              <div>
                <div className="cell">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/contact%2FgetInTouch%2Fworking-time.png?alt=media&token=85f85e5d-8c23-4b0a-b243-6472576f92ed"
                    alt=""
                  />
                  <h3>Working Hours</h3>
                </div>
                <h5>Mon - Sat | 9:00AM - 11:00PM</h5>
              </div>
              <div>
                <div className="cell">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/rare-fitness.appspot.com/o/contact%2FgetInTouch%2Fphone-call.png?alt=media&token=041d052b-e03a-4562-b62a-09a65b702dc4"
                    alt=""
                  />
                  <h3>Call Us</h3>
                </div>
                <h5>+2346790834457, +234023466739</h5>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126867.28773655288!2d3.3984494433593655!3d6.4450239000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf79086cd222f%3A0x5d4330d9fa4f3d1c!2sPure%20Fitness%20Africa%20%7C%20Ikota%20(fka%20Fitness%20Central)!5e0!3m2!1sen!2sng!4v1721494077027!5m2!1sen!2sng"
              width="90%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>

        {/* Right section: Form */}
        <div className="right-section">
          <div className="messageText">
            <h2>Send Us A Message</h2>
            <h5>
              We're here to help with any inquiries or comments. Drop us a
              message and we'll get back to you shortly.
            </h5>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-div">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={15}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitted ? "submitted" : ""}`}
              disabled={isSubmitted} // Disable the button after submission
            >
              {isSubmitted ? "Message Sent" : "Send Message"}
            </button>
            {status && <p className="form-status">{status}</p>} {/* Display status message */}
          </form>
        </div>
      </div>

      {/* Third Section: Frequently Asked Questions */}
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="details">
          <details>
            <summary>1. What are your opening hours?</summary>
            <p>Monday-Friday: 6 AM - 10 PM, Weekends: 8 AM - 8 PM.</p>
          </details>
          <details>
            <summary>2. Do I need to book classes in advance?</summary>
            <p>Yes, advance booking is recommended.</p>
          </details>
          <details>
            <summary>3. Are personal training sessions available?</summary>
            <p>Yes, contact us for details.</p>
          </details>
          <details>
            <summary>4. Can I freeze or cancel my membership?</summary>
            <p>Yes, see our membership policy or contact us.</p>
          </details>
          <details>
            <summary>5. Do you offer personal training sessions?</summary>
            <p>
              Yes, we provide personal training. Contact us for more
              information.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Contact;
