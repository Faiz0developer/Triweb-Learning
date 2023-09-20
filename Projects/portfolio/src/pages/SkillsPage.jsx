import React from "react";
import "../styles/Skills.css";
import Skills from "../components/Skills";

const SkillsPage = () => {
  return (
    <section className="lg:h-[100vh] relative pt-20 text-[#a4acc4] pb-6">
      <div className="py-3 px-9">
        <div className="mb-12 relative ">
          <h1 className="text-[#ffffff] font-semibold text-4xl uppercase">
            My Skills
          </h1>
        </div>
        <div>
          <div className="row pb-10">
            <Skills skill="HTML5" level="95%" className="w-[95%]" />

            <Skills skill="CSS3" level="75%" className="w-[75%]" />

            <Skills skill="Javascript" level="70%" className="w-[70%]" />

            <Skills skill="ReactJS" level="50%" className="w-[50%]" />

            <Skills skill="NodeJS" level="40%" className="w-[40%]" />

            <Skills skill="Express" level="75%" className="w-[75%]" />

            <Skills skill="MongoDB" level="70%" className="w-[70%]" />

            <Skills skill="Typescript" level="65%" className="w-[65%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
