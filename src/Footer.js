import "./Styles.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

// Footer
function Footer() {
  return (
    <section className="footer">
      <div className="upper-footer">
        <Link to="/home" onClick={() => window.location.reload()} className="company-logo">
          <img src="/logo.png" className="logo" alt="Logo" width="70px" />
        </Link>

        <h2>
          Ready to get started?
          <Link to="/Register" className="intro-btn">
            Donate
          </Link>
        </h2>
      </div>

      <div className="box-container">
        {/* Quick Links */}
        <div className="box">
          <h3>Quick Links</h3>
          <Link to="/home"><i className="fas fa-angle-right"></i> Home</Link>
          <Link to="/AboutUs"><i className="fas fa-angle-right"></i> About Us</Link>
          <Link to="/FindBlood"><i className="fas fa-angle-right"></i> Find Blood</Link>
          <Link to="/Register"><i className="fas fa-angle-right"></i> Register Now</Link>
          <Link to="/Login"><i className="fas fa-angle-right"></i> Log In</Link>
        </div>

        {/* Extra Links */}
        <div className="box">
          <h3>Extra Links</h3>
          <Link to="/home#faq"><i className="fas fa-angle-right"></i> Ask Questions</Link>
          <Link to="/AboutUs"><i className="fas fa-angle-right"></i> About Us</Link>
          <Link to="/PrivacyPolicy"><i className="fas fa-angle-right"></i> Privacy Policy</Link>
          <Link to="/TermsOfUse"><i className="fas fa-angle-right"></i> Terms of Use</Link>
        </div>

        {/* Contact Info */}
        <div className="box">
          <h3>Contact Info</h3>
          <a href="tel:+919876543210"><i className="fas fa-phone"></i> +91 98765 43210</a>
          <a href="tel:+919887766554"><i className="fas fa-phone"></i> +91 98877 66554</a>
          <a href="mailto:redhope@gmail.com"><i className="fas fa-envelope"></i> <span>redhope@gmail.com</span></a>
          <span className="footer-contact">
            <i className="fas fa-map"></i> Delhi, India - 110086
          </span>
        </div>

        {/* Social Media */}
        <div className="box">
          <h3>Follow Us</h3>
          <span className="footer-contact">
            <i className="fab fa-facebook-f"></i> Facebook
          </span>

          <span className="footer-contact">
            <i className="fab fa-twitter"></i> Twitter
          </span>

          <span className="footer-contact">
            <i className="fab fa-instagram"></i> Instagram
          </span>

          <span className="footer-contact">
            <i className="fab fa-linkedin"></i> LinkedIn
          </span>
        </div>
      </div>

      <div className="credit">
        Created by <span>Red Hope</span> | All Rights Reserved!
      </div>
    </section>
  );
}

export default Footer;

