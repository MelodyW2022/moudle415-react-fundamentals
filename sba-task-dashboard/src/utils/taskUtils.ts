import type { Task, TaskFilters, TaskFormData, TaskFormErrors } from "../types";
//take all tasks plus current filters and return only the matching ones.
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
//return a new array sorted by earliest due date first.
export function sortTasksByDate(tasks: Task[]): Task[] {
  return [...tasks].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
  );
}
//check the form values and return an object of error messages.
export function validateTask(taskData: TaskFormData): TaskFormErrors {
  const errors: TaskFormErrors = {};
  if (!taskData.title.trim()) {
    errors.title = "Title is required";
  }
  if (!taskData.description.trim()) {
    errors.description = "Description is required";
  }
  if (!taskData.dueDate) {
    errors.dueDate = "Due date is required";
  }
  return errors;
}
//Purpose: display the date in a cleaner way than raw YYYY-MM-DD
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
