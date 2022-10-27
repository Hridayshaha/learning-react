import { useState, useRef } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const queryRef = useRef();

  const filterItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase());
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return;

    setItems((prev) => {
      return [value, ...prev];
    });

    inputRef.current.value = "";
  };
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Searching Testing</h1>
      <hr style={{ marginBottom: "30px" }} />
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          ref={queryRef}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="new">New Items: </label>
            <input
              type="text"
              id="new"
              placeholder="New Items"
              ref={inputRef}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Items :</h2>
        {filterItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
