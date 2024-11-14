import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import taskReducer from '../reducer/taskReducer';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(taskReducer, []);
	

	const updateTask = async (id, updatedTask) => {
		console.log(`Updating task ${id} with`, updatedTask);
		try {
			
			console.log('Task updated successfully');
		} catch (error) {
			console.error('Error updating task', error);
		}
	};

	return (
		<TaskContext.Provider value={{ tasks, updateTask, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
