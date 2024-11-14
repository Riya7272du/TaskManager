import React, { useContext } from "react";
import moment from "moment";
import TaskContext from "../context/TaskContext";

function Overdue() {
    const { tasks } = useContext(TaskContext);

    // If no tasks are available, return a message
    if (!tasks || tasks.length === 0) {
        return  <h1 className="text-xl font-semibold text-gray-600 mb-1 flex justify-center">No Overdue Tasks Found</h1>;
    }

    // Filter overdue tasks
    const overdueTasks = tasks.filter(task => {
        const dueDate = new Date(task.dueDate);
        return dueDate && dueDate < new Date() && !task.completed;  // Check if the task is overdue and not completed
    });

    // If no overdue tasks found, display a message
    if (overdueTasks.length === 0) {
        return <h1 className="text-xl font-semibold text-gray-600 mb-1 flex justify-center">No Overdue Tasks Found</h1>;
    }

    return (
        <div>
            {overdueTasks.map((task, index) => (
                <div
                    key={index}
                    className="py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3 bg-red-200"
                >
                    <div className="task-info text-slate-900 text-sm w-10/12">
                        <h4 className="task-title text-lg capitalize">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                        <div className="italic opacity-60">
                            <p className="text-red-600">Overdue</p>
                            <p>{moment(task.dueDate).fromNow()}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Overdue;
