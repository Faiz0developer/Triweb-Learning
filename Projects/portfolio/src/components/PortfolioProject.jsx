import React from "react";

const PortfolioProject = ({ title, img,description }) => {
  return (
    <div className="col-4 mt-10">
      <div>
        <div>
        <img src={img} alt="" />
        </div>
        <h1>{title} </h1>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default PortfolioProject;
