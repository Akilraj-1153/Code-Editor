import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { files } from "../../Data/Data";

function MyEditor() {
  const [fileName, setFileName] = useState("script.js");
  const [code, setCode] = useState(files[fileName].value);

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
    <>
      <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center gap-2">
        <div className="text-white flex justify-start items-center text-sm gap-3 bg-white w-fit p-1 rounded-md">
          <button
            disabled={fileName === "index.html"}
            onClick={() => handleFileChange("index.html")}
            className={`${
              fileName === "index.html"
                ? "text-text-white bg-black p-1 rounded-md"
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
                ? "text-text-white bg-black p-1 rounded-md"
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
                ? "text-text-white bg-black p-1 rounded-md"
                : "text-black"
            }`}
          >
            script.js
          </button>
        </div>
      </div>
      <div className="h-[86vh] w-full rounded-md overflow-hidden">
        <Editor
          height="calc(100%)"
          width="100%"
          theme="vs-dark"
          path={fileName}
          defaultLanguage={files[fileName].language}
          value={code}
          onChange={handleEditorChange}
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
          }}
          className="rounded"
        />
      </div>
    </>
  );
}

export default MyEditor;
