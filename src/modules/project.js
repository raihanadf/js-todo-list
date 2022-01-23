import DOMStuff from "./dom.js"
import { newTodo } from "./todos.js"

  let projects = []

  function newProject(title, desc) {
    return { title, desc, todo: [] }
  }

  const init = () => {
    // for testing purposes
    let haha = newTodo("si gandi", "lol", "gatau", "besok", "kapan", "ya") 
    let hoho = newTodo("si babi", "hmm", "gatau", "besok", "kapan", "ya") 
    let awok = newTodo("si iblis", "hmm", "gatau", "besok", "kapan", "ya") 
    let array = [haha, hoho, awok]
    let hihi = newProject("fuck gandi", "wow")
    let hehe = newProject("aku ga guna", "wow")
    projects.push(hihi)
    projects.push(hehe)
    projects[0].todo.push(...array)
    DOMStuff.listProject(projects)

  }

export { projects, init }