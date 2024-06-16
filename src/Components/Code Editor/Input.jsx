import React from "react";
import { useRecoilState } from "recoil";
import { InputToServer } from "../Atoms/Atoms";

function Input() {
  const [serverInput, setserverInput] = useRecoilState(InputToServer);

  console.log(Input);

  function handdleinput(event) {
    setserverInput(event.target.value);
  }

  return (
    <div className={`flex flex-col gap-2 h-full overflow-scroll rounded-md `}>
      <div
        className={`h-[6vh] w-full  rounded-md flex items-center p-1 gap-2 bg-black text-white`}
      >
        <div className="flex justify-between items-center text-sm gap-3 bg-whit w-full  rounded-md">
          <button className=" p-2 rounded-md font-mate">Input</button>
        </div>
      </div>
      <textarea
        onChange={handdleinput}
        className="rounded-md flex flex-grow w-full h-full p-3 outline-none resize-none text-black "
        placeholder="Enter the Input before You run"
      ></textarea>
    </div>
  );
}

export default Input;
