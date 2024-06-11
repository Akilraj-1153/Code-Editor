import React, { useState } from "react";
import { IoIosWarning } from "react-icons/io";

const AboutCE = () => {
    const [img1]=useState(require("../../Assets/Screenshots/ss1.png"))
  const techStack = [
    {
      category: "Frontend",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js"],
    },
    {
      category: "Backend",
      technologies: ["Node.js"],
    },
    {
      category: "Compiler Integration",
      technologies: ["Piston API"],
    },
    {
      category: "Database",
      technologies: [
        "Currently Not Using Database Because User Data And projects Are Not Saved",
      ],
      warning: true,
    },
    {
      category: "Version Control",
      technologies: ["Git"],
    },
  ];

  return (
    <div className="p-4 flex flex-col text-black ">
      <h1 className="text-2xl text-center font-bold mb-6 font-mateSc">
        A Simple Code Editor with Compiler for Multiple Languages
      </h1>
      <h1 className="text-2xl font-bold font-mate mb-2">About:</h1>
      <p className="text-lg text-center mb-4 font-mono">
        This project is a streamlined code editor that supports multiple programming languages through an integrated compiler. It leverages modern web technologies to provide an efficient and user-friendly experience for developers.
      </p>
      <hr className="h-1 bg-black border-none"></hr>
      <span className="py-2"></span>
      <h1 className="text-2xl font-bold font-mate mb-2">Tech Stack:</h1>

      {techStack.map((stack) => (
        <div key={stack.category} className="mb-4 ml-5">
          <h2 className="text-xl font-bold font-mate mb-2">{stack.category}:</h2>
          <div className="flex flex-wrap gap-2">
            {stack.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-black text-white px-4 py-2 rounded-md flex items-center font-mono"
              >
                {tech}
                {stack.warning && index === 0 && (
                  <IoIosWarning color="orange" size={24} className="ml-2" />
                )}
              </span>
            ))}
          </div>
        </div>
      ))}

        <hr className="h-1 bg-black border-none"></hr>
        <span className="py-2"></span>
      <div className="gap-2 flex flex-col">
      <h1 className="text-2xl font-bold font-mate mb-2">Guide For User:</h1>
      <h1>1).Select the Language</h1>
      <img src={img1}></img>
      <h1>2).Change the Theme (optional)</h1>
      <img src={img1}></img>

      <h1>3).Edit the code</h1>
      <img src={img1}></img>

      <h1>4).Run the code</h1>
      <img src={img1}></img>

      <h1>5).Output</h1>
      <img src={img1}></img>
      </div>

    </div>
  );
};

export default AboutCE;
