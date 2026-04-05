import type { TaskItemProps, TaskStatus } from "../../types";
import "./TaskItem.css";
export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="task-item">
      <div className="task-item-header">
        <div className="task-item-info">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
        <div className="task-item-actions">
          <select
            className={`status ${task.status}`}
            value={task.status}
            onChange={(e) =>
              onStatusChange(task.id, e.target.value as TaskStatus)
            }
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button className="delete-button" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="task-item-meta">
        <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
        <p>Due: {task.dueDate}</p>
      </div>
    </div>
  );
}
export default TaskItem;
