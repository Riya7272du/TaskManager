Q1)
How long did you spend on the coding test?

Ans) It took me about 22hrs, which was close to what I expected. I made sure to read through the requirements carefully and spent time verifying my solution.

Q2)
What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Ans)
In React 18, one of the most useful features for my task management application is automatic batching of state updates. This feature allows multiple state updates to be grouped together, which reduces unnecessary re-renders and improves the app’s performance. In a task management app where state changes frequently—like adding, updating, or deleting tasks—automatic batching helps ensure that the interface remains responsive and efficient.

function CreateTask() {
const { dispatch } = useContext(TaskContext);
const { userToken } = useContext(TokenContext);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [priority, setPriority] = useState('');
const [dueDate, setDueDate] = useState('');
const handleAdd = async (e) => {
e.preventDefault();
dispatch({
type: 'ADD_TASK',
title,
description,
priority,
dueDate,
});
setTitle('');
setDescription('');
setPriority('');
setDueDate('');
};

<div>
	<label htmlFor="title">Title</label>
	<input
	type="text"
	name="title"
	id="title"
	value={title}
	required
	onChange={(e) => setTitle(e.target.value)}
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	/>
   </div>
}

Q3)
How would you track down a performance issue in production? Have you ever had to do this?

Ans) To track down a performance issue in production for the task management application, I would follow these steps:

1. Monitor Application Performance:
   I would use React Developer Tools to monitor component re-renders and ensure unnecessary re-renders aren’t causing performance issues.
2. Analyze Logs and Errors:
   If there’s a delay in loading tasks, I would look at the network tab in Chrome DevTools to check if data from localStorage is being retrieved or updated efficiently.
3. Check LocalStorage Performance:
   Since we’re using localStorage to store tasks, I would ensure that large task datasets aren't causing slowdowns. I’d optimize local storage operations by reducing the number of writes and ensuring efficient retrieval of tasks.
4. Optimize Filtering and Searching:
   If the search or filter functionality is slow, I’d check if the filtering logic is optimized. I could implement debouncing for the search input to avoid frequent state updates and heavy computations.

Q4)
If you had more time, what additional features or improvements would you consider adding to the task management application?

Ans) If I had more time, here are some additional features and improvements I would consider adding to the task management application:

1. User Authentication and Authorization:
   Implement user accounts with login and registration functionality.
   This would allow users to save and manage their tasks securely, enabling personalized task management and synchronization across devices.
2. Task Deadlines and Reminders:
   Allow users to set task reminders based on the due date.
   This would help users stay on top of their tasks by sending notifications or alerts before a task is due.
3. Collaboration and Shared Tasks:
   Enable users to share tasks with others, either by inviting teammates or generating shareable links. This would allow teams to collaborate on tasks, providing functionality for shared to-do lists or team-based task management.
