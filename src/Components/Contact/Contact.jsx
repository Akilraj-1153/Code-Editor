import React from "react";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ContactPage from "./ContactPage";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full rounded-md flex justify-center">
      <div className=" h-full lg:w-[50%] rounded-md overflow-hidden flex flex-col gap-2 xs:w-[99%] md:w-[80%]">
        <div className="w-full h-[6vh] flex">
          <div className="h-full w-full rounded-md flex items-center gap-2 justify-between">
            <div className="font-mate h-full w-full text-white flex justify-around items-center text-sm gap-3 bg-black  rounded-md overflow-scroll">
              <div className="flex h-full gap-2 justify-around items-center w-full overflow-scroll">
                <button
                  className="h-full w-full text-white bg-black px-4 lg:px-10 md:px-7  py-1 rounded-md font-mateSc whitespace-nowrap text-xl"
                  onClick={() => navigate("aboutce")}
                >
                  Contact
                  
                </button>
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vh] bg-white overflow-scroll rounded-md">
          <ContactPage></ContactPage>
        </div>
      </div>
    </div>
  );
}

export default Contact;
