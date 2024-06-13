import React, { useEffect, useState } from "react";
import { activeTheme } from "../Atoms/Atoms";
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
      <div className="h-[6vh] w-full bg-white/30 rounded-md flex items-center gap-2">
        <div className="h-full text-white flex justify-start items-center text-sm gap-3 bg-whit w-fit p-1 rounded-md font-mate">
          <button
            disabled={fileName === "index.html"}
            onClick={() => handleFileChange("index.html")}
            className={`h-full  px-2 ${
              fileName === "index.html"
                ? "text-white bg-black p-1 rounded-md font-bold"
                : "text-black"
            }`}
          >
            index.html
          </button>
          <hr className="border-r-2 border-black h-[4vh]"></hr>
          <button
            disabled={fileName === "style.css"}
            onClick={() => handleFileChange("style.css")}
            className={`h-full px-2 ${
              fileName === "style.css"
                ? "text-white bg-black p-1 rounded-md font-bold"
                : "text-black"
            }`}
          >
            style.css
          </button>
          <hr className="border-r-2 border-black h-[4vh]"></hr>


          <button
            disabled={fileName === "script.js"}
            onClick={() => handleFileChange("script.js")}
            className={`h-full px-2 ${
              fileName === "script.js"
                ? "text-white bg-black p-1 rounded-md font-bold"
                : "text-black"
            }`}
          >
            script.js
          </button>
        </div>
      </div>
      <div className="h-[86vh] w-full rounded-md overflow-hidden">
        <AceEditor
        setOptions={{ useWorker: false }}
          mode={files[fileName].language}
          theme={currentTheme}
          onChange={handleEditorChange}
          name="UNIQUE_ID_OF_DIV"
          className="h-full w-full"
          style={{ height: "100%", width: "100%" }}
          editorProps={{ $blockScrolling: true }}
          value={code}
          fontSize={15}
        />
      </div>
    </div>
  );
}

export default Html_Css_Js;
