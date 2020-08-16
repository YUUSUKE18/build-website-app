import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = (props) => {
  return (
    <div className="item">
      {props.content}
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Todo;
