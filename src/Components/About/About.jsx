import React from "react";
import AboutCE from "./AboutCE";
import { BsGithub } from "react-icons/bs";
import DeveloperGuide from "./DeveloperGuide";
import AboutMe from "./AboutMe";
import { Route, Routes, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full rounded-md flex justify-center">
      <div className="bg-black h-full lg:w-[50%] p-2 rounded-md overflow-hidden flex flex-col gap-2 xs:w-[99%] md:w-[80%]">
        <div className="w-full h-[7vh] flex">
          <div className="h-full w-full rounded-md flex items-center gap-2 justify-between">
            <div className="font-mate h-full w-full text-white flex justify-around items-center text-sm gap-3 bg-white p-1 rounded-md overflow-scroll">
              <div className="flex h-full gap-2 justify-around items-center w-full overflow-scroll">
                <button
                  className="h-full text-white bg-black px-4 lg:px-10 md:px-7  py-1 rounded-md font-mate whitespace-nowrap"
                  onClick={() => navigate("aboutce")}
                >
                  Code Editor
                </button>
                <button
                  className="h-full text-white bg-black px-4 lg:px-10 md:px-7 py-1 rounded-md font-mate whitespace-nowrap"
                  onClick={() => navigate("developerguide")}
                >
                  Guide For Developer
                </button>
                {/* <button
                  className="h-full text-white bg-black px-4 lg:px-10 md:px-7 py-1 rounded-md font-mate whitespace-nowrap"
                  onClick={() => navigate("aboutdeveloper")}
                >
                  About Developer
                </button> */}
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 py-1 flex h-full w-fit justify-center items-center"
                >
                  <BsGithub size={30} color="black" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vh] bg-white overflow-scroll rounded-md">
          <Routes>
            <Route path="aboutce" element={<AboutCE />} />
            <Route path="developerguide" element={<DeveloperGuide />} />
            {/* <Route path="aboutdeveloper" element={<AboutMe />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default About;
