import React from 'react'
import { useRef } from 'react';
import { files } from '../../Data/Data';

function InOpDisplay() {
  const iframeRef = useRef(null);
  const handleCodeRun = () => {
    const iframe = iframeRef.current;
    const document = iframe.contentDocument;
    document.open();
    document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>${files["style.css"].value}</style>
      </head>
      <body>
        ${files["index.html"].value}
        <script>${files["script.js"].value}</script>
      </body>
      </html>
    `);
    document.close();
  };

  return (
    <>
    <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2">
        <button onClick={handleCodeRun}>Run</button>
    </div>
    <iframe
          ref={iframeRef}
          className='bg-white rounded-md'
          style={{ width: "100%", height: "86vh", border: "1px solid #ccc" }}
        ></iframe>

    </>
  )
}

export default InOpDisplay