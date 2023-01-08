// import React, { useState, useEffect } from 'react';

// export function WindowResize() {
//   const [dimensions, setDimensions] = useState({
//     height: window.innerHeight,
//     width: window.innerWidth
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth
//       });
//     };

//     console.log("re-render the component when the browser is resized")

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   });

//   return (
//     <>
//       <div>
//         Rendered at {dimensions.width} x {dimensions.height}
//       </div></>
//   )
// }