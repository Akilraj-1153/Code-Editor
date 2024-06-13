import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CodeEditor from "./Components/Code Editor/CodeEditor";
import About from "./Components/About/About";
import { UITheme } from "./Components/Atoms/Atoms";
import { useRecoilState } from "recoil";

function App() {
  const [theme, setTheme] = useRecoilState(UITheme);

  return (
    <div className={`h-screen w-screen ${theme==='light'? "bg-white text-black":"text-white bg-black"} `}>
      <div className="h-[7vh] w-full sticky top-0 z-40">
        <NavBar />
      </div>
      <div className="h-[93vh] w-full  p-2 rounded-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="code_editor" element={<CodeEditor />} />
          <Route path="about/*" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
