import React, { useState } from "react";
import { RiExpandLeftFill, RiExpandRightFill } from "react-icons/ri";
import { Navstate, Navbtnstate } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [EELogo] = useState(require("../../Assets/11 White.png"));
  const [naviconactive, setNaveiconactive] = useRecoilState(Navstate);
  const [currentnavbtn, setCurrentNavBtn] = useRecoilState(Navbtnstate);
  const navigate = useNavigate();

  return (
    <div className="h-fit w-full flex flex-col gap-1 sticky top-0 z-50">
      <div className="h-[7vh] w-screen bg-stone-900 rounded-b-lg flex items-center">
        <div className="h-full select-none">
          <img
            className="h-full w-auto scale-125 ml-2"
            src={EELogo}
            alt="eleven:eleven"
          />
        </div>
        <div className="flex gap-2 justify-end h-[6vh] w-full items-center mr-10 font-mateSc text-xl select-none xs:hidden md:flex">
          <div className="flex bg-white rounded-md justify-center items-center gap-5 p-1 px-3 transition-transform">
            <button
              onClick={() => {
                navigate("/");
                setCurrentNavBtn("Home");
              }}
              className={`${
                currentnavbtn === "Home"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("code_editor");
                setCurrentNavBtn("Code Editor");
              }}
              className={`${
                currentnavbtn === "Code Editor"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
            >
              Code Editor
            </button>
            <button
              onClick={() => {
                navigate("about/aboutce");
                setCurrentNavBtn("About");
              }}
              className={`${
                currentnavbtn === "About"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
            >
              About
            </button>
          </div>
        </div>
        <div className="h-full w-full justify-end flex items-center mr-2 xs:flex md:hidden">
          {naviconactive ? (
            <div onClick={() => setNaveiconactive(false)}>
              <RiExpandRightFill size={30} color="white" />
            </div>
          ) : (
            <div onClick={() => setNaveiconactive(true)}>
              <RiExpandLeftFill size={30} color="white" />
            </div>
          )}
        </div>
      </div>
      {naviconactive && (
        <div className="bg-stone-900 h-[20vh] w-full  xs:flex md:hidden z-40 shadow-xl p-1 rounded-md">
          <div className="flex gap-4 justify-center h-full w-full items-end p-2 font-mateSc text-xl select-none flex-col bg-white rounded-lg">
            <button
              onClick={() => {
                navigate("/");
                setCurrentNavBtn("Home");
                setNaveiconactive(false);
              }}
              className={`${
                currentnavbtn === "Home"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate("code_editor");
                setCurrentNavBtn("Code Editor");
                setNaveiconactive(false);
              }}
              className={`${
                currentnavbtn === "Code Editor"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
            >
              Code Editor
            </button>
            <button
              onClick={() => {
                navigate("about/aboutce");
                setCurrentNavBtn("About");
                setNaveiconactive(false);
              }}
              className={`${
                currentnavbtn === "About"
                  ? "text-white bg-black p-1 rounded-md"
                  : "text-black"
              } cursor-pointer h-full transition-transform px-2`}
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
