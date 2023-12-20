import React from "react";
import "../../styles/Portfolio.css";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ img, title, description, link, codeLink }) => {
  return (
    <>
      <div className="portfolio-project relative col-lg-4 col-sm-6 col-10 mt-12 mx-auto">
        <div className="project-container">
          <div className="project-img">
            <div className="rounded-md mt-8 p-1">
              <img src={img} alt={title} />
            </div>
            <ul>
              <li>
                <a href={link} target="_blank" rel="noreferrer">
                  live
                </a>
              </li>
              <li>
                <a href={codeLink} target="_blank" rel="noreferrer">
                  code
                </a>
              </li>
            </ul>
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
