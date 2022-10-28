const ClickCounter = ({ count, incrementCounter }) => {
  return <button onClick={incrementCounter}>Click {count} Times</button>;
};
export default ClickCounter;
