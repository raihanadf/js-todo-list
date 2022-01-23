import { projects } from "./project"

const domContainer = document.querySelector(".container")
const DOMStuff = {

  clear: () => { domContainer.innerHTML = null },

  listTodos: (which) => {

    DOMStuff.clear()

    for (let i = 0; i < which.length; i++) {
      const p = document.createElement("p")
      p.textContent = which[i].title

      const array = [p]
      array.forEach(item => domContainer.appendChild(item))
    }

    const button = document.createElement("button")
    button.textContent = "Go Back"
    button.addEventListener("click", () => DOMStuff.listProject(projects))
    domContainer.appendChild(button)

  },

  listProject: (project) => {

    DOMStuff.clear()
    project.forEach(item => {

      const div = document.createElement("div")
      const h3 = document.createElement("h3")
      const p = document.createElement("p")
      const button = document.createElement("button")

      h3.textContent = item.title
      p.textContent = item.desc
      button.textContent = "test"
      button.addEventListener("click", (() => {
        DOMStuff.listTodos(item.todo)
      }))

      let array = [h3,p, button]
      array.forEach(content => div.appendChild(content))
      domContainer.appendChild(div)

    })
  },
}

export default DOMStuff