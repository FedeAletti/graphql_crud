import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/projects"

export const ProjectForm = () => {

    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
        refetchQueries: [{ query: GET_PROJECTS }, 'getProjects']
    })


    const handleChange = ({ target: { name, value } }) => {
        setProject({
            ...project,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createProject({
            variables: {
                name: project.name,
                description: project.description
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
            <h4 className="text-3xl font-bold text-center">Create a new Project</h4>
            <div className="flex flex-col gap-2 max-w-xl ">
                {error && <p>{error.message}</p>}
                <input className="input input-bordered w-full" type="text" name="name" placeholder="Write a title" onChange={handleChange} />
                <textarea className="textarea textarea-bordered w-full" name="description" rows="3" placeholder="Write a description" onChange={handleChange}></textarea>

                <button
                    className="btn btn-primary block w-full"
                    type="submit"
                    disabled={!project.name || !project.description || loading}
                >Create</button>
            </div>
        </form>
    )
}
