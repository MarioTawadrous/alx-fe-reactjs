import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        data-testid="add-todo-input"
      />
      <button type="submit" data-testid="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
