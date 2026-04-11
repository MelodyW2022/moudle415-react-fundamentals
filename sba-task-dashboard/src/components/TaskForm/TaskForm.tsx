import { useState, type ChangeEvent, type FormEvent } from "react";
import type {
  TaskFormData,
  TaskFormErrors,
  TaskFormProps,
} from "../../types";
import { validateTask } from "../../utils/taskUtils";

export function TaskForm({ onSubmit }: TaskFormProps) {
  //Create initial form state
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  //Create error state
  const [errors, setErrors] = useState<TaskFormErrors>({});

  //Because different inputs use different field names, it’s easiest to make one reusable handler.
  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  //Now validate and send the form data upward.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateTask(formData);
    //stores any messages
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);

    setFormData({
      title: "",
      description: "",
      status: "pending",
      priority: "medium",
      dueDate: "",
    });

    setErrors({});
  }

  return (
    <section className="task-form-panel">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <p className="error-message">{errors.description}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
          />
          {errors.dueDate && <p className="error-message">{errors.dueDate}</p>}
        </div>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}
