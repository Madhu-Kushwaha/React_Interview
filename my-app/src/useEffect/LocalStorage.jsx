import React, { useState, useEffect } from "react";

function LocalStorageInput() {
  const [text, setText] = useState("");

  // Load value from localStorage when component mounts
//   useEffect(() => {
//     const savedValue = localStorage.getItem("myInput");
//     if (savedValue) {
//       setText(savedValue);
//     }
//   }, []);

useEffect(()=> {
    const saveData = localStorage.getItem("myInput")
    if(saveData){
        setText(saveData)
    }
},[])

useEffect (()=> {
    localStorage.setItem("myInput",text);
},[text])

  // Save value to localStorage whenever "text" changes
//   useEffect(() => {
//     localStorage.setItem("myInput", text);
//   }, [text]);

  return (
    <div>
      {/* <h2>Persistent Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      /> */}

      <h1>Hello value</h1>
      <input
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Type value"
      />
    </div>
  );
}

export default LocalStorageInput;
