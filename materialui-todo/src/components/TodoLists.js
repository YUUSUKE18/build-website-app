import React from "react";
import Todo from "./Todo";

const TodoLists = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} />;
  });
  return <div className="todo-lists">{todos}</div>;
};

export default TodoLists;
