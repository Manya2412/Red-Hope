import "./Styles.css";
import { useState, useEffect } from "react";

//Our Mission

//Our  Collaborators

// Our Services
const OurServices = () => {
    const services = [
      {
        name: "Extensive Blood Donor Database", dark: "/donor-database.png", light: "/donor-database.png",
      },
      {
        name: "Instant Donor ID Access", dark: "/id-access.png", light: "/id-access.png",
      },
      { 
        name: "Safe Donations with Top Hospitals", dark: "/safe-donations.png", light: "/safe-donations.png",
      },
      {
        name: "Automated Reminders for Donors", dark: "/donation-day.png", light: "/donation-day.png",
      },
      {
        name: "No More Family Dependence for Blood", dark: "/family-dependence.png", light: "/family-dependence.png",
      },
      {
        name: "Instant Emergency Blood Fulfillment", dark: "/emergency-blood.png", light: "/emergency-blood.png",
      },
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

  
