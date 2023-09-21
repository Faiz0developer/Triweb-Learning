import React from "react";

const PersonalDetails = () => {
  return (
    <div className="pt-16 personal-details">
      <b className="text-white text-3xl">Personal Details</b>
      <div className="flex gap-12 min-[350px]:gap-20 pt-10">
        <div className="flex flex-col gap-4 text-xl ">
          <b><i className="fa-solid fa-earth-americas"></i></b>
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
          <p>Nainital, Uttarakhand</p>
          <p>June 5, 1999</p>
          <p>Male</p>
          <p className="pb-8">English, Hindi</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
