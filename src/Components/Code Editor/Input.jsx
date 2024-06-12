import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    InputToServer,
} from "../Atoms/Atoms";


function Input() {
    const [serverInput,setserverInput]=useRecoilState(InputToServer)

console.log(Input)

function handdleinput(event){
    setserverInput(event.target.value)
}


  return (
    <div className="flex flex-col gap-2 h-full overflow-scroll">
      <div className="h-[6vh] w-full bg-white/30 rounded-md flex items-center p-1 gap-2">
          <div className="text-white flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className="text-white bg-black p-2 rounded-md" >
          Input
          </button>
          </div>
      </div>   
      <textarea
      onChange={handdleinput}
        className="bg-white rounded-md flex flex-grow w-full h-full p-3 outline-none resize-none"
      ></textarea>
    </div>
  );
}

export default Input;
