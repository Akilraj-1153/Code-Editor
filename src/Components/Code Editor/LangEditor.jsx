import React from "react";
import { files } from "../../Data/Data";
import { activeTheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { activeLanguage,codeToServer } from "../Atoms/Atoms";

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
  console.log(servercode)

  const handleEditorChange = (value) => {
    setservercode(value);
  };

  return (
    <div className="flex gap-2 flex-col h-full font-mate">
      <div className="h-[6vh] w-full bg-white rounded-md flex items-center gap-2 p-1">
        <div className="text-white flex justify-start items-center text-sm gap-3 bg-whit w-fit  rounded-md">
          <button className="text-white bg-black p-2 rounded-md">
            {currentLanguage}
          </button>
        </div>
      </div>
      <div className="h-[85vh] w-full rounded-md overflow-hidden">
        <AceEditor
        setOptions={{ useWorker: false }}
          mode="javascript"
          theme={currentTheme}
          onChange={handleEditorChange}
          name="UNIQUE_ID_OF_DIV"
          className="h-full w-full"
          style={{ height: "100%", width: "100%",fontFamily:"monospace" }}
          editorProps={{ $blockScrolling: true }}
          fontSize={15}
        />
        ,
      </div>
    </div>
  );
}

export default LangEditor;
