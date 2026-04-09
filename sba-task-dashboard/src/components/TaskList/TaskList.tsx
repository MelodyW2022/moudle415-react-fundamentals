import type { TaskListProps } from "../../types";
import { TaskListItem } from "./TaskListItem";

export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
  onSortByDate,
}: TaskListProps) {
  return (
    <section className="task-list-panel">
      <div className="task-list-toolbar">
        <h2>Tasks</h2>
        <button type="button" onClick={onSortByDate}>
          Sort by Due Date
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks found.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskListItem
              key={task.id}
              task={task}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TaskList;
