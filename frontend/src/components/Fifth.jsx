import { useRef, useState } from "react";
import { gsap } from "gsap";
import Border from "./Border";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = e.target;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const maxMove = 50;
    const newX = Math.max(-maxMove, Math.min(maxMove, x - boxWidth / 2));
    const newY = Math.max(-maxMove, Math.min(maxMove, y - boxHeight / 2));

    gsap.to(buttonRef.current, {
      x: newX,
      y: newY,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter1 = () => {
    setHovered(true);
  };

  const handleMouseLeave2 = () => {
    setHovered(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", formData);
    try {
      const response = await axios.post("http://localhost:5000", formData);
      Swal.fire({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        background:"#111111",
        color:"#fff" // Auto-close after 3 seconds
    });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Failed to submit form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        background:"#111111",
        color:"#fff" 
    });
    }
  };
  return (
    <div className="contact-page">
      <div className="heading">
        <p>Stay in the loop.</p>
        <button
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Fill Contact Form
        </button>
      </div>

      <Border
        style={{
          position: "relative",
          width: "90%",
          left: "5%",
          height: "0.8px",
          background: "gray",
        }}
      />

      <div className="main-page">
        <div className="contact-form">
          <form onSubmit={handlesubmit}>
            <div className="name">
              <p>Full Name</p>
              <input
                 type="text" 
                 name="name" 
                 placeholder="John Doe" 
                 value={formData.name} 
                 onChange={handleChange} 
                 required 
              />
            </div>
            <div className="email">
              <p>Email</p>
              <input
              type="email" 
              name="email" 
              placeholder="Johndoe@abc" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              />
            </div>
            <div className="message">
              <p>Enter Message</p>
              <textarea
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
              ></textarea>
            </div>
            <button type="submit" className="submit">
              <p> Submit</p>
              <span
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave2}
                className={hovered ? "hovered" : ""} // Add a class when hovered
              ></span>
            </button>
          </form>
        </div>

        <div className="impo-links">
          <ul>
            Contact Ids
            <li>uttkarshsingh450@gmail.com</li>
            <li>+91-9582189958</li>
          </ul>

          <ul>
            Social Links
            <li>
              <a href="https://www.linkedin.com/in/uttkarsh-singh450/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/uttkarsh123-shiv">Github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/dilligaf_uf/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
