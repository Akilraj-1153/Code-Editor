import React from 'react'
import { useState } from 'react'
import { IoIosWarning } from "react-icons/io";


function Guide() {
    const [img1]=useState(require("../../Assets/Screenshots/img1.png"))
    const [img2]=useState(require("../../Assets/Screenshots/img2.png"))
    const [img3]=useState(require("../../Assets/Screenshots/img3.png"))
    const [img4]=useState(require("../../Assets/Screenshots/img4.png"))
    const [img5]=useState(require("../../Assets/Screenshots/img5.png"))


  return (
    <div className="p-10 font-mono">
    <div className="gap-2 flex flex-col">
      <h1 className="text-2xl font-bold font-mate mb-2 text-center">Guide For User</h1>
      
      <h1>1). Select the Language</h1>
      <p>Choose the programming language you want to code in.</p>
      <img src={img1} alt="Select the Language" />
      
      <h1>2). Change the Theme (optional)</h1>
      <p>Customize the editor's appearance by selecting a different theme.</p>
      <img src={img2} alt="Change the Theme" />
      
      <h1>3). Edit the code</h1>
      <p>Write and modify your code in the editor.</p>
      <img src={img3} alt="Edit the Code" />
      <img src={img4} alt="Edit the Code" />
      
      <h1>4). Run the code</h1>
      <p>Execute your code to see the output.</p>
      <p className='text-red-900 flex justify-start items-center'>
      <IoIosWarning color="orange" size={24} className="" />
      Note:Enter the Input before you run the programm</p>
      <img src={img5} alt="Run the Code" />
      <img src={img4} alt="Run the Code" />
    </div>
  </div>
  
  )
}

export default Guide