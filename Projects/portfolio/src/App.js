import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import './styles/Main.css'
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isNavBarHidden, setIsNavBarHidden] = useState(true);

  document.body.addEventListener('click',(e)=> {
    const mainDiv = e.target.closest("main")

    if(mainDiv){
      setIsNavBarHidden(true)
    }
  })

  return (
    <div className="lg:pl-[300px] ">
      <Header isNavBarHidden={isNavBarHidden} setIsNavBarHidden={setIsNavBarHidden} />
      <main className="main bg-img">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/my-profile" element={<ProfilePage/>} />
          <Route path="/skills" element={<SkillsPage/>} />
          <Route path="/portfolio" element={<PortfolioPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
