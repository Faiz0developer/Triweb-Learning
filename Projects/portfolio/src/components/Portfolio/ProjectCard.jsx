import React from "react";

const ProjectCard = ({ img, title, description }) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-10 mt-16 mx-auto">
        <div className="project-container">
          <div className="block relative">
            <img src={img} alt={title} />
          </div>
          {/* <div className="bg-white"> */}
            <h1 className="text-2xl text-[#ffffff] pt-4 pb-2 font-bold">{title} </h1>
            <p className="text-">{description} </p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
