import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/task";
import { useParams } from 'react-router-dom';

export const TaskForm = () => {

  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  })

  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e.target.title.value);
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: id
      }
    })
    e.target.reset()
    e.target.title.focus()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input type="text" name="title" className="input input-bordered w-full" placeholder="Add new tasks!"/>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}
