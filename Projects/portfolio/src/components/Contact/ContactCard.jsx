import React from "react";

const ContactCard = ({ contactsvg, title, firstVal }) => {
  return (
    <div className="flex flex-col sm:flex-row mt-10 p-4 sm:p-8 bg-[#191d2b] gap-6 sm:gap-10">
      <span>{contactsvg}</span>
      <div>
        <h6 className="text-[#ffffff] mb-2 text-xl">{title} </h6>
        <p className="text-base min-[470px]:text-lg">{firstVal} </p>
      </div>
    </div>
  );
};

export default ContactCard;
