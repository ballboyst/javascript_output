let todoList = [];
let taskName = document.getElementById('taskName');
let add = document.getElementById('add');
let text = "";
let task = document.getElementById("task");
console.log(todoList); 
taskName.addEventListener("change", function(){
    addTodo();
});

let searchTask = document.getElementById("searchTask");
searchTask.addEventListener('input', function(){
    reload();
});


// const reload1 = () => {console.log("hello")};
const reload = () =>{
    console.log('hello');
    let ul = document.querySelectorAll('ul');
    ul.forEach(ul => ul.remove());
    let filter = todoList.filter(
        (task) => task.todo.includes(searchTask.value)
    );
    console.log(searchTask.value) 
    console.log(filter);
    
    for (todo of filter){
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
        //     let update = window.prompt();
        //     if (update != null){
        //         todoList[index]["todo"] = update;
        //     };
        //     reload();
        // });
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