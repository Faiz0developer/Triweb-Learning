import React from "react";
import "../styles/About.css";
import ProfileHero from "../components/Profile/ProfileHero";
import PersonalDetails from "../components/Profile/PersonalDetails";
import Education from "../components/Profile/Education";
import Experience from "../components/Profile/Experience";

const AboutPage = () => {
  return (
    <section className="relative pt-20 text-[#a4acc4] pb-6">
      <div className="bg-top"></div>
      <div className="px-4">
        <div className="mb-12 relative">
          <h2 className="relative text-[#ffffff] font-semibold text-4xl uppercase">
            Profile
          </h2>
        </div>

        <ProfileHero />

        <PersonalDetails />

        <Education />

        <Experience />
      </div>
    </section>
  );
};

export default AboutPage;
