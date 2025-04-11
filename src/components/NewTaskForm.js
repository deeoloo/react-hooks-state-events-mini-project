import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty submissions
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit} data-testid="new-task-form">
      <label>
        Details
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          data-testid="new-task-text"
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          data-testid="new-task-category"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
        data-testid="new-task-submit"
      />
    </form>
  );
}

export default NewTaskForm;