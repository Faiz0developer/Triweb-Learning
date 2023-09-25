import React from "react";
import { Link } from "react-router-dom";

const MyDescription = () => {
  return (
    <div className="px-4 w-full">
      <div className="my-details text-center">
        <h1 className="home-title text-[40px] min-[340px]:text-[45px] md:text-[60px] text-white mb-6">
          Hi, I am
          <span className="text-[#fec544] max-[550px]:block">
            {" "}
            Faizan Siddiqui
          </span>
        </h1>
        <p className="text-[#E2E8F0] text-lg md:text-xl mb-6 px-4 sm:px-12 lg:px-0 whitespace-pre-line break-words">
          I am a MERN Stack developer. I provide clean code with customization.
          I build more and more interactive and complex websites.
        </p>
        <div className="flex justify-center items-center gap-8 mt-6 h-12">
          <Link to="https://twitter.com/FaizanS32830141" target="_blank">
            <i className="fa-brands fa-twitter fa-2xl fa-beat-fade text-white cursor-pointer mt-3 z-10"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/faizan-siddiqui-6a40ba187"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in fa-2xl text-white fa-beat-fade cursor-pointer"></i>
          </Link>
          <Link to="https://github.com/Faiz0developer" target="_blank">
            <i className="fa-brands fa-github fa-2xl text-white fa-beat-fade cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyDescription;
