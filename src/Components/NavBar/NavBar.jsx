import React, { useState } from "react";
import { RiExpandLeftFill, RiExpandRightFill } from "react-icons/ri";
import { Navstate, Navbtnstate, UITheme,activeTheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { PiSunDimFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [EELogoDark] = useState(require("../../Assets/11 Black.png"));
  const [EELogoLight] = useState(require("../../Assets/11 White.png"));
  const [naviconactive, setNaveiconactive] = useRecoilState(Navstate);
  const [currentnavbtn, setCurrentNavBtn] = useRecoilState(Navbtnstate);
  const navigate = useNavigate();
  const [theme, setTheme] = useRecoilState(UITheme);
  const [currentTheme, setCurrentTheme] = useRecoilState(activeTheme);
 




  return (
    <div className="h-fit w-full flex flex-col  sticky top-0 z-50">
      <div
        className={`h-[7vh] w-screen rounded-b-lg flex items-center ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="h-full select-none">
          {theme === "light" && (
            <img
              className="h-full w-auto scale-125 ml-2"
              src={EELogoDark}
              alt="eleven:eleven"
            />
          )}
          {theme === "dark" && (
            <img
              className="h-full w-auto scale-125 ml-2"
              src={EELogoLight}
              alt="eleven:eleven"
            />
          )}
        </div>
        <div className="flex gap-2 justify-end h-[6vh] w-full items-center mr-10 font-mateSc text-xl select-none xs:hidden md:flex">
          <div className="flex  rounded-md justify-center items-center gap-5 p-1 px-3 transition-transform">
            <button
              onClick={() => {
                navigate("/");
                setCurrentNavBtn("Home");
              }}
              className={`
                ${
                  currentnavbtn === "Home" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "Home" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "Home" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "Home" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }
               p-1 rounded-md`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("code_editor");
                setCurrentNavBtn("Code Editor");
              }}
              className={`
                ${
                  currentnavbtn === "Code Editor" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "Code Editor" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "Code Editor" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "Code Editor" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }
                 p-1 rounded-md`}
            >
              Code Editor
            </button>
            <button
              onClick={() => {
                navigate("about/aboutce");
                setCurrentNavBtn("About");
              }}
              className={`
                ${
                  currentnavbtn === "About" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "About" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "About" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "About" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }

                 p-1 rounded-md`}
            >
              About
            </button>
          </div>
        </div>
        <div className="flex justify-end  xs:w-full md:w-fit">
        <div className="h-full w-fit justify-end flex items-center mr-2 xs:flex cursor-pointer  ">
          {theme === "light" ? (
            <div onClick={() => { setTheme("dark"); setCurrentTheme('tomorrow_night_bright') }}>
              <BsFillMoonStarsFill size={30} color="black" />
            </div>
          ) : (
            <div onClick={() => {setTheme("light"); setCurrentTheme('chrome')}}>
              <PiSunDimFill size={30} color="white" />
            </div>
          )}
        </div>
        <div className="h-full w-fit justify-end flex items-center mr-2 xs:flex md:hidden ">
          {naviconactive ? (
            <div onClick={() => setNaveiconactive(false)}>
              <FontAwesomeIcon icon={faCircleChevronDown} rotation={180} size="2xl" color={theme==='light'? "bg-white":"bg-black"}  />

            </div>
          ) : (
            <div onClick={() => setNaveiconactive(true)}>
              <FontAwesomeIcon icon={faCircleChevronDown} size="2xl"  color={theme==='light'? "bg-white":"bg-black"} />

            </div>
          )}
        </div>
        </div>
        
      </div>
      {naviconactive && (
        <div className=" h-[20vh] w-full  xs:flex md:hidden z-40 shadow-xl  rounded-md ">
          <div className={`${theme==='light'? "bg-white text-black":"text-white bg-black"} flex gap-4 justify-center h-full w-full items-end p-2 font-mateSc text-xl select-none flex-col  rounded-lg`}>
            <button
              onClick={() => {
                navigate("/");
                setCurrentNavBtn("Home");
                setNaveiconactive(false);
              }}
              className={`
                ${
                  currentnavbtn === "Home" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "Home" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "Home" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "Home" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }
                rounded-md px-2`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("code_editor");
                setCurrentNavBtn("Code Editor");
                setNaveiconactive(false);
              }}
              className={`
                ${
                  currentnavbtn === "Code Editor" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "Code Editor" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "Code Editor" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "Code Editor" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }
                rounded-md px-2`}
            >
              Code Editor
            </button>
            <button
              onClick={() => {
                navigate("about/aboutce");
                setCurrentNavBtn("About");
                setNaveiconactive(false);
              }}
              className={`
                ${
                  currentnavbtn === "About" && theme === "light"
                    ? "text-white bg-black"
                    : ""
                }
                ${
                  currentnavbtn !== "About" && theme === "light"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn === "About" && theme === "dark"
                    ? "text-black bg-white"
                    : ""
                }
                ${
                  currentnavbtn !== "About" && theme === "dark"
                    ? "text-white bg-black"
                    : ""
                }

                  rounded-md px-2`}
            >
              About
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
