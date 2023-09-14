import React from "react";
import Navbar from "./header/Navbar";
import "../App.css";
import Design from "./Design";
import HeaderBody from "./header/HeaderBody";

const Layout = () => {
  return (
    <>
      <Design />
      <header className="bg-white">
        <Navbar />
        <HeaderBody />
      </header>
      <main>
        <section>main</section>
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
