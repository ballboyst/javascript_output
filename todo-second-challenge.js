let todoList = [""];
let taskName = document.getElementById('taskName');
let add = document.getElementById('add');
let text = "";
let task = document.getElementById("task");
console.log(todoList);
taskName.addEventListener("change", function(){
    addTodo();
});

const addTodo = () => {
    text = taskName.value;
    const obj = {
        todo:text,
        done:false
    };
    todoList.push(obj);
    console.log(todoList);
    taskName.value = ""; 
    let ul = document.createElement("ul");
    let checkbox = document.createElement("checkbox");
    let anchor = document.createElement("a");
    let updateButton = document.createElement("button");
    updateButton.textContent = "編集";
    updateButton.setAttribute("name", "編集");
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("name", "削除")
    ul.appendChild(checkbox);
    ul.appendChild(anchor);
    todoList.forEach((todo) => {
        anchor.textContent = todo.todo;
        task.append(ul);
        ul.append(updateButton);
    });
}