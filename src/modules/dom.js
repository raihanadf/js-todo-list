import { addProject, deleteProject, projects, newProject } from "./project"
import { newTodo, addTodo, deleteTodo } from "./todos"

const todoContainer = document.querySelector(".containerTodo")
const projectContainer = document.querySelector(".containerProject")

const DOMStuff = {

  clearTodo: () => { todoContainer.innerHTML = null },
  clearProject: () => { projectContainer.innerHTML = null },

  listTodos: (which, index) => {

    DOMStuff.clearTodo()
    console.log(which)

    if(which.length > 0) {
      for (let i = 0; i < which.length; i++) {

        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")
        const isChecked = () => which[i].check ? "nice" : "gkdl"
        div.classList.add("todo-card")
        h1.textContent = which[i].title
        p.textContent = isChecked()
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "DELETE"
        deleteBtn.addEventListener("click", (() => {
          deleteTodo(index, i)
        }))

        const array = [h1, p, deleteBtn]
        array.forEach(item => div.appendChild(item))
        todoContainer.appendChild(div)

      }
    } else {
      todoContainer.textContent = "None"
    }

    const addTodoButton = document.createElement("button")
    addTodoButton.textContent = "Add Todo"
    addTodoButton.addEventListener("click", () => {
      let coba = newTodo("gendeng", "ya", "kapan kapan", "low", "none")
      addTodo(coba, index)
    })

    todoContainer.appendChild(addTodoButton)
  },

  listProject: (project) => {

    DOMStuff.clearProject()
    project.forEach((item, index) => {

      const div = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const deleteBtn = document.createElement("button")

      div.classList.add("project-card")
      h3.textContent = item.title
      p.textContent = item.desc
      deleteBtn.textContent = "DELETE"

      div.addEventListener("click", (() => {
        DOMStuff.listTodos(item.todo, index)
      }))

      deleteBtn.addEventListener("click", (() => {
        deleteProject(index)
      }))

      let array = [h3,p]
      array.forEach((content) => { div.appendChild(content) })
      projectContainer.appendChild(div)
      projectContainer.appendChild(deleteBtn)

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
  }

}

export default DOMStuff