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
        <HeaderBody/>
      </header>
      <main>
        <section></section>
      </main>
    </>
  );
};

export default Layout;
