import DOMStuff from "./dom.js"
import { newTodo } from "./todos.js"

let projects = []

function newProject(title, desc) {
  return { title, desc, todo: [] }
}

function addProject(value) {
  projects.push(value)
  DOMStuff.listProject(projects)
}

function deleteProject(which) {
  projects.splice(which, 1)
  DOMStuff.listProject(projects)
}

export { newProject, addProject, deleteProject, projects }