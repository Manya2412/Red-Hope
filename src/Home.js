import React from "react";
import "./Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { useState, useEffect } from "react";

// Home Intro 
const HomeIntro = () => {
  return (
    <section className="home-intro" style={{ backgroundImage: "url('/NewHome.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="intro-content">
        <h1>RedHope</h1>
        <h2>Save Life Donate Blood</h2>
        <a href="/FindBlood" className="intro-btn">
          Get Blood Now
        </a>
      </div>
    </section>
  );
};

//Our Mission

//Our  Collaborators
const collaborators = [
  { img: "/Hospital1.png", name: "FORTIS" },
  { img: "/Hospital2.png", name: "AIIMS" },
  { img: "/Hospital3.png", name: "MAX" },
  { img: "/Hospital4.png", name: "MEDANTA" },
  { img: "/Hospital5.png", name: "SIR GANGARAM" },
  { img: "/Hospital6.png", name: "APOLLO" },
];

const Collaborators = () => {
  return (
    <section className="collaborators">
      <h1 className="heading-title">Our Collaborators</h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, dynamicBullets: false }}
        className="mySwiper"
      >
        {collaborators.map((collab, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={collab.img} alt={collab.name} />
              <div className="slide-content">{collab.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


// Our Services 
function OurServices() {
  const services = [
    { name: "Extensive Blood Donor Database", dark: "/donor-database.png", light: "/donor-database.png" },
    { name: "Instant Donor ID Access", dark: "/id-access.png", light: "/id-access.png" },
    { name: "Safe Donations with Top Hospitals", dark: "/safe-donations.png", light: "/safe-donations.png" },
    { name: "Automated Reminders for Donors", dark: "/donation-day.png", light: "/donation-day.png" },
    { name: "No More Family Dependence for Blood", dark: "/family-dependence.png", light: "/family-dependence.png" },
    { name: "Instant Emergency Blood Fulfillment", dark: "/emergency-blood.png", light: "/emergency-blood.png" },
  ];

  return (
    <section className="services">
      <h1 className="heading-title">Our Services</h1>
      <div className="box-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="box"
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
}


export { HomeIntro, Collaborators, OurServices };


  
