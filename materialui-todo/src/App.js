import React from "react";
import Header from "./components/Header";
import TodoLists from "./components/TodoLists";

function App() {
  const state = {
    tasks: ["A", "B", "C"],
  };
  return (
    <div className="App container">
      <Header TodoItems={state.tasks.length} />
      <TodoLists tasks={state.tasks} />
    </div>
  );
}

export default App;
