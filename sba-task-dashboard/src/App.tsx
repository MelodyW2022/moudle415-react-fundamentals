import { useState } from "react";
import "./App.css";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Task, TaskFilters, TaskStatus } from "./types";

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
    setTasks((prevTasks) =>
      [...prevTasks].sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
      ),
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filters.status ? task.status === filters.status : true;
    const matchesPriority = filters.priority
      ? task.priority === filters.priority
      : true;

    return matchesStatus && matchesPriority;
  });

  return (
    <main className="app-shell">
      <section className="app-header">
        <p className="eyebrow">SBA Task Dashboard</p>
        <h1>Task Management Dashboard</h1>
        <p className="intro">
          This first pass reuses the core Lab 3 features: filtering, task
          status updates, deletion, and due-date sorting.
        </p>
      </section>

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
