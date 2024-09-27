// /app/components/TaskList.tsx
import React from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  reward: number;
}

const TASKS: Task[] = [
  { id: "1", title: "Task 1", description: "Complete Task 1", reward: 10 },
  { id: "2", title: "Task 2", description: "Complete Task 2", reward: 20 },
  // Add more tasks as needed
];

const TaskList: React.FC = () => {
  return (
    <div className="task-list-container">
      <h2 className="text-2xl font-bold">Tasks</h2>
      <ul>
        {TASKS.map((task) => (
          <li key={task.id}>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
            <p>Reward: {task.reward} $COCKS</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
