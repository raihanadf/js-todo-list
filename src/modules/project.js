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

const init = () => {

  // for testing purposes
  let haha = newTodo("si gandi", "lol", "gatau", "besok", "kapan", true) 
  let hoho = newTodo("si babi", "hmm", "gatau", "besok", "kapan", false) 
  let awok = newTodo("si iblis", "hmm", "gatau", "besok", "kapan", true) 
  let array = [haha, hoho, awok]
  let hihi = newProject("fuck gandi", "wow")
  let hehe = newProject("Default", "wow")
  projects.push(hehe)
  projects.push(hihi)
  projects[0].todo.push(...array)
  projects[1].todo.push(...array)
  DOMStuff.listProject(projects)
  DOMStuff.ProjectAdd()

}

export { newProject, addProject, deleteProject, projects, init }