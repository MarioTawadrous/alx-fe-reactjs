import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  const mockInitialTodos = [
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Learn React Testing", completed: true },
  ];

  beforeEach(() => {
    render(<TodoList />);
  });

  test("renders initial todos correctly", () => {
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds new todo item when form is submitted", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "New Test Todo" } });
    fireEvent.submit(form);

    expect(screen.getByText("New Test Todo")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("toggles todo completion status when clicked", () => {
    const todoItem = screen.getByText("Learn React");
    const initialStyle = window.getComputedStyle(todoItem);

    // First click to toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Second click to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle(initialStyle.textDecoration);
  });

  test("deletes todo when delete button is clicked", () => {
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    const initialTodoCount = deleteButtons.length;
    const firstTodoText = screen.getByText("Learn React");

    fireEvent.click(deleteButtons[0]);

    expect(firstTodoText).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /delete/i })).toHaveLength(
      initialTodoCount - 1
    );
  });

  test("does not add empty todo", () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.submit(form);

    expect(screen.queryByText("")).not.toBeInTheDocument();
  });
});
