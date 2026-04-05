import { useState } from "react";
import type {
  TaskFilterProps,
  TaskFilters,
  TaskPriority,
  TaskStatus,
} from "../../types";
import "./TaskFilter.css";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | "">("");
  const [priority, setPriority] = useState<TaskPriority | "">("");
  function updateFilters(
    newStatus: TaskStatus | "",
    newPriority: TaskPriority | "",
  ): void {
    const filters: TaskFilters = {};
    if (newStatus) {
      filters.status = newStatus;
    }
    if (newPriority) {
      filters.priority = newPriority;
    }
    return onFilterChange(filters);
  }
  return (
    <div className="task-filter">
      <div className="filter-group">
        <label htmlFor="status-filter">Status </label>
        <select
          id="status-filter"
          value={status}
          onChange={(e) => {
            const newStatus = e.target.value as TaskStatus | "";
            setStatus(newStatus);
            updateFilters(newStatus, priority);
          }}
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="priority-filter">Priority</label>
        <select
          id="priority-filter"
          value={priority}
          onChange={(e) => {
            const newPriority = e.target.value as TaskPriority | "";
            setPriority(newPriority);
            updateFilters(status, newPriority);
          }}
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}
export default TaskFilter;
