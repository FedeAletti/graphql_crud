/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({ project }) => {

    const navigate = useNavigate()

    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn" onClick={() => navigate(`/projects/${project._id}`)}>Go to project</button>
                </div>
            </div>
        </div>
    )
}
