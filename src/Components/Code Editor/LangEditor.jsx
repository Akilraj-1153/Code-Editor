import React from "react";
import { files } from "../../Data/Data";
import { activeTheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { activeLanguage,codeToServer ,UITheme} from "../Atoms/Atoms";

import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function LangEditor() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);
  const [fileName, setFileName] = useState("script.js");
  const [code, setCode] = useState(files[fileName].value);
  const [currentTheme] = useRecoilState(activeTheme);
  const [servercode,setservercode]=useRecoilState(codeToServer)
  const [theme, setTheme] = useRecoilState(UITheme);

  console.log(servercode)

  const handleEditorChange = (value) => {
    setservercode(value);
  };

  return (
    <div className="flex gap-2 flex-col h-full font-mate ">
      <div className="h-[6vh] w-full  rounded-md flex items-center gap-2 ">
      <div  className={`h-[6vh] w-full  rounded-md flex items-center p-1 gap-2  ${
          theme === "light" ? "text-white bg-black" : "text-black bg-white "
        }`}>
          <div className="flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className=" p-2 rounded-md font-mate" >
          {currentLanguage}
          </button>
          </div>
      </div>  
      </div>

      <div className="h-[85vh] w-full rounded-md overflow-hidden ">
        <div className=" h-full w-full rounded-md">
          
        <AceEditor
          setOptions={{ useWorker: false }}
          mode="javascript"
          theme={currentTheme}
          onChange={handleEditorChange}
          name="UNIQUE_ID_OF_DIV"
          className="h-full w-full"
          style={{ height: "100%", width: "100%",fontFamily:"monospace" ,borderRadius:5  }}
          editorProps={{ $blockScrolling: true }}
          fontSize={15}
          value={servercode}
        />
        </div>
        
      </div>
    </div>
  );
}

export default LangEditor;
