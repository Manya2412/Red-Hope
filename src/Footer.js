import "./Styles.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

// Footer
function Footer() {
  return (
    <section className="footer">
      <div className="upper-footer">
        <a href="#" onClick={() => window.location.reload()} className="company-logo">
          <img src="/logo.png" className="logo" alt="Logo" width="70px" />
        </a>
        <h2>
          Ready to get started?
          <a href="/Register" className="intro-btn">Donate</a>
        </h2>
      </div>

      <div className="box-container">
        {/* Quick Links */}
        <div className="box">
          <h3>Quick Links</h3>
          <a href="/home"><i className="fas fa-angle-right"></i> Home</a>
          <a href="/aboutus"><i className="fas fa-angle-right"></i> About Us</a>
          <a href="/FindBlood"><i className="fas fa-angle-right"></i> Find Blood</a>
          <a href="/Register"><i className="fas fa-angle-right"></i> Register Now</a>
          <a href="/login"><i className="fas fa-angle-right"></i> Log In</a>
        </div>

        {/* Extra Links */}
        <div className="box">
          <h3>Extra Links</h3>
          <a href="#"><i className="fas fa-angle-right"></i> Ask Questions</a>
          <a href="/aboutus"><i className="fas fa-angle-right"></i> About Us</a>
          <a href="/PrivacyPolicy"><i className="fas fa-angle-right"></i> Privacy Policy</a>
          <a href="/TermsOfUse"><i className="fas fa-angle-right"></i> Terms of Use</a>
        </div>

        {/* Contact Info */}
        <div className="box">
          <h3>Contact Info</h3>
          <a href="tel:+919876543210"><i className="fas fa-phone"></i> +91 98765 43210</a>
          <a href="tel:+919887766554"><i className="fas fa-phone"></i> +91 98877 66554</a>
          <a href="mailto:redhope@gmail.com"><i className="fas fa-envelope"></i> <span>redhope@gmail.com</span></a>
          <a href="#"><i className="fas fa-map"></i> Delhi, India - 110086</a>
        </div>

        {/* Social Media */}
        <div className="box">
          <h3>Follow Us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </div>
      </div>

      <div className="credit">
        Created by <span>Red Hope</span> | All Rights Reserved!
      </div>
    </section>
  );
}

export default Footer;

