//
export type TaskStatus = "pending" | "in-progress" | "completed";
// Define the TaskPriority type
export type TaskPriority = "low" | "medium" | "high";

export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
}
// Define the Task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}
// Define the props for the TaskList component
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// Define the props for the TaskItem component
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}
