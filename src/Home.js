import "./Styles.css";
import { useState, useEffect } from "react";

//Our Mission

//Our  Collaborators

// Our Services
const OurServices = () => {
    const services = [
      { name: "Extensive Blood Donor Database", dark: "/Donor Database.png",   light: "Donor Database.png" },
      { name: "Instant Donor ID Access", dark: "ID Access.png", light: "ID Access.png" },
      { name: "Safe Donations with Top Hospitals", dark: "Safe donations.png", light: "Safe donations.png" },
      { name: "Automated Reminders for Donors", dark: "Automated Reminders.png", light: "Automated Reminders.png" },
      { name: "No More Family Dependence for Blood", dark: "Family Dependence.png", light: "Family Dependence.png" },
      { name: "Instant Emergency Blood Fulfillment", dark: "Emergency Blood.png", light: "Emergency Blood.png" },
    ];
  
    return (
        <section className="services">
        <h1 className="heading-title">Our Services</h1>
        <div className="box-container">
          {services.map((service, index) => (
            <div
              key={index}
              className="box"
              data-dark={service.dark}
              data-light={service.light}
              onMouseEnter={(e) => (e.currentTarget.querySelector("img").src = service.light)}
              onMouseLeave={(e) => (e.currentTarget.querySelector("img").src = service.dark)}
            >
              <img src={service.dark} alt={service.name} />
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default OurServices;