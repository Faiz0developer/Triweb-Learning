import React from "react";
import MyImage from "../../assets/my-img.png";

const ProfileHero = () => {
  return (
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
      <div className="flex flex-col items-center personal-details pb-6">
        <p className="text-[#E2E8F0] text-center text-lg md:px-16 pt-3 ">
          I am a MERN Stack developer. I provide clean code with customization.
          I build more and more interactive and complex websites.
        </p>
      </div>
      {/* <div className="flex justify-center gap-8 pt-6 personal-details ">
        <button className="bg-[#334155] py-3 px-6 rounded mb-2">
          Personal Details
        </button>
        <button className="bg-[#334155] py-1 px-3 md:py-3 md:px-6 rounded mb-2 cursor-pointer">Education</button>
        <button>...</button>
        <button className="btn-exp-res bg-[#334155] py-3 px-6 rounded mb-2">Experience</button>
        <button className="btn-exp-res bg-[#334155] py-3 px-6 rounded mb-2">Resume</button>
      </div> */}
    </div>
  );
};

export default ProfileHero;
