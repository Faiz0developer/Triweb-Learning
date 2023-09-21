import React from "react";
import "../../styles/Portfolio.css";

const ProjectCard = ({ img, title, description, link }) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 col-10 mt-12 mx-auto">
        <div className="project-container">
          <div className="block relative mb-3">
            <img src={img} alt={title} />
          </div>
          <h2>
            <a href={link}>{title}</a>
          </h2>
          <p className="text-lg mb-4">{description} </p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
