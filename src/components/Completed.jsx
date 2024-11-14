import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import CompletedTask from "./CompletedTask";

function Completed() {
    const { tasks } = useContext(TaskContext);

    // Filter completed tasks
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div>
            {
                completedTasks.length > 0 ? (
                    completedTasks.map((task, index) => (
                        <CompletedTask
                            key={index}
                            task={task}
                            id={index}
                        />
                    ))
                ) : (
                    <h1 className="text-xl font-semibold text-gray-600 mb-1 flex justify-center">No Completed Task Found</h1>
                )
            }
        </div>
    );
}

export default Completed;
