import React from "react";
import Bitfinex from "../assets/portolios-imgs/bitfinex1.png";
import PortfolioProject from "../components/PortfolioProject";
import { ProjectData } from "../data/data";

const PortfolioPage = () => {
  return (
    <section className="h-[100vh] relative pt-20 text-[#a4acc4] pb-6">
      <div className="py-3 px-9">
        <div className="mb-6 relative ">
          <h1 className="text-[#ffffff] font-semibold text-4xl uppercase">
            Portfolios
          </h1>
        </div>
        <div className="row pb-10">
          
            <PortfolioProject title="Bitfinex" img={ProjectData[0].img} description = {ProjectData[0].discription} />
          
          <div className="col-4">project 2</div>
          <div className="col-4">project 3</div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
