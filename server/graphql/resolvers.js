import Project from "../models/Project.js"

export const resolvers = {
	Query: {
		hello: () => "Hello World",
        projects: async () => await Project.find(),
        tasks: async () => await Task.find(),
	},

	Mutation: {
		createProject: async (_, { name, description }) => {
			
            const project = new Project({
                name,
                description
            })
            const savedProject = await project.save()
			return savedProject
		},
        createTask: async (_, { title, projectId }) => {
            const task = new Task({
                title,
                projectId
            })
            const savedTask = await task.save()
            return savedTask
        }
	},
}
