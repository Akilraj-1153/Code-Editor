import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { files } from "../../Data/Data";
import {
  activeLanguage,
  codeToServer,
  languageToServer,
  versionToServer,
} from "../Atoms/Atoms";
import { executeCode } from "../API/api";

function InOpDisplay() {
  const [currentLanguage] = useRecoilState(activeLanguage);
  const [servercode] = useRecoilState(codeToServer);
  const [serverlang] = useRecoilState(languageToServer);
  const [serverversion] = useRecoilState(versionToServer);
  const [output, setOutput] = useState(null);

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

  const handleServerCodeRun = async () => {
    try {
      const result = await executeCode(servercode, serverlang, serverversion);
      setOutput(result.run.output);
      console.log(result);
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  useEffect(() => {
    if (output !== null) {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;
      document.open();
      document.write(`<pre>${output}</pre>`);
      document.close();
    }
  }, [output]);

  return (
    <>
      <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2">
        {currentLanguage === "HTML  CSS  JS" ? (
          <button onClick={handleCodeRun}>Run</button>
        ) : (
          <button onClick={handleServerCodeRun}>Run</button>
        )}
      </div>
      <iframe
        ref={iframeRef}
        className="bg-white rounded-md"
        style={{ width: "100%", height: "86vh", border: "1px solid #ccc" }}
      ></iframe>
    </>
  );
}

export default InOpDisplay;
