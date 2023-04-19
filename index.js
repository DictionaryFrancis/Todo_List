const taskInput = document.querySelector(".task-input input")

// getting localStorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list"));

taskInput.addEventListener("keyup", e =>{
    let userTask = taskInput.value.trim();
    if(e.key == "Enter"){
        if(!todos){ //if todos isnt exist, pass an empty array to todos
            todos =[]
        }

        taskInput.value = "";
        let taskInfo = {
            name: userTask,
            status: "pending"
        };
        todos.push(taskInfo);//adding new task to todos
        localStorage.setItem("todo-list", JSON.stringify(todos))//transform in string
        
    }
})