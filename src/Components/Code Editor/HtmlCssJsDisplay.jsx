import React, { useRef, useState, useEffect } from "react";
import { UITheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { files } from "../../Data/Data";
import { FaTerminal } from "react-icons/fa";

function HtmlCssJsDisplay() {
  const iframeRef = useRef(null);
  const [theme, setTheme] = useRecoilState(UITheme);

  const handleCodeRun = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>${files["style.css"].value}</style>
      </head>
      <body>
        ${files["index.html"].value}
        <script>${files["script.js"].value}</script>
      </body>
      </html>
    `);
    document.close();
  };

  return (
    <>
      <div
        className={`h-[6vh] w-full  rounded-md flex items-center p-1 gap-2 bg-black  ${
          theme === "light" ? "text-white bg-black" : "text-black bg-white "
        }`}
      >
        <div className=" flex justify-end items-center text-sm gap-3 bg-whit w-full rounded-md ">
          <button
            className=" p-2 rounded-md  flex justify-center items-center gap-1"
            onClick={handleCodeRun}
          >
            <h1>Run</h1>
            <FaTerminal />
          </button>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        className=" rounded-md"
        style={{ width: "100%", height: "86vh" }}
      ></iframe>
    </>
  );
}

export default HtmlCssJsDisplay;
