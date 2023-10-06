import React from "react";
import PortfolioProject from "../components/Portfolio/PortfolioProject";

const PortfolioPage = () => {
  return (
    <section className="relative pt-20 text-[#a4acc4] pb-6 font-[BlackOpsOne]">
      <div className="py-3 px-4">
        <div className="mb-12 relative ">
          <h2 className="relative text-[#ffffff] font-semibold text-4xl uppercase">
            Projects
          </h2>
        </div>
        <div className="row pb-10">
          <PortfolioProject />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
