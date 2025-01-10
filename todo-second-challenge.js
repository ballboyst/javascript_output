let todoList = [];
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
    reload();
};

const reload = () =>{
    let ul = document.querySelectorAll('ul');
    ul.forEach(ul => ul.remove());
    let cul = document.createElement('ul');
    
    for (todo of todoList){
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        let anchor = document.createElement("a");
        anchor.textContent = todo.todo
        let updateButton = document.createElement("button");
        updateButton.textContent = "編集";
        let deleteButton = document.createElement("button");
        deleteButton.textContent="削除";
        deleteButton.addEventListener('click', function(){
            let index = todoList.findIndex(
                (task) => task.todo === anchor.textContent
            );
            todoList.splice(index, 1);
            console.log(todoList);
            reload();
        })
        cul.append(anchor);
        cul.append(updateButton);
        cul.append(deleteButton);
        task.append(cul)
        };
    };

// add delete update は配列の処理のみやって各処理の最後に表示だけするreadを入れるのが効率的か？