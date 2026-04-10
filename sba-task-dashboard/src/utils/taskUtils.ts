import type { Task, TaskFilters } from "../types";

export function filterTasks(tasks: Task[], filters: TaskFilters): Task[] {
  return tasks.filter((task) => {
    const matchesStatus = filters.status
      ? task.status === filters.status
      : true;
    const matchesPriority = filters.priority
      ? task.priority === filters.priority
      : true;
    const matchesSearch = filters.searchTerm
      ? task.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        task.description
          .toLowerCase()
          .includes(filters.searchTerm.toLowerCase())
      : true;
    return matchesStatus && matchesPriority && matchesSearch;
  });
}

export function sortTasksByDate(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  );
}
