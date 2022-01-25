import DOMStuff from "./dom.js"

let projects = []

function newProject(title, desc) {
  return { title, desc, todo: [] }
}

function addProject(value) {
  projects.push(value)
  DOMStuff.listProject(projects)
  saveProject()
}

function deleteProject(which) {
  projects.splice(which, 1)
  DOMStuff.listProject(projects)
  saveProject()
}

function saveProject() {
  localStorage.setItem("projects", JSON.stringify(projects))
}

export { newProject, addProject, deleteProject, saveProject, projects }