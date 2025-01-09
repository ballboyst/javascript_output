let todoList = [""];
let taskName = document.getElementById('taskName');
let add = document.getElementById('add');
let text = ""; let task = document.getElementById("task"); console.log(todoList); taskName.addEventListener("change", function(){
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
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    let anchor = document.createElement("a");
    let updateButton = document.createElement("button");
    updateButton.textContent = "編集";
    let deleteButton = document.createElement("button");
    deleteButton.textContent="削除";
    todoList.forEach((todo) => {
        console.log(todo.todo);
        anchor.textContent = todo.todo;
        task.append(ul);
        ul.append(anchor);
        ul.append(updateButton);
        ul.append(deleteButton);
        deleteButton.addEventListener('click', function(){
            // console.log(anchor.textContent)
            // let array = ["apple", "orange1", "grape2", "great3"];
            // console.log(array.indexOf("g"));
            let string= "I love dog!";
            console.log(string.indexOf("I"));
            // let index = todoList.findIndex(anchor.textContent);
            // todoList.splice(index, 1);
            // console.log(todoList);
        });
    });
};