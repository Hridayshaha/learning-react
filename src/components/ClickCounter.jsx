import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, incrementCounter }) => {
  return <button onClick={incrementCounter}>Click {count} Times</button>;
};
export default withCounter(ClickCounter);
