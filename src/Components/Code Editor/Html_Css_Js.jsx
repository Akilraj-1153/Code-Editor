import React, { useEffect, useState } from "react";
import { activeTheme,UITheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { files } from "../../Data/Data";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function Html_Css_Js() {
  const [fileName, setFileName] = useState("index.html");
  const [code, setCode] = useState(files[fileName].value);
  const [currentTheme] = useRecoilState(activeTheme);
  const [theme, setTheme] = useRecoilState(UITheme);


  

  useEffect(() => {
    setCode(files[fileName].value);
  }, [fileName]);

  const handleEditorChange = (value) => {
    setCode(value);
    files[fileName].value = value;
  };

  const handleFileChange = (newFileName) => {
    setFileName(newFileName);
  };

  return (
    <div className="flex gap-2 flex-col h-full">
      <div className="h-[6vh] w-full  rounded-md flex items-center gap-2">
        <div className={`h-full  flex justify-start items-center text-sm gap-3 bg-whit w-full p-1 rounded-md font-mate ${theme==='light'? "bg-black text-black":"text-white bg-white"}`}>
          <button
            disabled={fileName === "index.html"}
            onClick={() => handleFileChange("index.html")}
            className={`h-full  px-2 rounded-md ${
              fileName === "index.html" && theme === "light"
                ? "text-black bg-white"
                : ""
            }
            ${
              fileName !== "index.html" && theme === "light"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName === "index.html" && theme === "dark"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName !== "index.html" && theme === "dark"
                ? "text-black bg-white"
                : ""
            }`}
          >
            index.html
          </button>
          <hr className={`border-r-2 ${theme === "light" ? "border-black":"border-white"} h-[4vh]`}></hr>
          <button
            disabled={fileName === "style.css"}
            onClick={() => handleFileChange("style.css")}
            className={`h-full px-2  rounded-md ${
              fileName === "style.css" && theme === "light"
                ? "text-black bg-white"
                : ""
            }
            ${
              fileName !== "style.css" && theme === "light"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName === "style.css" && theme === "dark"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName !== "style.css" && theme === "dark"
                ? "text-black bg-white"
                : ""
            }`}
          >
            style.css
          </button>
          <hr className={`border-r-2 ${theme === "light" ? "border-black":"border-white"} h-[4vh]`}></hr>



          <button
            disabled={fileName === "script.js"}
            onClick={() => handleFileChange("script.js")}
            className={`h-full px-2  rounded-md ${
              fileName === "script.js" && theme === "light"
                ? "text-black bg-white"
                : ""
            }
            ${
              fileName !== "script.js" && theme === "light"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName === "script.js" && theme === "dark"
                ? "text-white bg-black"
                : ""
            }
            ${
              fileName !== "script.js" && theme === "dark"
                ? "text-black bg-white"
                : ""
            }`}
          >
            script.js
          </button>
        </div>
      </div>
      <div className="h-[86vh] w-full rounded-md overflow-hidden ">
        <div className=" h-full w-full rounded-md">
        <AceEditor
        setOptions={{ useWorker: false }}
          mode={files[fileName].language}
          theme={currentTheme}
          onChange={handleEditorChange}
          name="UNIQUE_ID_OF_DIV"
          className="h-full w-full"
          style={{ height: "100%", width: "100%",borderRadius:5 ,fontFamily:"monospace" }}
          editorProps={{ $blockScrolling: true ,useWrapMode: true}}
          value={code}
          fontSize={15}
        />
        </div>
       
      </div>
    </div>
  );
}

export default Html_Css_Js;
