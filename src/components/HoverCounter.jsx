const HoverCounter = ({ count, incrementCounter }) => {
  return <h1 onMouseOver={incrementCounter}>Hover {count} Times</h1>;
};
export default HoverCounter;
