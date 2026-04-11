import { useState } from "react";
import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task, TaskFilters, TaskFormData, TaskStatus } from "./types";
import { filterTasks, sortTasksByDate } from "./utils/taskUtils";
import { TaskForm } from "./components/TaskForm/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Build dashboard layout",
      description: "Create the core dashboard sections and responsive layout.",
      status: "pending",
      priority: "high",
      dueDate: "2026-04-12",
    },
    {
      id: "2",
      title: "Add task filtering",
      description: "Reuse Lab 3 filter logic for status and priority.",
      status: "in-progress",
      priority: "medium",
      dueDate: "2026-04-10",
    },
    {
      id: "3",
      title: "Write README notes",
      description: "Document setup steps and the project structure.",
      status: "completed",
      priority: "low",
      dueDate: "2026-04-09",
    },
  ]);

  const [filters, setFilters] = useState<TaskFilters>({});

  function handleFilterChange(newFilters: TaskFilters) {
    setFilters(newFilters);
  }

  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }

  function handleDelete(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  function handleSortByDate() {
    setTasks((prevTasks) => sortTasksByDate(prevTasks));
  }

  const filteredTasks = filterTasks(tasks, filters);

  function handleAddTask(taskData: TaskFormData) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      ...taskData,
    };
    setTasks((prev) => [newTask, ...prev]);
  }

  return (
    <main className="app-shell">
      <section className="app-header">
        <h1>Task Management Dashboard</h1>
      </section>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onSortByDate={handleSortByDate}
      />
    </main>
  );
}

export default App;
