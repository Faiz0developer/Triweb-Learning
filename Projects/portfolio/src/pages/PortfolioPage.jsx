import React from "react";
import PortfolioProject from "../components/Portfolio/PortfolioProject";

const PortfolioPage = () => {
  return (
    <section className="relative pt-20 text-[#a4acc4] pb-6">
      <div className="py-3 px-10">
        <div className="mb-6 relative ">
          <h1 className="text-[#ffffff] font-semibold text-4xl uppercase">
            Portfolios
          </h1>
        </div>
        <div className="row pb-10">
          <PortfolioProject />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
