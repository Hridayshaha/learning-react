import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
const App = () => {
  return (
    <div className="container">
      <h1>HOC - Higher Order Functions</h1>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
};

export default App;
