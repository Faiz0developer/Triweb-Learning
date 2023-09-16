import React from "react";
import "../styles/Header.css";
import MyImage from "../assets/my-img.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-style">
      <div className="pb-20 pt-10 px-6">
        <div>
          <div className="left-container">
            <div className="img-container">
              <img
                src={MyImage}
                alt="This is my pic"
                className="w-full h-full object-cover	rounded-full"
              />
            </div>
          </div>
          <div className="ml-4 mt-8">
            <ul className="flex flex-col gap-6 text-[#fdfeff] font-light">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>ABOUT</li>
              <li>RESUME</li>
              <li>SKILLS</li>
              <li>PORTFOLIO</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
