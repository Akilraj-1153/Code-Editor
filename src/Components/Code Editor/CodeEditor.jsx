import React from "react";
import MyEditor from "./MyEditor";
import LangThemeSelector from "./LangThemeSelector";
import InOpDisplay from "./InOpDisplay";
import { useRecoilState } from "recoil";
import { activeLanguage,UITheme } from "../Atoms/Atoms";
import HtmlCssJsDisplay from "./HtmlCssJsDisplay";

function CodeEditor() {
  const [currentLanguage] = useRecoilState(activeLanguage);
  const [theme, setTheme] = useRecoilState(UITheme);


  return (
    <div className={`h-full w-full rounded-lg flex gap-2 xs:flex-col lg:flex-row  ${theme==='light'? "bg-white text-black":"text-white bg-black"}`}>
     
      <div className={`xs:h-[15vh] w-full lg:w-1/6 lg:h-full  rounded-md `}>
        <LangThemeSelector></LangThemeSelector>
      </div>

      <div className={`lg:h-full lg:w-3/6 flex gap-2 flex-col xs:w-full xs:h-[50vh] rounded-md `}>
        <MyEditor></MyEditor>
      </div>
      <div className="lg:h-full lg:w-2/6 bg-blak flex gap-2 flex-col  rounded-md xs:w-full xs:h-[45vh] xs:pb-1 lg:pb-0 ">
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
