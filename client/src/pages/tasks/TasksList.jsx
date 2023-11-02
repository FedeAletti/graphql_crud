/* eslint-disable react/prop-types */
import { TaskCard } from "./TaskCard"


export const TasksList = ({ tasks }) => {
    return (
        <div className="flex flex-col gap-3">
            {tasks.map(task => (
                <TaskCard key={task._id} task={task} />
            ))}
        </div>
    )
}
