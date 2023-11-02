/* eslint-disable react/prop-types */
import { useMutation } from "@apollo/client"
import { DELETE_TASK } from "../../graphql/task"

export const TaskCard = ({ task }) => {

  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject']
  })

  const handleDelete = async () => {
    await deleteTask({
      variables: {
        id: task._id
      }
    })
  }

  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <h3>{task.title}</h3>
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <div className="flex justify-between">
          <ul className="steps flex-1">
            <li className="step step-primary">Backlog</li>
            <li className="step step-primary">In progress</li>
            <li className="step">Done</li>
          </ul>
          <div className="flex gap-2">
            <button className="btn btn-circle" onClick={handleDelete}>✏️</button>
            <button className="btn btn-circle" onClick={handleDelete}>✖️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
