import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  const initialTodos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ];

  test("renders initial todos", () => {
    render(<TodoList />);
    initialTodos.forEach((todo) => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("toggles todo completion status", () => {
    render(<TodoList />);
    const todoText = initialTodos[0].text;
    const todoElement = screen.getByText(todoText);

    fireEvent.click(todoElement);
    expect(todoElement).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoElement);
    expect(todoElement).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoToDelete = initialTodos[0].text;
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    const initialCount = deleteButtons.length;

    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText(todoToDelete)).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /delete/i })).toHaveLength(
      initialCount - 1
    );
  });
});
