import React from "react";
import "./Styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

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

//Frequently Asked Questions
function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Red Hope?",
      answer:
        "Red Hope is a platform that connects blood donors with people who need blood. It helps donors manage their information and helps recipients find relevant blood availability information."
    },
    {
      question: "How can I register as a blood donor?",
      answer:
        "You can register as a donor by clicking on the Register Now option in the navigation bar and providing the required information."
    },
    {
      question: "How can I find blood through Red Hope?",
      answer:
        "Go to the Find Blood section and enter the required recipient and blood group information to search for relevant blood availability."
    },
    {
      question: "Which blood groups are supported?",
      answer:
        "Red Hope supports the commonly used blood groups: A+, A-, B+, B-, AB+, AB-, O+ and O-."
    },
    {
      question: "Can I update my donor information?",
      answer:
        "Donor information can be updated when the corresponding account or profile management functionality is available on the platform."
    },
    {
      question: "Does Red Hope guarantee blood availability?",
      answer:
        "No. Blood availability can change frequently. Red Hope provides information to help users find relevant options, but availability should always be confirmed with the respective hospital or blood bank."
    },
    {
      question: "How often can I donate blood?",
      answer:
        "Blood donation frequency depends on factors such as your health, type of donation and applicable medical guidelines. Please consult a qualified healthcare professional or blood donation center before donating."
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Red Hope is designed to handle user information responsibly. Please refer to the Privacy Policy for details about the information collected and how it is used."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        <div className="faq-heading">
          <span>Have Questions?</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to some of the most common questions about
            blood donation and using Red Hope.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>

                <i
                  className={`fas ${
                    activeIndex === index
                      ? "fa-minus"
                      : "fa-plus"
                  }`}
                ></i>
              </button>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export { HomeIntro, Collaborators, OurServices, FAQ };


  
