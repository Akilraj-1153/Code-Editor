import React, { useEffect, useState } from "react";
import { Navstate, Navbtnstate } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [Logo] = useState(require("../../Assets/CTlogoW.png"));

  const [naviconactive, setNaveiconactive] = useRecoilState(Navstate);
  const [currentnavbtn, setCurrentNavBtn] = useRecoilState(Navbtnstate);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Sync currentnavbtn state with current location on mount and location change
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setCurrentNavBtn("Home");
        break;
      case "/code_editor":
        setCurrentNavBtn("Code Editor");
        break;
      case "/userguide":
        setCurrentNavBtn("User Guide");
        break;
      case "/about":
        setCurrentNavBtn("About");
        break;
      case "/contact":
        setCurrentNavBtn("Contact");
        break;
      default:
        setCurrentNavBtn("");
    }
  }, [location.pathname, setCurrentNavBtn]);

  const handleNavButtonClick = (btn, path) => {
    setCurrentNavBtn(btn);
    setNaveiconactive(false)
    navigate(path);
  };

  return (
    <div className="h-fit w-full flex flex-col sticky top-0 z-50 backdrop-blur-3xl">
      <div className="h-[7vh] w-full rounded-b-lg flex items-center">
        <div className="h-full select-none">
          <img className="h-full w-auto scale-125 ml-4" src={Logo} alt="eleven:eleven" />
        </div>
        <div className="flex gap-2 justify-end h-[6vh] w-full items-center mr-10 font-mateSc text-xl select-none xs:hidden md:flex">
          <div className="flex rounded-md justify-center items-center gap-5 p-1 px-3 transition-transform">
            <button
              onClick={() => handleNavButtonClick("Home", "/")}
              className={`${
                currentnavbtn === "Home" ? "text-white border-b-4 border-white" : "text-white"
              } p-1`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavButtonClick("Code Editor", "/code_editor")}
              className={`${
                currentnavbtn === "Code Editor" ? "text-white border-b-4 border-white" : "text-white"
              } p-1`}
            >
              Code Editor
            </button>
            <button
              onClick={() => handleNavButtonClick("User Guide", "/userguide")}
              className={`${
                currentnavbtn === "User Guide" ? "text-white border-b-4 border-white" : "text-white"
              } p-1`}
            >
              User Guide
            </button>
            <button
              onClick={() => handleNavButtonClick("About", "/about")}
              className={`${
                currentnavbtn === "About" ? "text-white border-b-4 border-white" : "text-white"
              } p-1`}
            >
              About
            </button>
            <button
              onClick={() => handleNavButtonClick("Contact", "/contact")}
              className={`${
                currentnavbtn === "Contact" ? "text-white border-b-4 border-white" : "text-white"
              } p-1`}
            >
              Contact
            </button>
          </div>
        </div>
        <div className="flex justify-end h-full xs:w-full md:w-fit">
          <div className="h-full w-fit justify-end flex items-center mr-5 xs:flex md:hidden">
            {naviconactive ? (
              <div onClick={() => setNaveiconactive(false)}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  rotation={180}
                  size="xl"
                  color="white"
                />
              </div>
            ) : (
              <div onClick={() => setNaveiconactive(true)}>
                <FontAwesomeIcon
                  icon={faCircleChevronDown}
                  size="xl"
                  color="white"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {naviconactive && (
        <div className="h-[30vh] w-full xs:flex md:hidden z-40 shadow-xl rounded-md">
          <div className="flex gap-4 justify-center h-full w-full items-end p-2 font-mateSc text-xl select-none flex-col rounded-lg">
            <button
              onClick={() => handleNavButtonClick("Home", "/")}
              className={`${
                currentnavbtn === "Home" ? "text-white border-b-4 border-white" : "text-white"
              } px-2`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavButtonClick("Code Editor", "/code_editor")}
              className={`${
                currentnavbtn === "Code Editor" ? "text-white border-b-4 border-white" : "text-white"
              } px-2`}
            >
              Code Editor
            </button>
            <button
              onClick={() => handleNavButtonClick("User Guide", "/userguide")}
              className={`${
                currentnavbtn === "User Guide" ? "text-white border-b-4 border-white" : "text-white"
              } px-2`}
            >
              User Guide
            </button>
            <button
              onClick={() => handleNavButtonClick("About", "/about")}
              className={`${
                currentnavbtn === "About" ? "text-white border-b-4 border-white" : "text-white"
              } px-2`}
            >
              About
            </button>
            <button
              onClick={() => handleNavButtonClick("Contact", "/contact")}
              className={`${
                currentnavbtn === "Contact" ? "text-white border-b-4 border-white" : "text-white"
              } px-2`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
