import DOMStuff from "./dom"
import { projects } from "./project"

function newTodo (title, desc, dueDate, priority) {
  return { title, desc, dueDate, priority}
}

function addTodo (value, index) {
  projects[index].todo.push(value)
  DOMStuff.listTodos(projects[index].todo, index)
}

function deleteTodo (index, which) {
  projects[index].todo.splice(which, 1)
  DOMStuff.listTodos(projects[index].todo, index)
}

export { newTodo, addTodo, deleteTodo }