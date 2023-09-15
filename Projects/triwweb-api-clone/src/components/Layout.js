import React from "react";
import Navbar from "./header/Navbar";
import "../App.css";
import Design from "./Design";
import HeaderBody from "./header/HeaderBody";
import Project from "./main/Project";
import ExprerienceDevelopment from "./main/Exprerience-development";
import AnalyzeProject from "./main/Analyze-project";

const Layout = () => {
  return (
    <>
      <Design />
      <header className="bg-white">
        <Navbar />
        <HeaderBody />
      </header>
      <main className="container-fluid bg-img">
        <div className="col-xl-9 col-10 mx-auto">
          <section>
            <Project/>
          </section>
          <section>
            <ExprerienceDevelopment/>
          </section>
          <section>
            <AnalyzeProject/>
          </section>
        </div>
      </main>
      <footer className="bg-secondary-subtle d-flex justify-content-between footer">
        <p className="m-0 fw-semibold">triwebAPI</p>
        <div>
        <i className="fa-brands fa-linkedin" style={{color:"#0d6efd"}}></i>
        <i className="fa-brands fa-twitter ms-4" style={{color:"#5aa2f0"}}></i>
        </div>
      </footer>
    </>
  );
};

export default Layout;
