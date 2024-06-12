import React, { useRef, useState, useEffect } from "react";

import { files } from "../../Data/Data";


function HtmlCssJsDisplay() {
  
  const iframeRef = useRef(null);

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
      <div className="h-[6vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2">
      <div className="text-white flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className="text-white bg-black p-2 rounded-md" onClick={handleCodeRun}>
          Run
          </button>
          </div>
      </div>
      <iframe
        ref={iframeRef}
        className="bg-white rounded-md"
        style={{ width: "100%", height: "86vh", border: "1px solid #ccc" }}
      ></iframe>
    </>
  );
}

export default HtmlCssJsDisplay;
