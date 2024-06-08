import React from "react";
import MyEditor from "./MyEditor";
import LangThemeSelector from "./LangThemeSelector";
import InOpDisplay from "./InOpDisplay";

function CodeEditor() {
  return (
    <div className=" h-full w-full rounded-lg flex gap-2">
      <div className="h-full w-1/6 flex-col flex  rounded-md bg-white ">
        <LangThemeSelector></LangThemeSelector>
      </div>
      <div className="h-full w-3/6 flex gap-2 flex-col">
        <MyEditor></MyEditor>
      </div>
      <div className="h-full w-2/6 bg-black flex gap-2 flex-col">
        <InOpDisplay></InOpDisplay>
      </div>
    </div>
  );
}

export default CodeEditor;
