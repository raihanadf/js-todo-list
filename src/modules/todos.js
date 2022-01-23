import DOMStuff from "./dom"

function newTodo (title, desc, dueDate, priority, note, check) {
  return { title, desc, dueDate, priority, note, check }
}

function addTodo (value, todo) {
  todo.push(value)
  DOMStuff.listTodos(todo)
}

function deleteTodo (which) {

}

function editTodo (value, which) {

}

export { newTodo, addTodo }