import { useState } from "react";
import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task, TaskFilters, TaskStatus } from "./types";

function App() {
  // const [count, setCount] = useState(0)
  //task state
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "2026-04-04",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "2026-04-01",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description 3",
      status: "completed",
      priority: "high",
      dueDate: "2026-04-02",
    },
  ]);
  //filter state
  const [filters, setFilters] = useState<TaskFilters>({});
  //handleFilterChange
  function handleFilterChange(newFilters: TaskFilters) {
    setFilters(newFilters);
  }
  //handleStatusChange
  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });
  }
  //handleDelete
  function handleDelete(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }
  //filteredTasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filters.status
      ? task.status === filters.status
      : true;
    const matchesPriority = filters.priority
      ? task.priority === filters.priority
      : true;
    return matchesStatus && matchesPriority;
  });

  return (
    <>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </>
  );
}
export default App;
