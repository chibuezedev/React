import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return time.toLocaleTimeString(undefined, options);
  };

  return (

  <>
    <div>{formatTime(currentTime)}</div>

    <input />
  </>
  )
};

export default Timer;



// export default function Image() {
//     return (
//       <img
//         src="https://shorturl.at/aevVX"
//         alt="Brendan Eich an American computer programmer and technology executive"
//       />
//     );
//   }


// export default function Gallery() {
//     return (
//       <section>
//         <h1>Creator of JavaScript</h1>
//         <Image />
//         <Image />
//         <Image />
//       </section>
//     );
//   }
  
//   function Image() {
//     return (
//       <img
//         src="https://shorturl.at/aevVX"
//         alt="'Brendan Eich an American computer programmer and technology executive"
//       />
//     );
//   }
  

// import Gallery from './Image.js';
// import { createRoot } from 'react-dom';

// const root = createRoot(document.getElementById('root'))
// root.render(<Gallery />);


