import "../styles/Header.css";
import MyImage from "../assets/my-img.png";
import NavbarLink from "./ui/NavbarLink";

const Header = ({isNavBarHidden, setIsNavBarHidden}) => {

  const ChangeNavVisibility = () => {
    setIsNavBarHidden(true);
  };


  return (
    <>
      <header
        className={`header-style ${
          isNavBarHidden ? " header-style-hidden" : "header-style-visible"
        }`}
      >
        <div className="mobile-view pb-20 pt-10 px-2">
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
            <ul className="right-container text-[#a4acc4] font-light">
              <NavbarLink
                onChangeVisivility={ChangeNavVisibility}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                navData="HOME"
              />
              <NavbarLink
                onChangeVisivility={ChangeNavVisibility}
                to="/my-profile"
                className={({ isActive }) => (isActive ? "active" : "")}
                navData="PROFILE"
              />
              <NavbarLink
                onChangeVisivility={ChangeNavVisibility}
                to="/skills"
                className={({ isActive }) => (isActive ? "active" : "")}
                navData="SKILLS"
              />
              <NavbarLink
                onChangeVisivility={ChangeNavVisibility}
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
                navData="PROJECTS"
              />
              <NavbarLink
                onChangeVisivility={ChangeNavVisibility}
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                navData="CONTACT"
              />
            </ul>
            <h1 className="mt-10 text-center text-[#a4acc4] text-xl">&#169; Faizan Siddiqui</h1>
          </div>
        </div>
        <div
          className="toggle-button"
          onClick={() => setIsNavBarHidden(!isNavBarHidden)}
        >
          <div className="div-button">
            <div className={`${isNavBarHidden ? "line-1" : ""}`}></div>
            <div>
              <div
                className={`${isNavBarHidden ? "line-2a" : "line-2a-visible"} `}
              ></div>
              <div
                className={`${isNavBarHidden ? "" : "line-2b-visible"}`}
              ></div>
            </div>
            <div className={`${isNavBarHidden ? "line-3" : ""}`}></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
