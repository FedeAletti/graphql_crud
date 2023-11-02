import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects'
import { TasksList } from './tasks/TasksList'
import { TaskForm } from './tasks/TaskForm'

export const ProjectDetails = () => {

    const params = useParams()

    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: {
            id: params.id
        }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    if (!data) return <p>No data :(</p>

    const { project } = data

    return (
        <div className='h-screen grid place-content-center gap-5'>
            <button className='btn btn-neutral btn-circle w-28 px-3' onClick={() => window.history.back()}>⬅️ Volver</button>
            <h1 className="text-5xl font-bold border-b border-b-primary">{project.name}</h1>
            <p>{project.description}</p>
            <button className='btn btn-neutral'>
                Delete Project
            </button>
            <hr className='border-gray-300' />
            <div className='flex justify-between items-center my-4'>
                <h2>Tasks</h2>
                <TaskForm />
            </div>
            <TasksList tasks={project.tasks} />
        </div>
    )
}
