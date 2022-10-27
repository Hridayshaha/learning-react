import withCounter from "./HOC/withCounter";
const HoverCounter = ({ count, incrementCounter }) => {
  return <h1 onMouseOver={incrementCounter}>Click {count} Times</h1>;
};
export default withCounter(HoverCounter);
