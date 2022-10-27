import { useState } from "react";
const withCounter = (OrginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
      setCount((prev) => {
        return prev + 1;
      });
    };

    return (
      <OrginalComponent count={count} incrementCounter={incrementCounter} />
    );
  };

  return NewComponent;
};

export default withCounter;
