import { useEffect, useRef } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Navbar
function Navbar() {
    const menuRef = useRef(null);
    const navbarRef = useRef(null);
  
    useEffect(() => {
        if (menuRef.current && navbarRef.current) {
          const menu = menuRef.current;
          const navbar = navbarRef.current;
      
          const toggleMenu = () => {
            menu.classList.toggle("fa-times");
            navbar.classList.toggle("active");
          };
      
          menu.addEventListener("click", toggleMenu);
      
          window.addEventListener("scroll", () => {
            menu.classList.remove("fa-times");
            navbar.classList.remove("active");
          });
      
          return () => {
            menu.removeEventListener("click", toggleMenu);
          };
        }
      }, []);
      
  return (
    <section className="header">
      <Link to="/home" className="company-logo">
      <img src="/logo.png" className="logo" alt="Logo" width="100px" />
      </Link>
      <nav ref={navbarRef} className="navbar">
        <Link to="/Home">Home</Link>
        {/*<a href="/aboutus">About Us</a>
        <a href="/FindBlood">Find Blood</a>*/}
        <Link to="/Register">Register Now</Link>
        <Link to="/Login">Log In</Link>
      </nav>
      <i ref={menuRef} id="menu-btn" className="fas fa-bars"></i>
    </section>
  );
}

export default Navbar;
