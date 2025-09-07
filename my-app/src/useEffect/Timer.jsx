// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // Start timer
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     // Cleanup: stop timer when component unmounts
//     return () => clearInterval(interval);
//   }, []); // run only once on mount

//   return (
//     <div>
//       <h2>Timer: {seconds} seconds</h2>
//     </div>
//   );
// }

// export default Timer;

import React , {useState,useEffect } from "react";

function Timer () {
   const [seconds,setSeconds] = useState(0);

   useEffect(()=> {
      const interval = setInterval(()=> {
        setSeconds((prev)=>prev +1)
      }, 1000);

      return () => clearInterval(interval)
   },[]);

   return (
    <>
    <h3> Timer: {seconds } seconds</h3>
    </>
   )
}

export default Timer;
