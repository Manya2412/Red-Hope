import "./Styles.css";
import React from "react";

//Our  Collaborators
// Our Services
const OurServices = () => {
    const services = [
      { name: "Extensive Blood Donor Database", dark: "img/Our Services Dark/Donor Database.png", light: "img/Our Services Light/Donor Database.png" },
      { name: "Instant Donor ID Access", dark: "img/Our Services Dark/ID Access.png", light: "img/Our Services Light/ID Access.png" },
      { name: "Safe Donations with Top Hospitals", dark: "img/Our Services Dark/Safe donations.png", light: "img/Our Services Light/Safe donations.png" },
      { name: "Automated Reminders for Donors", dark: "img/Our Services Dark/Automated Reminders.png", light: "img/Our Services Light/Automated Reminders.png" },
      { name: "No More Family Dependence for Blood", dark: "img/Our Services Dark/Family Dependence.png", light: "img/Our Services Light/Family Dependence.png" },
      { name: "Instant Emergency Blood Fulfillment", dark: "img/Our Services Dark/Emergency Blood.png", light: "img/Our Services Light/Emergency Blood.png" },
    ];
  
    return (
      <section className="services">
        <h1 className="heading-title">Our Services</h1>
        <div className="box-container">
          {services.map((service, index) => (
            <div key={index} className="box" data-dark={service.dark} data-light={service.light}>
              <img src={service.dark} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurServices;