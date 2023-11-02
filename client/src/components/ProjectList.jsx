import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectList = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div className='flex max-w-4xl gap-5 flex-wrap justify-center'>
            {
                data.projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))
            }
        </div>
    )
}
