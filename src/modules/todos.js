import DOMStuff from "./dom"
import { projects } from "./project"

function newTodo (title, desc, dueDate, priority, note, check) {
  return { title, desc, dueDate, priority, note, check }
}

function addTodo (value, index) {
  projects[index].todo.push(value)
  DOMStuff.listTodos(projects[index].todo, index)
}

function deleteTodo (index, which) {
  projects[index].todo.splice(which, 1)
  DOMStuff.listTodos(projects[index].todo, index)
}

const editTodo = {
  checkList: (index, which) => {
  },
}

export { newTodo, addTodo, deleteTodo }