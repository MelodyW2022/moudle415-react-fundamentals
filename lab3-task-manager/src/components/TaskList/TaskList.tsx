import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  // If there are no tasks, display a message
  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
export default TaskList;
