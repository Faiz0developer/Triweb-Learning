import React from "react";

const Skills = ({ skill, level, className }) => {
  return (
    <div className="col-lg-6 mt-10">
      <h6 className="text-[#ffffff] text-xl">{skill}</h6>
      <div className="flex items-center gap-6">
        <div>{level}</div>
        <div className="progress-container">
          <span className={className}></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
