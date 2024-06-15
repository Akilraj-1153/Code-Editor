import React, { useState } from "react";
import { FaComputer } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faUtensils, faBed, faCode, faRepeat } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();
  const [Logo] = useState(require("../../Assets/CTlogoW.png"));

  return (
    <div className="h-full w-full flex flex-col justify-center gap-2 text-white">
      <div className="h-1/2 w-full flex flex-col justify-center items-center gap-1">
        <div className="h-1/3 w-full flex justify-center items-center">
          <img
            src={Logo}
            className="h-full w-auto scale-150 select-none"
            alt="Logo"
          />
        </div>
        <div className="flex select-none">
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            C
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            O
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            D
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            E
          </h1>
          <span className="px-2"></span>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            T
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            U
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            R
          </h1>
          <h1 className="text-center xs:text-5xl lg:text-7xl font-mateSc">
            F
          </h1>
        </div>
        <div className="h-1/2 w-full flex flex-col items-center justify-center">
          <div className="flex">
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              C
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              o
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              d
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              e
            </h1>
            <span className="px-1"></span>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              E
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              d
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              i
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              t
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              o
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              r
            </h1>
            <span className="px-1"></span>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              W
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              i
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              t
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              h
            </h1>
            <span className="px-1"></span>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              C
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              o
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              m
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              p
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              i
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              l
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              e
            </h1>
            <h1 className="text-center xs:text-2xl lg:text-3xl font-mate">
              r
            </h1>
          </div>
        </div>
        <div>
          <h1 className="font-mate text-xl text-center p-5">
            A Simple Yet Efficient Online Code Editor With Support For Multiple
            Languages.
          </h1>
        </div>
        <div className="p-2">
          <button
            onClick={() => navigate("code_editor")}
            className="p-3 font-mate text-xl rounded-lg h-fit w-fit font-bold flex justify-center items-center gap-2 scale-75 hover:scale-100 transition-transform text-black bg-white"
          >
            Visit Code Editor <FaComputer size={30} />
          </button>
        </div>
      </div>
      <div className="xs:h-[30vh] lg:h-[20vh] w-full flex flex-col items-center justify-center">
        <div className="gap-10 font-mono cursor-none mt-5 xs:grid xs:grid-cols-2 md:grid-cols-4 w-1/2">
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
      </div>
    </div>
  );
}

export default Home;
