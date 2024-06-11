import React, { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { ExternalLink } from "react-external-link";

function AboutMe() {
  const [myimage] = useState(require("../../Assets/HomeImage.jpg"));

  return (
    <div className="h-full w-full flex justify-start items-center flex-col py-2">
      <div className="h-[35vh] w-[35vh] rounded-full flex justify-center items-center overflow-hidden">
        <img
          className="homeimg h-full w-full object-cover object-center"
          src={myimage}
          alt="Profile"
        />
      </div>
      <div>
        <h1 className="py-5 text-4xl font-mateSc text-center font-bold">
          AKILRAJ N
        </h1>
        <h1 className="py-1 text-2xl font-mateSc text-center">Web Developer</h1>
      </div>
      <div>
        <div>
          <div className="cursor-pointer iconset1 z-40 h-[7vh]  gap-5    rounded-xl flex justify-center items-center ">
            <div className=" z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
              <ImMail size={35} color="black"></ImMail>
            </div>
            <h1 className="icontext">akilrajn1153@gmail.com</h1>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-10 ">
        <SocialIcon
          url="https://www.linkedin.com/in/akilrajn1153"
          icon={<ImLinkedin size={35} />}
        />
        <SocialIcon
          url="https://github.com/Akilraj-1153"
          icon={<FaSquareGithub size={40} />}
        />
      </div>
    </div>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <ExternalLink href={url}>
      <div className="iconcontent z-40 h-[7vh] w-[7vh]  rounded-xl flex justify-center items-center">
        {icon}
      </div>
    </ExternalLink>
  );
}

export default AboutMe;
