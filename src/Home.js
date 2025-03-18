import "./Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import { useState, useEffect } from "react";

//Our Mission


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

//Our  Collaborators
const collaborators = [
    { name: "FORTIS", img: "/Hospital1.png" },
    { name: "AIIMS", img: "/Hospital2.png" },
    { name: "MAX", img: "/Hospital3.png" },
    { name: "MEDANTA", img: "/Hospital4.png" },
    { name: "SIR GANGARAM", img: "/Hospital5.png" },
    { name: "APOLLO", img: "/Hospital6.png" },
  ];
  
  const Collaborators = () => {
    return (
      <section className="collaborators">
        <h1 className="heading-title">Our Collaborators</h1>
        {/*<Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          className="mySwiper"
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {collaborators.map((collaborator, index) => (
            <SwiperSlide key={index}>
              <img src={collaborator.img} alt={collaborator.name} />
              <div className="slide-content">{collaborator.name}</div>
            </SwiperSlide>
          ))}
        </Swiper>*/}
  
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
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


  
