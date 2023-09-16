import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center relative text-center">
      <div className="px-4 w-full">
        <div>
          <h1 className="home-title text-[60px] text-white mb-6">
            Hi, I am
            <span className="text-[#fec544]"> Faizan Siddiqui</span>
          </h1>
          <p className="text-[#E2E8F0] text-lg mb-6">
            I am a MERN Stack developer. I provide clean code with customization.
            <br />I build more and more interactive and complex websites.
          </p>
          <div className="flex justify-center items-center gap-8 mt-6 h-12">
            <Link>
              <i className="fa-brands fa-facebook fa-2xl fa-beat-fade text-white cursor-pointer mt-3" ></i>    
            </Link>
            <Link to='https://www.linkedin.com/in/faizan-siddiqui-6a40ba187' target="_blank">
              <i className="fa-brands fa-linkedin-in fa-2xl text-white fa-beat-fade cursor-pointer"></i>
            </Link>
            <Link to='https://github.com/Faiz0developer' target="_blank">
              <i className="fa-brands fa-github fa-2xl text-white fa-beat-fade cursor-pointer"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
