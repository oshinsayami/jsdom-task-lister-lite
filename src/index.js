document.addEventListener("DOMContentLoaded", () => {
  // your code here
const addTaskArea = document.querySelector("#new-task-description")
const taskList = document.querySelector("#tasks")
const taskBtn = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")
const createTask = document.querySelector("#create-task-form")
// const deleteTask = document.getElementsByTagName("button")

createTask.addEventListener('submit', handleSubmit)
// deleteTask.addEventListener('click', handleDelete)

function handleSubmit(e){
  console.log('in the submit function')
  e.preventDefault()
  let task = document.getElementById('new-task-description').value;
  taskList.innerHTML += `<li>${task}<button class="removeBtn">X</button></li>`
  addTaskArea.innerHTML= ""
  createTask.append(taskBtn)


// function handleDelete(e){
//   console.log('in the submit function')
const deletes = document.querySelectorAll('.removeBtn')
  deletes.forEach(btn => {
    //     // Attach event listener. Note to preserve the button this-reference
    //     // by using the non-shorthand function
        btn.addEventListener('click', function() {
          var li = this.parentNode
          li.remove()
        })
})
}
})



// document.addEventListener("DOMContentLoaded", () => { // assigning global variables
//   const taskList = document.querySelector("#tasks");
//   const createTask = document.querySelector("#create-task-form");
//   const taskBtn = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)");
//   const newTask =  document.getElementById('new-task-description')
// // As a user, I should be able to type a task into the input field.
// // As a user, I should be able to click some form of a submit button.
// createTask.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//   console.log('in handle submit function')
//   e.preventDefault()
//   let task = document.getElementById('new-task-description').value;
//    //add task to list
//     taskList.innerHTML += `<li>${task}<button class="removeBtn">X</button></li> ` 
//     document.getElementById('friendsList').appendChild(li);
//    // add li
//     newTask.innerHTML = ""
//     createTask.append(taskBtn)
//     var deletes = document.querySelectorAll('.removeBtn')
//   // Iterate all nodes
//   deletes.forEach(btn => {
//     // Attach event listener. Note to preserve the button this-reference
//     // by using the non-shorthand function
//     btn.addEventListener('click', function() {
//       var li = this.parentNode
//       li.remove()
//     })
//   })
// }
// }
// )