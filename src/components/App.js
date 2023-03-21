import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selected, setSelected] = useState("All");

  const handleDelete = (deletedTask) => {
    setTasks(tasks.filter((task) => task.text !== deletedTask))
  };

  const taskToShow = tasks.filter((task) => (
    selected === "All" || task.category === selected
  ));

  const formCategories = CATEGORIES.filter((category) => (
    category !== "All"
  ));

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected} />
      <NewTaskForm categories={formCategories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={taskToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
