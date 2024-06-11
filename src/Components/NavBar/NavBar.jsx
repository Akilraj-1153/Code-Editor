import React, { useState } from "react";
import { RiExpandLeftFill } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import { Navstate } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [EELogo] = useState(require("../../Assets/11 White.png"));
  const [naviconactive, setNaveiconactive] = useRecoilState(Navstate);
  const navigate = useNavigate();


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
            <button
              onClick={()=>navigate("/")}
              className="text-black font-bold  bg-white rounded-md p-2 scale-75 hover:scale-90 transition-transform "
            >
              Home
            </button>
            <button
              onClick={()=>navigate("code_editor")}

              className="text-black font-bold bg-white rounded-md p-2  scale-75 hover:scale-90 transition-transform "
            >
              Code Editor
            </button>
            <button
              onClick={()=>navigate("about/aboutce")}
              className="text-black font-bold bg-white rounded-md p-2  scale-75 hover:scale-90 transition-transform "
            >
              About
            </button>
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
            <button 
              onClick={()=>navigate("/")}
            className="text-white ">Home</button>
            <button 
              onClick={()=>navigate("code_editor")}
            className="text-white ">Code Editor</button>
            <button 
              onClick={()=>navigate("about/aboutce")}
              className="text-white ">About</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
