import React from "react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faBed,
  faCode,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-2 justify-center ">
      <div className="flex justify-center items-center w-full h-fit xs:flex-col gap-2 ">
        <div className="flex ">
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">C</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">O</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">D</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">E</h1>
        <span className="p-3"></span>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">E</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">D</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">I</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">T</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">O</h1>
        <h1 className="xs:text-4xl lg:text-7xl text-white font-mateSc">R</h1>
        </div>
        
        <span className="px-2"></span>
        <div className="p-2">
          <button className="p-3 bg-white rounded-lg h-fit w-fit font-bold flex justify-center items-center gap-2 scale-75 hover:scale-100 transition-transform">
            Visit Code Editor <FaComputer size={30} />
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-white font-mate text-xl text-center p-5">
          A Simple Yet Efficient Online Code Editor With Support For Multiple
          Languages.
        </h1>
      </div>
      
      <div className="text-white gap-20  flex font-mono cursor-none mt-5 xs:grid xs:grid-cols-2 md:grid-cols-4">
        <div className="flex justify-center items-center flex-col hover:scale-150 transition-transform opacity-25 hover:opacity-100">
          <FontAwesomeIcon icon={faUtensils} color="white" size="2xl" />
          <h1>eat();</h1>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-150 transition-transform opacity-25 hover:opacity-100">
          <FontAwesomeIcon icon={faBed} color="white" size="2xl" />
          <h1>sleep();</h1>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-150 transition-transform opacity-25 hover:opacity-100">
          <FontAwesomeIcon icon={faCode} color="white" size="2xl" />
          <h1>code();</h1>
        </div>
        <div className="flex justify-center items-center flex-col hover:scale-150 transition-transform opacity-25 hover:opacity-100">
          <FontAwesomeIcon icon={faRepeat} color="white" size="2xl" />
          <h1>repeat();</h1>
        </div>
      </div>
      <div className="flex gap-20 p-4 mt-10">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <BsGithub size={30} />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaXTwitter size={30} />
        </a>
        <a
          href="https://instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
}

export default Home;
