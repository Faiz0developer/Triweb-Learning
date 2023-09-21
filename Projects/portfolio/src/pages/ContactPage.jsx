import React from "react";
import "../styles/Contact.css";
import ContactDetails from "../components/Contact/ContactDetails";

const ContactPage = () => {
  return (
    <section className="contact-section relative pt-20 text-[#a4acc4] pb-6">
      <div className="py-3 px-3 ">
        <div className="mb-12 relative ">
          <h1 className="relative text-[#ffffff] font-semibold text-4xl uppercase">
            Contact Me
          </h1>
        </div>
        <div className="contact-container">
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
