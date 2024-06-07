import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CodeEditor from "./Components/Code Editor/CodeEditor";
import About from "./Components/About/About";

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-[7vh] w-full ">
        <NavBar></NavBar>
      </div>
      <div className="h-[93vh] w-full bg-black p-2 rounded-lg">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="code_editor" element={<CodeEditor></CodeEditor>}></Route>
          <Route path="about" element={<About></About>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
