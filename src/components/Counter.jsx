import { useState } from "react";

const Counter = ({ children }) => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return children(count, incrementCounter);
};

export default Counter;
