import { newProject, addProject, projects } from "./project"
import { newTodo, addTodo } from "./todos"

const domContainer = document.querySelector(".container")
const DOMStuff = {

  clear: () => { domContainer.innerHTML = null },

  listTodos: (which) => {

    DOMStuff.clear()

    if(which.length > 0) {
      for (let i = 0; i < which.length; i++) {
        const div = document.createElement("div")
        const p = document.createElement("p")
        div.classList.add("todo-card")
        p.textContent = which[i].title

        const array = [p]
        array.forEach(item => div.appendChild(item))
        domContainer.appendChild(div)
      }
    } else {
      domContainer.textContent = "None"
    }

    const backButton = document.createElement("button")
    backButton.textContent = "Go Back"
    backButton.addEventListener("click", () => DOMStuff.listProject(projects))
    domContainer.appendChild(backButton)

    const addTodoButton = document.createElement("button")
    addTodoButton.textContent = "Add Todo"
    addTodoButton.addEventListener("click", () => {
      let coba = newTodo("gendeng", "ya", "kapan kapan", "low", "none")
      addTodo(coba, which)
    })
    domContainer.appendChild(addTodoButton)

  },

  listProject: (project) => {

    DOMStuff.clear()
    project.forEach(item => {

      const div = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")

      div.classList.add("project-card")
      h3.textContent = item.title
      p.textContent = item.desc
      div.addEventListener("click", (() => {
        DOMStuff.listTodos(item.todo)
      }))

      let array = [h3,p]
      array.forEach(content => div.appendChild(content))
      domContainer.appendChild(div)

    })

    const addProjectButton = document.createElement("button")
    addProjectButton.textContent = "Add Project"
    addProjectButton.addEventListener("click", () => {
      let coba = newProject("pig", "lmaoo")
      addProject(coba)
    })
    domContainer.appendChild(addProjectButton)

  },
}

export default DOMStuff