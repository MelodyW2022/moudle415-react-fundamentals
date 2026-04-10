export type TaskStatus = "pending" | "in-progress" | "completed";

export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

//let filtering and serach live in one shared shape
export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
  searchTerm?: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

export interface TaskFormErrors {
  title?: string;
  description?: string;
  dueDate?: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onSortByDate: () => void;
}

export interface TaskListItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilters) => void;
}

export interface TaskFormProps {
  onSubmit: (taskData: TaskFormData) => void;
}
export interface TaskStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
}
