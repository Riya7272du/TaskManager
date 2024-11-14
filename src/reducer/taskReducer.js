function taskReducer(tasks, action) {
	console.log('taskreducer');
	switch (action.type) {
		case 'ADD_TASK': {
			localStorage.setItem(
				'task_management',
				JSON.stringify([
					...tasks,
					{
						title: action.title,
						description: action.description,
						completed: false,
						priority: action.priority || 'Medium', // Default to 'Medium' if priority is not provided
						dueDate: action.dueDate || '11-11-2024', // Default to an empty string if dueDate is not provided
						createdAt: new Date().toISOString()
					},
				])
			);
			return [
				...tasks,
				{
					title: action.title,
					description: action.description,
					completed: false,
					priority: action.priority || 'Medium', // Default to 'Medium' if priority is not provided
					dueDate: action.dueDate || '11-11-2024', // Default to an empty string if dueDate is not provided
				},
			];
		}
		case 'SET_TASK': {
			return action.payload;
		}
		case 'REMOVE_TASK': {
			localStorage.setItem(
				'task_management',
				JSON.stringify(
					tasks.filter((task, index) => index !== action.id)
				)
			);
			return tasks.filter((task, index) => index !== action.id);
		}
		case 'MARK_DONE': {
			let newTasks = tasks.map((task, index) => {
				if (index === action.id) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			});
			// console.log('hiiiiiiiiiiiiiiiiiii');
			console.log(newTasks);
			localStorage.setItem('task_management', JSON.stringify(newTasks));
			return tasks.map((task, index) => {
				if (index === action.id) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			});
		}
		case 'UPDATE_TASK': {
			let newTasks = tasks.map((task, index) => {
				if (index === action.id) {
					return {
						...task,
						...action.updatedTask, // Spread updated fields from action.updatedTask
					};
				}
				return task;
			});
			// console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
			// console.log(newTasks);
			localStorage.setItem('task_management', JSON.stringify(newTasks));
			return tasks.map((task, index) => {
				if (index === action.id) {
					return {
						...task,
						...action.updatedTask, // Spread updated fields from action.updatedTask
					};
				}
				return task;
			});
		}
		default: {
			throw new Error('Unknown Action ' + action.type);
		}
	}
}

export default taskReducer;
