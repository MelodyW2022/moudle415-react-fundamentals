# Reflection

## 1. How did you ensure unique keys for your list items?

I used each task's `id` as the React key when rendering the task list in `TaskList.tsx`. This was the safest choice because every task already had a unique identifier, and it avoided using the array index, which can cause rendering issues when items are deleted or reordered.

## 2. What considerations did you make when implementing the filtering functionality?

I separated the filtering UI from the filtering logic. `TaskFilter` is only responsible for collecting the selected status and priority values, while `App.tsx` owns the real filter state and computes `filteredTasks`. I also made `status` and `priority` optional in `TaskFilters` so the app could support filtering by one field, both fields, or neither field. When no filter is selected, the task should still pass that condition.

## 3. How did you handle state updates for task status changes?

I handled status updates in `App.tsx`, where the task state lives. I used `setTasks` with the previous state and `map()` to create a new array. For the task whose `id` matched the selected task, I returned a copied task object with the updated `status`. All other tasks were returned unchanged. This kept the update immutable and followed React state management best practices.

## 4. What challenges did you face when implementing conditional rendering?

One challenge was deciding whether to use conditional rendering or conditional styling. In this project, some requirements were better solved with conditional styling, such as changing the status dropdown color and priority text color based on task data. Another challenge was making sure class names in the JSX exactly matched the CSS selectors. Small typos in class names prevented styles from applying, so checking naming consistency became important during debugging.
