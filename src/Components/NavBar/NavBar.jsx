import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { Navstate } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";

function NavBar() {
  const [EELogo] = useState(require("../../Assets/11 White.png"));
  const [naviconactive, setNaveiconactive] = useRecoilState(Navstate);

  return (
    <div className="h-fit w-full flex flex-col gap-2">
      <div className="h-[7vh] w-screen bg-stone-900 rounded-b-lg flex items-center">
        <div className="h-full select-none">
          <img
            className="h-full w-auto scale-125 ml-2"
            src={EELogo}
            alt="eleven:eleven"
          ></img>
        </div>
        <div className="flex gap-2 justify-end h-full w-full items-center mr-10 font-mateSc text-xl select-none xs:hidden md:flex">
          <div className="flex bg-white rounded-md justify-center tems-center">
            <Link
              to="/"
              className="text-black font-bold  bg-white rounded-md p-2 scale-75 hover:scale-90 transition-transform "
            >
              Home
            </Link>
            <Link
              to="code_editor"
              className="text-black font-bold bg-white rounded-md p-2  scale-75 hover:scale-90 transition-transform "
            >
              Code Editor
            </Link>
            <Link
              to="about"
              className="text-black font-bold bg-white rounded-md p-2  scale-75 hover:scale-90 transition-transform "
            >
              About
            </Link>
          </div>
        </div>
        <div className="h-full w-full justify-end  flex  items-center mr-2  xs:flex md:hidden">
          {naviconactive ? (
            <div onClick={() => setNaveiconactive(false)}>
              <RiExpandRightFill size={30} color="white"></RiExpandRightFill>
            </div>
          ) : (
            <div onClick={() => setNaveiconactive(true)}>
              <RiExpandLeftFill size={30} color="white"></RiExpandLeftFill>
            </div>
          )}
        </div>
      </div>
      {naviconactive && (
        <div className="bg-stone-900 h-[20vh] w-full rounded-lg  xs:flex md:hidden">
          <div className="flex gap-4 justify-center h-full w-full items-end p-2 font-mateSc text-xl select-none flex-col">
            <Link className="text-white ">Home</Link>
            <Link className="text-white ">Code Editor</Link>
            <Link className="text-white ">About</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
