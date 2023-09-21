import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/data";
import Bankist from "../../assets/portolios-imgs/bankist.png";
import ReactNavigation from "../../assets/portolios-imgs/react-navigation.png";
import Fitness from "../../assets/portolios-imgs/fitness.png";
import Bitfinex from "../../assets/portolios-imgs/bitfinex.png";
import Todo from "../../assets/portolios-imgs/todo.png";
import Shopify from "../../assets/portolios-imgs/shopify.png";
import Expense from "../../assets/portolios-imgs/expense.png";
import Weather from "../../assets/portolios-imgs/weather.png";
import Map from "../../assets/portolios-imgs/map.png";
import Shop from "../../assets/portolios-imgs/shop.png";


const PortfolioProject = ({ title, img, description }) => {
  return (
    <>
      <ProjectCard
        title={ProjectData[0].title}
        img={Bankist}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={ReactNavigation}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Fitness}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Bitfinex}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Todo}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Shopify}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Expense}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Weather}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Map}
        description={ProjectData[0].discription}
      />
      <ProjectCard
        title={ProjectData[0].title}
        img={Shop}
        description={ProjectData[0].discription}
      />
    </>
  );
};

export default PortfolioProject;
