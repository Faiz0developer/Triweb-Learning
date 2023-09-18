import React from "react";
import "../styles/About.css";
import MyImage from "../assets/my-img.png";

const AboutPage = () => {
  return (
    <section className="relative pt-20 text-[#a4acc4] pb-6">
      <div className="bg-top"></div>
      <div className="px-6">
        <div className="mb-12 relative z-1 p-3">
          <h2 className="relative text-[#ffffff] font-semibold text-4xl uppercase">
            Profile
          </h2>
        </div>
        <div>
          <div className="img-container relative z-1">
            <img
              src={MyImage}
              alt="This is my pic"
              className="w-full h-full object-cover	rounded-full "
            />
          </div>
          <p className="text-center text-4xl pt-4">
            <b>Faizan Siddiqui</b>
          </p>
          <div className="flex flex-col items-center">
            <p className="text-[#E2E8F0] text-center text-lg md:px-16 pt-3 ">
              I am a MERN Stack developer. I provide clean code with
              customization. I build more and more interactive and complex
              websites.
            </p>
          </div>
          <div className="flex justify-center gap-8 pt-6 personal-details ">
            <h1 className="bg-[#334155] py-3 px-6 rounded mb-2">
              Personal Details
            </h1>
            <h1 className="bg-[#334155] py-3 px-6 rounded mb-2">Education</h1>
            <h1 className="bg-[#334155] py-3 px-6 rounded mb-2">Experience</h1>
            <h1 className="bg-[#334155] py-3 px-6 rounded mb-2">Resume</h1>
          </div>
        </div>
        <div className="pt-16 personal-details">
          <b className="text-white text-3xl">Personal Details</b>
          <div className="flex gap-20 pt-10">
            <div className="flex flex-col gap-4 text-xl ">
              <b>Nationality</b>
              <b>
                <i className="fa-solid fa-location-dot"></i>
              </b>
              <b>
                <i className="fa-solid fa-cake-candles"></i>
              </b>
              <b>
                <i className="fa-solid fa-user"></i>
              </b>
              <b>
                <i className="fa-solid fa-language"></i>
              </b>
            </div>
            <div className="flex flex-col gap-4 text-xl">
              <p>Indian</p>
              <p>Ramnagar, Nainital, Uttarakhand</p>
              <p>June 5, 1999</p>
              <p>Male</p>
              <p className="pb-8">English, Hindi</p>
            </div>
          </div>
        </div>
        <div className="pt-16 personal-details">
          <b className="text-white text-3xl">Education Qualification</b>
          <div className="pt-10">
            <div className="flex gap-24">
              <b className="text-xl">2018-2022</b>
              <div>
                <b className="text-[#037FFF] text-2xl">
                  Bachelor Of Technology
                </b>
                <h2 className="text-white py-3">
                  Bipin Tripathi Kumaun Institue of Technology
                </h2>
                <p className="w-3/4">
                  I done my btech from Electronics and Communication branch. I
                  graduated in July 2022.
                </p>
              </div>
            </div>
            <div className="flex gap-24 mt-10">
              <b className="text-xl">2016-2017</b>
              <div>
                <b className="text-[#037FFF] text-2xl">Intermediate</b>
                <h2 className="text-white py-3">Jawahar Navodaya Vidyalaya</h2>
                <p className="w-3/4">
                  I done my 12th from science stream with Physics, Chemistry,
                  Math and Computer Science subjects
                </p>
              </div>
            </div>
            <div className="flex gap-24 mt-10">
              <b className="text-xl">2014-2015</b>
              <div className="pb-10">
                <b className="text-[#037FFF] text-2xl">High School</b>
                <h2 className="text-white py-3">Jawahar Navodaya Vidyalaya</h2>
                <p>I done my 10th in 2015 from JNV Nainital.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 personal-details">
          <b className="text-white text-3xl">Working Experience</b>
          <div className="pt-10">
            <div className="flex gap-36">
              <b className="text-xl">2022</b>
              <div>
                <b className="text-[#037FFF] text-2xl">
                  Frontend Web Developer
                </b>
                <h2 className="text-white py-3">CodeXshark</h2>
                <p className="w-3/4 pb-10">
                  I worked in CodeXshark for 3 months from December 2022 to
                  March 2023. There I worked as Frontend Developer and learn
                  many new technologies like tailwind css, bootstrap. I learn
                  how to build a UI layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
