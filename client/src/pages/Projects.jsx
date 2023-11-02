import { ProjectForm } from "../components/ProjectForm"
import { ProjectList } from "../components/ProjectList"


export const Projects = () => {
    return (
        <div className="min-h-screen grid place-content-center">
            <div className="flex flex-col lg:flex-row">
                <ProjectForm />
                <hr className="border border-gray-300 my-6"/>
                <ProjectList />
            </div>
        </div>
    )
}
