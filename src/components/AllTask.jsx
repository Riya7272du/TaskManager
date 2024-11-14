import React, { useContext } from 'react';
import Task from './Task/Task';
import TaskContext from '../context/TaskContext';

function AllTask() {
    const { tasks, updateTask } = useContext(TaskContext);  // Ensure updateTask is accessed from context
    return (
        <div>
            {tasks.length !== 0 ? (
                tasks.map((task, index) => (
                    <div key={index}>
                        <Task task={task} id={index} />
                    </div>
                ))
            ) : (
                <h1 class="text-xl font-semibold text-gray-600 mb-1 flex justify-center" >No Tasks Found</h1>
            )}
        </div>
    );
}

export default AllTask;
