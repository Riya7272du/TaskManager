import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

const Active = () => {
    const { tasks, updateTask } = useContext(TaskContext);

    const handleSave = async (id, updatedTask) => {
        console.log(`Updating task ${id} with `, updatedTask);
        await updateTask(id, updatedTask);
    };

    // Filter active tasks (tasks that are not completed)
    const activeTasks = tasks.filter(task => !task.completed);

    return (
        <div>
            {
                activeTasks.length > 0 ? (
                    activeTasks.map((task, index) => (
                        <div key={index}>
                            <Task task={task} id={index} />
                        </div>
                    ))
                ) : (
                    <h1 className="text-xl font-semibold text-gray-600 mb-1 flex justify-center">No Active Tasks Found</h1>
                )
            }
        </div>
    );
};

export default Active;
