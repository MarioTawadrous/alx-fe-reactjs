/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const todoList = screen.getByTestId("todo-list");
    // There should be 3 initial todos
    expect(todoList.children.length).toBe(3);
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("add-todo-input");
    const addButton = screen.getByTestId("add-todo-button");

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    // Grab a known todo (from the initial state with id 1)
    const todoItem = screen.getByTestId("todo-1");
    // Verify default style (not completed)
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Simulate toggle action
    fireEvent.click(todoItem);
    // Check if text is now struck through
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    // Grab the delete button for the todo with id 1
    const deleteButton = screen.getByTestId("delete-1");
    fireEvent.click(deleteButton);

    // The todo should no longer be in the document
    expect(screen.queryByTestId("todo-1")).toBeNull();
  });
});
