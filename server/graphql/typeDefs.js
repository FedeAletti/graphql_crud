import { gql } from "graphql-tag"

export const typeDefs = gql`
	type Query {
		hello: String
		projects: [Project]
		project(_id: ID!): Project
        tasks: [Task]
		task(_id: ID!): Task
	}

	type Project {
		_id: ID
		name: String!
		description: String
		tasks: [Task]
		createdAt: String
		updatedAt: String
	}

	type Task {
		_id: ID
		title: String!
		projectId: ID
		project: Project
        createdAt: String
        updatedAt: String
	}

	type Mutation {
		createProject(name: String, description: String): Project
		createTask(title: String, projectId: ID): Task
		deleteProject(_id: ID!): Project
		deleteTask(_id: ID!): Task
		updateProject(_id: ID!, name: String, description: String): Project
		updateTask(_id: ID!, title: String, projectId: ID): Task
	}
`
