import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import Task from './Task/Task'; // Assuming you have a Task component to display task details

function MediumPriority() {
    const { tasks } = useContext(TaskContext);

    // Filter tasks by "Medium" priority
    const mediumPriorityTasks = tasks.filter((task) => task.priority === 'Medium');

    return (
        <div>
            {mediumPriorityTasks.length > 0 ? (
                mediumPriorityTasks.map((task, index) => (
                    <Task key={index} task={task} id={index} />
                ))
            ) : (
                <h1 class="text-xl font-semibold text-gray-600 mb-1 flex justify-center" >No Medium Priority Tasks Found</h1>
            )}
        </div>
    );
}

export default MediumPriority;
