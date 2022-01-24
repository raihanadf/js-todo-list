import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { addProject, deleteProject, projects, newProject } from "./project"
import { newTodo, addTodo, deleteTodo } from "./todos"

const todoContainer = document.querySelector(".containerTodo")
const projectContainer = document.querySelector(".containerProject")
const form = document.querySelector(".todo-form")

const DOMStuff = {

  clearTodo: () => { todoContainer.innerHTML = null },
  clearProject: () => { projectContainer.innerHTML = null },

  listTodos: (which, index) => {

    DOMStuff.clearTodo()

    if(which.length > 0) {
      for (let i = 0; i < which.length; i++) {

        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        const date = document.createElement("p")
        const priority = document.createElement("p")
        div.classList.add("todo-card")
        h1.textContent = which[i].title
        p.textContent = which[i].desc
        date.textContent = formatRelative(new Date(which[i].dueDate), 0)
        priority.textContent = which[i].priority

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "DELETE"
        deleteBtn.addEventListener("click", (() => {
          deleteTodo(index, i)
        }))

        const array = [h1, p, date, priority, deleteBtn]
        array.forEach(item => div.appendChild(item))
        todoContainer.appendChild(div)

      }
    } else {
      const del = document.createElement("button")
      del.textContent = "DELETE PROJECT"
      del.addEventListener("click", () => {
        deleteProject(index)
        DOMStuff.clearTodo()
        form.innerHTML = null
      })
      todoContainer.appendChild(del)
    }

    const addTodoButton = document.createElement("button")
    addTodoButton.textContent = "Add Todo"
    addTodoButton.id = "addTodoButton"
    addTodoButton.addEventListener("click", () => {
      DOMStuff.toggleAddTodo(which, index)
      addTodoButton.classList.toggle("hide")
    })

    todoContainer.appendChild(addTodoButton)
  },

  listProject: (project) => {

    DOMStuff.clearProject()
    project.forEach((item, index) => {

      const div = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")

      div.classList.add("project-card")
      h3.textContent = item.title
      p.textContent = item.desc

      div.addEventListener("click", (() => {
        DOMStuff.listTodos(item.todo, index)
      }))


      let array = [h3,p]
      array.forEach((content) => { div.appendChild(content) })
      projectContainer.appendChild(div)

    })

  },

  ProjectAdd: () => {
    const button = document.querySelector("#addProjectBtn")
    button.addEventListener('click', () => {
      const name = document.querySelector("#projectName").value
      const desc = document.querySelector("#projectDesc").value
      const project = newProject(name, desc)
      name && desc ? addProject(project) : alert("yg bener")
    })
  },

  toggleAddTodo: (which, index) => {
    form.innerHTML = `
          <input type="text" placeholder="title" id="title">
          <input type="text" placeholder="desc" id="desc">
          <input type="date" placeholder="dueDate" id="dueDate">
          <select name="priority" id="priority" id="priority">
            <option value="low" aria-checked="true">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          <button id="btnAdd">Add</button>
          <button id="btnClose">Close</button>
    `

    const btnAdd = document.querySelector("#btnAdd")
    btnAdd.addEventListener("click", () => {
      const title = document.querySelector("#title").value
      const desc = document.querySelector("#desc").value
      const dueDate = document.querySelector("#dueDate").value
      const priority = document.querySelector("#priority").value
      if(title && desc && dueDate && priority) {
        const todo = newTodo(title,desc,dueDate,priority)
        addTodo(todo, index)
        form.innerHTML = ""
        DOMStuff.listTodos(which, index)
       } else {
        alert("yg bener maz")
       }
    })

    const btnClose = document.querySelector("#btnClose")
    btnClose.addEventListener("click", () => {
      form.innerHTML = ""
      DOMStuff.listTodos(which, index)
    })
  },

  init: () => {

  // for testing purposes
  let defaultProject = newProject("Default", "Your default project")
  projects.push(defaultProject)
  DOMStuff.listProject(projects)
  DOMStuff.ProjectAdd()

  }
}

export default DOMStuff