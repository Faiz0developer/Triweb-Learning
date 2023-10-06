import React from "react";
import MyDescription from "../components/Home/MyDescription";
import Bubble from "../components/Home/Bubble";

const Home = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center relative font-[BlackOpsOne]">
      <MyDescription/>
      <Bubble/>
    </section>
  );
};

export default Home;
