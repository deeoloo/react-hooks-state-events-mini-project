import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";

function App() {
  
  const [tasks, setTasks] = useState(
    TASKS.map((task, index) => ({ ...task, id: Date.now() + index }))
  );
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;