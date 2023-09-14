import React, { useState } from "react";
import '../styles/Navbar.css'

const Navbar = () => {
  const [heading,setHeading] =useState(true)
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="col-lg-6 ">
          {heading?<span className="ms-5 fs-1 heading-text">TriwebAPI</span>
          :''
          }
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          // onClick={() => setHeading(!heading)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link text-dark fw-medium" aria-current="page">
              Pricing
            </span>
            <span className="nav-link text-dark fw-medium">Schedule meet</span>
            <span className="nav-link text-dark fw-medium">Book Demo</span>
            <span className="nav-link text-dark fw-medium">Join Wait List</span>
            <span className="nav-link text-dark fw-medium">Career</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
