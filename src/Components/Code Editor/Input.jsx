import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    InputToServer,UITheme
} from "../Atoms/Atoms";


function Input() {
    const [serverInput,setserverInput]=useRecoilState(InputToServer)
  const [theme, setTheme] = useRecoilState(UITheme);


console.log(Input)

function handdleinput(event){
    setserverInput(event.target.value)
}


  return (
    <div className={`flex flex-col gap-2 h-full overflow-scroll rounded-md ${
      theme === "light" ? " bg-white" : "bg-black"
    }`}>
      <div  className={`h-[6vh] w-full  rounded-md flex items-center p-1 gap-2  ${
          theme === "light" ? "text-white bg-black" : "text-black bg-white "
        }`}>
          <div className="flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className=" p-2 rounded-md font-mate" >
          Input
          </button>
          </div>
      </div>   
      <textarea
      onChange={handdleinput}
        className={` rounded-md flex flex-grow w-full h-full p-3 outline-none resize-none ${
          theme === "light" ? "text-black bg-white" : "text-white bg-black "
        }`}
        placeholder="Enter the Input before You run"
      ></textarea>
    </div>
  );
}

export default Input;
