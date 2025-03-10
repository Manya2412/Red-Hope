import { useEffect, useRef } from "react";
import "./Styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


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
      <a href="#" className="company-logo">
        <img src="/logo.png" className="logo" alt="Logo" width="100px" />
      </a>
      <nav ref={navbarRef} className="navbar">
        <a href="/home">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/FindBlood">Find Blood</a>
        <a href="/RegisterNow">Register Now</a>
        <a href="/login">Log In</a>
      </nav>
      <i ref={menuRef} id="menu-btn" className="fas fa-bars"></i>
    </section>
  );
}

export default Navbar;
