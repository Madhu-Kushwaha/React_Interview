//useEffect Basic Example
import React, { useState, useEffect } from "react";

function Window() {
  const [width, setWidth] = useState(window.innerWidth);
  const[height,setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <>
  <h2>Window width: {width}px</h2>
  <h2>Window height: {height}px</h2>
  </>
  );
}

export default Window;