import { useState } from "react";

const todos = ["Make the bed", "Cook the coffee"];

function App() {
  const [value, setValue] = useState("12314");
  // const list = useState("");
  // const value = list[0]
  // const setValue = list[1]
  console.log(value);
  return (
    <div className="App">
      <h1>To do app</h1>
      <input
        value={value}
        onChange={function (event) {
          setValue(event.target.value);
          value = event.target.value;
        }}
      />
      {todos.map(function (Todo) {
        return <p key={Todo}>{Todo}</p>;
      })}
    </div>
  );
}

export default App;
// const v let [""]
