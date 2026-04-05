import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <label>
        Status:
        <select
          className={`staus ${task.status}`}
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      {task.status === "completed" && <p>Completed</p>}
      <p className={`priority ${task.priority}`}>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
export default TaskItem;
