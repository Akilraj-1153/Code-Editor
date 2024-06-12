import React from "react";
import MyEditor from "./MyEditor";
import LangThemeSelector from "./LangThemeSelector";
import InOpDisplay from "./InOpDisplay";
import { useRecoilState } from "recoil";
import { activeLanguage } from "../Atoms/Atoms";
import HtmlCssJsDisplay from "./HtmlCssJsDisplay";

function CodeEditor() {
  const [currentLanguage] = useRecoilState(activeLanguage);

  return (
    <div className=" h-full w-full rounded-lg flex gap-2 xs:flex-col lg:flex-row bg-gray-900">
      <div className="lg:h-full lg:w-1/6 flex-col flex rounded-md bg-white xs:h-[15vh] xs:w-full ">
        <LangThemeSelector></LangThemeSelector>
      </div>
      <div className="lg:h-full lg:w-3/6 flex gap-2 flex-col xs:w-full xs:h-[50vh]">
        <MyEditor></MyEditor>
      </div>
      <div className="lg:h-full lg:w-2/6 bg-blak flex gap-2 flex-col xs:w-full xs:h-[45vh] xs:pb-1 lg:pb-0">
      {currentLanguage ==='HTML CSS JS' &&
       <HtmlCssJsDisplay></HtmlCssJsDisplay>
      }
      {currentLanguage !=='HTML CSS JS' &&
        <InOpDisplay></InOpDisplay>
      
      }
      </div>
    </div>
  );
}

export default CodeEditor;
