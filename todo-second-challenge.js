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
    
    for (todo of todoList){
        let ul = document.createElement('ul');
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        let anchor = document.createElement("a");
        anchor.textContent = todo.todo
        let updateButton = document.createElement("button");
        updateButton.textContent = "編集";
        // 編集機能
        updateButton.addEventListener('click', function(){
            let index = todoList.findIndex(
                (task) => task.todo === anchor.textContent
            );
            let currentText = anchor.textContent;
            let update = window.prompt('内容を修正してください', currentText);
            todoList[index]['todo'] = update;
            reload();
            }
        );
        let deleteButton = document.createElement("button");
        deleteButton.textContent="削除";
        // 削除機能
        deleteButton.addEventListener('click', function(){
            let index = todoList.findIndex(
                (task) => task.todo === anchor.textContent
            );
            todoList.splice(index, 1);
            console.log(todoList);
            reload();
        })
        ul.append(anchor);
        ul.append(updateButton);
        ul.append(deleteButton);
        task.append(ul)
        };
    };

// add delete update は配列の処理のみやって各処理の最後に表示だけするreadを入れるのが効率的か？