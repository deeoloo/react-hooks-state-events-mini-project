import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={task.id || `task-${index}`}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.id || index)}
        />
      ))}
    </div>
  );
}

export default TaskList;