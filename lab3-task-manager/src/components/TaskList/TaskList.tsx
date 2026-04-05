import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskList.css";
export function TaskList({
  tasks,
  onStatusChange,
  onDelete,
  onSortByDate,
}: TaskListProps) {
  return (
    <div>
      <button className="sort-button" onClick={onSortByDate}>
        Sort by Due Date
      </button>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
export default TaskList;
