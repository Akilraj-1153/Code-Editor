import React, { useEffect, useState } from "react";
import { files } from "../../Data/Data";
import { activeTheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function Html_Css_Js() {
  const [fileName, setFileName] = useState("script.js");
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
      <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center gap-2">
        <div className="text-white flex justify-start items-center text-sm gap-3 bg-white w-fit p-1 rounded-md">
          <button
            disabled={fileName === "index.html"}
            onClick={() => handleFileChange("index.html")}
            className={`${
              fileName === "index.html"
                ? "text-white bg-black p-1 rounded-md"
                : "text-black"
            }`}
          >
            index.html
          </button>
          <button
            disabled={fileName === "style.css"}
            onClick={() => handleFileChange("style.css")}
            className={`${
              fileName === "style.css"
                ? "text-white bg-black p-1 rounded-md"
                : "text-black"
            }`}
          >
            style.css
          </button>
          <button
            disabled={fileName === "script.js"}
            onClick={() => handleFileChange("script.js")}
            className={`${
              fileName === "script.js"
                ? "text-white bg-black p-1 rounded-md"
                : "text-black"
            }`}
          >
            script.js
          </button>
        </div>
      </div>
      <div className="h-[86vh] w-full rounded-md overflow-hidden">
        <AceEditor
          mode="java"
          theme={currentTheme}
          onChange={handleEditorChange}
          name="UNIQUE_ID_OF_DIV"
          className="h-full w-full"
          style={{ height: "100%", width: "100%" }}
          editorProps={{ $blockScrolling: true }}
        />
        ,
      </div>
    </div>
  );
}

export default Html_Css_Js;
