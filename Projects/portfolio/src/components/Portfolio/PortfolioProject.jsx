import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../../data/data";
import Quizzle from "../../assets/portolios-imgs/quizzle.png";
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

const PortfolioProject = () => {
  return (
    <>
      <ProjectCard
        title={ProjectData[0].title}
        img={Quizzle}
        description={ProjectData[0].discription}
        link="https://quizzle-blush.vercel.app/"
        codeLink="https://github.com/Faiz0developer/Quiz-App-REST-API-TS-Mongoose/tree/master/frontend/quiz-frontend"
      />
      <ProjectCard
        title={ProjectData[1].title}
        img={Bankist}
        description={ProjectData[1].discription}
        link="https://bankist-app-ebon.vercel.app/"
        codeLink="https://github.com/Faiz0developer/bankist-app"
      />
      <ProjectCard
        title={ProjectData[2].title}
        img={ReactNavigation}
        description={ProjectData[2].discription}
        link="https://react-navigation-swart.vercel.app/"
        codeLink="https://github.com/Faiz0developer/react-navigation"
      />
      <ProjectCard
        title={ProjectData[3].title}
        img={Fitness}
        description={ProjectData[3].discription}
        link="https://fitness-app-gray-nine.vercel.app/"
        codeLink="https://github.com/Faiz0developer/fitness-app"
      />
      <ProjectCard
        title={ProjectData[4].title}
        img={Bitfinex}
        description={ProjectData[4].discription}
        link="https://crypto-app-puce-nine.vercel.app/"
        codeLink="https://github.com/Faiz0developer/crypto-app"
      />
      <ProjectCard
        title={ProjectData[5].title}
        img={Todo}
        description={ProjectData[5].discription}
        link="https://taskify-rho-ten.vercel.app/"
        codeLink="https://github.com/Faiz0developer/taskify"
      />
      <ProjectCard
        title={ProjectData[6].title}
        img={Shopify}
        description={ProjectData[6].discription}
        link="https://my-cart-delta.vercel.app"
        codeLink="https://github.com/Faiz0developer/my-cart"
      />
      <ProjectCard
        title={ProjectData[7].title}
        img={Expense}
        description={ProjectData[7].discription}
        link="https://expense-tracker-app-beta.vercel.app/"
        codeLink="https://github.com/Faiz0developer/expense-tracker-app"
      />
      <ProjectCard
        title={ProjectData[8].title}
        img={Weather}
        description={ProjectData[8].discription}
        link="https://my-weather-app-tawny.vercel.app/"
        codeLink="https://github.com/Faiz0developer/my-weather-app"
      />
      <ProjectCard
        title={ProjectData[9].title}
        img={Map}
        description={ProjectData[9].discription}
        link="https://monument-app.vercel.app/"
        codeLink="https://github.com/Faiz0developer/monument-app"
      />
      <ProjectCard
        title={ProjectData[10].title}
        img={Shop}
        description={ProjectData[10].discription}
        link="https://next-shopping-cart-wine.vercel.app/"
        codeLink="https://github.com/Faiz0developer/next-shopping-cart"
      />
    </>
  );
};

export default PortfolioProject;
