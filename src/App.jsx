import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
const App = () => {
  return (
    <div className="container">
      <h1>Render Props</h1>

      <Counter>
        {(count, incrementCounter) => (
          <ClickCounter count={count} incrementCounter={incrementCounter} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )}
      </Counter>
    </div>
  );
};

export default App;
