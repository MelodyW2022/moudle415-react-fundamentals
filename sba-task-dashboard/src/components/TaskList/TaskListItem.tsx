import type { TaskListItemProps, TaskStatus } from "../../types";
import { formatDate } from "../../utils/taskUtils";

export function TaskListItem({
  task,
  onStatusChange,
  onDelete,
}: TaskListItemProps) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <div className="task-card-actions">
          <select
            value={task.status}
            onChange={(event) =>
              onStatusChange(task.id, event.target.value as TaskStatus)
            }
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button type="button" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="task-card-meta">
        <span className={`priority-badge ${task.priority}`}>
          Priority: {task.priority}
        </span>
        <span>Due: {formatDate(task.dueDate)}</span>
      </div>
    </article>
  );
}

export default TaskListItem;
