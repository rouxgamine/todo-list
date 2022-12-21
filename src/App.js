import React, { useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import CompletedList from "./components/CompletedList/CompletedList";
import Form from "./components/Form/Form";
import "./styles.css";
import toDoListData from "./data";

export default function App() {
  const [todoItems, updateTodoItems] = useState(toDoListData);
  const [completedItems, updateCompleted] = useState([]);
  const addToCompleted = (item) => {
    item.completed = true;
    const newArray = [item, ...completedItems];
    updateCompleted(newArray);
    const newTodos = [...todoItems];
    const itemIndex = newTodos.findIndex((current) => item.key === current.key);
    newTodos.splice(itemIndex, 1);
    updateTodoItems(newTodos);
  };
  const removeFromCompleted = (item) => {
    item.completed = false;
    const newArray = [...completedItems];
    const itemIndex = newArray.findIndex((current) => item.key === current.key);
    newArray.splice(itemIndex, 1);
    updateCompleted(newArray);
  };

  const handleSubmit = (item) => {
    updateTodoItems([
      { title: item, key: Math.ceil(Math.random() * 1000), completed: false },
      ...todoItems
    ]);
  };

  return (
    <div className="App">
      <h1>My to do list:</h1>
      <Form handleSubmit={handleSubmit} />
      <ToDoList toDoitems={todoItems} addToCompleted={addToCompleted} />
      <CompletedList
        completedItems={completedItems}
        remove={removeFromCompleted}
      />
    </div>
  );
}
