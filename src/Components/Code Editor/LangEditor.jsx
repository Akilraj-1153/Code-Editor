import React from 'react'
import Editor from "@monaco-editor/react";
import { files } from "../../Data/Data";
import { activeTheme } from "../Atoms/Atoms";
import { useRecoilState } from "recoil";
import { useState,useEffect } from 'react';
import { activeLanguage } from '../Atoms/Atoms';


function LangEditor() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);

   
    return (
      <div className='flex gap-2 flex-col h-full'>
        <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center gap-2">
          <div className="text-white flex justify-start items-center text-sm gap-3 bg-white w-fit p-1 rounded-md">
            <button
             
              className='text-white bg-black p-1 rounded-md'
            >
              {currentLanguage}
            </button>
            
          </div>
        </div>
        <div className="h-[86vh] w-full rounded-md overflow-hidden">
          <Editor
            height="calc(100%)"
            width="100%"
            // theme={currentTheme}
            // path={fileName}
            // defaultLanguage={files[fileName].language}
            // value={code}
            // onChange={handleEditorChange}
            options={{
              wordWrap: "on",
              minimap: { enabled: false },
            }}
            className="rounded"
          />
        </div>
      </div>
    );
  }

export default LangEditor