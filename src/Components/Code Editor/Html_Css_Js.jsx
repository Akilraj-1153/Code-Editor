import React, { useEffect, useState } from "react";
import { activeTheme} from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { files } from "../../Data/Data";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function Html_Css_Js() {
  const [fileName, setFileName] = useState("index.html");
  const [code, setCode] = useState(files[fileName].value);
  const [currentTheme] = useRecoilState(activeTheme);
  const [htmlimg,setHtmlimg]=useState(require('../../Assets/LOGO/html.png'))
  const [cssimg,setCssimg]=useState(require('../../Assets/LOGO/css.png'))
  const [jsimg,setjsimg]=useState(require('../../Assets/LOGO/js.png'))


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
        <div
          className="h-[6vh]  flex justify-start items-center text-sm gap-3 bg-whit w-full p-1 rounded-md font-mate bg-black text-white"
        >
          <button
            disabled={fileName === "index.html"}
            onClick={() => handleFileChange("index.html")}
            className={`h-full  px-2 rounded-md flex justify-center items-center ${
              fileName === "index.html" 
                ? "text-black bg-white"
                : ""
            }
            `}
          >
            <img className="h-full w-fit" src={htmlimg}></img>
            index.html
          </button>
          <hr
            className="border-r-2 border-white h-[4vh]"
          ></hr>
          <button
            disabled={fileName === "style.css"}
            onClick={() => handleFileChange("style.css")}
            className={`h-full px-2  rounded-md flex justify-center items-center  ${
              fileName === "style.css" 
                ? "text-black bg-white"
                : ""
            }
            `}
          >
            <img className="h-full w-fit" src={cssimg}></img>

            style.css
          </button>
          <hr
             className="border-r-2 border-white h-[4vh]"
          ></hr>

          <button
            disabled={fileName === "script.js"}
            onClick={() => handleFileChange("script.js")}
            className={`h-full px-2  rounded-md flex justify-center items-center  ${
              fileName === "script.js"
                ? "text-black bg-white"
                : ""
            }
            `}
          >
            <img className="h-full w-fit" src={jsimg}></img>
            script.js
          </button>
        </div>
      </div>
      <div className="h-[86vh] w-full rounded-md overflow-hidden  ">
        <div className=" h-full w-full rounded-md">
          <AceEditor
            setOptions={{ useWorker: false }}
            mode={files[fileName].language}
            theme={currentTheme}
            onChange={handleEditorChange}
            name="UNIQUE_ID_OF_DIV"
            className="h-full w-full"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 5,
              fontFamily: "monospace",
            }}
            editorProps={{ $blockScrolling: true, useWrapMode: true }}
            value={code}
            fontSize={15}
          />
        </div>
      </div>
    </div>
  );
}

export default Html_Css_Js;
