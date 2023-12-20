import React from "react";
import "../styles/Skills.css";
import Skills from "../components/Skills";

const SkillsPage = () => {
  return (
    <section className="relative pt-20 text-[#a4acc4] pb-6">
      <div className="py-3 px-4">
        <div className="mb-12 relative ">
          <h2 className="relative text-[#ffffff] font-semibold text-4xl uppercase">
            My Skills
          </h2>
        </div>
        <div>
          <div className="row pb-10">
            <Skills skill="NodeJS" level="50%" className="w-[50%]" />

            <Skills skill="ReactJS" level="60%" className="w-[60%]" />

            <Skills skill="Javascript" level="70%" className="w-[70%]" />

            <Skills skill="Typescript" level="65%" className="w-[65%]" />

            <Skills skill="Express" level="70%" className="w-[70%]" />

            <Skills skill="MongoDB" level="70%" className="w-[70%]" />

            <Skills skill="HTML5" level="95%" className="w-[95%]" />

            <Skills skill="CSS3" level="75%" className="w-[75%]" />

          </div>
          <div>
            <h1 className="text-[#fff] text-xl">Other Skills</h1>
            <div className="other-skills flex flex-wrap gap-3 py-2">
              <h2>Redux/Redux-Toolkit</h2>
              <h2>Bootstrap</h2>
              <h2>Tailwind CSS</h2>
              <h2>Postman</h2>
              <h2 className="w-[100px]">Jira</h2>
              <h2 className="w-[100px]">Git</h2>
              <h2>Material UI</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
