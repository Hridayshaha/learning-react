import { useState, useEffect } from "react";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      console.log(window.innerWidth);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="container">
      <h1>{width}</h1>
    </div>
  );
};

export default App;
