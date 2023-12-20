import React from "react";

const Experience = () => {
  return (
    <div className="pt-16 personal-details">
      <p className="text-white text-2xl sm:text-3xl font-bold">
        Work Experience
      </p>
      <div className="pt-10">
        <div className="flex flex-col sm:flex-row sm:gap-24">
          <b className="text-xl sm:w-1/4">2022</b>
          <div className="sm:w-3/4">
            <p className="text-[#037FFF] text-2xl font-medium">
              Frontend Developer
            </p>
            <h2 className="text-white py-1">CodeXshark</h2>
            <p className="pb-10">
              I worked in CodeXshark for 3 months from December 2022 to March
              2023. There I worked as Frontend Developer and learn many new
              technologies like tailwind css, bootstrap. I learn how to build a
              UI layout.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-24">
          <b className="text-xl sm:w-1/4">2023</b>
          <div className="sm:w-3/4">
            <p className="text-[#037FFF] text-2xl font-medium">
              MERN Stack Developer (Internship)
            </p>
            <h2 className="text-white py-1">Triweb API</h2>
            <p className="pb-10">
              Internship begins in August where I polished MERN Stack techs like HTML, CSS, JavScript, React,
              Redux/Redux-Toolkit, NodeJs, ExpressJs, MongoDb, MySQL.
              Learning was projects based where created different project's UI
              and REST APIs. I Contributed in open repo of quiz app where created a
              REST API and Frontend of whole quiz app from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
