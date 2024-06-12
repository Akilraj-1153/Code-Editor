import React, { useRef, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  InputToServer,
  codeToServer,
  languageToServer,
  versionToServer,
} from "../Atoms/Atoms";
import { executeCode } from "../API/api";

function Output() {
  const [servercode] = useRecoilState(codeToServer);
  const [serverlang] = useRecoilState(languageToServer);
  const [serverversion] = useRecoilState(versionToServer);
  const [output, setOutput] = useState(null);
  const [serverInput,setserverInput]=useRecoilState(InputToServer)


  const iframeRef = useRef(null);

 
  const handleServerCodeRun = async () => {
    try {
      const result = await executeCode(servercode, serverlang, serverversion,serverInput);
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
    <div className="flex flex-col gap-2 h-full overflow-scroll">
      <div className="h-[6vh] w-full bg-white/30 rounded-md flex items-center p-1 gap-2">
          <div className="text-white flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className="text-black bg-white p-2 rounded-md">
          Output
          </button>
          <button className="text-white bg-black p-2 rounded-md" onClick={handleServerCodeRun}>
          Run
          </button>
          </div>
      </div>   
      <iframe
        ref={iframeRef}
        className="bg-white rounded-md flex flex-grow w-full h-full text-wrap"
      ></iframe>
    </div>
  );
}

export default Output;
