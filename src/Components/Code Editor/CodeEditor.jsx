import React from "react";
import { languages } from "../../Data/Data";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor() {
  return (
    <div className=" h-full w-full rounded-lg flex gap-2">
      <div className="h-full w-1/6 ">
        <div className="h-[5vh] w-full bg-white rounded-t-lg">
          <div className="bg-white p-2 rounded-t-lg font-bold">
            Languages :-
          </div>
        </div>
        <div className="h-[86vh] w-full bg-white rounded-b-lg overflow-scroll p-2 flex flex-col gap-1">
          {languages.map((lang, index) => (
            <div className=" p-3 bg-white rounded-md h-fit w-full cursor-pointer hover:bg-black transition-transform hover:text-white">
              {lang}
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-3/6 flex gap-2 flex-col">
        <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2"></div>
        <div className=" h-[86vh] w-full rounded-lg overflow-hidden">
          <AceEditor
            placeholder="Placeholder Text"
            mode="java"
            theme="monokai"
            name="blah2"
            style={{height:'100%', width:'100%' }}
            // onLoad={this.onLoad}
            // onChange={this.onChange}
            fontSize={16}
            lineHeight={22}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              
            }}
          />
        </div>
      </div>
      <div className="h-full w-2/6 bg-red-700"></div>
    </div>
  );
}

export default CodeEditor;
