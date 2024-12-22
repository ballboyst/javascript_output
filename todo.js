"Use strict";
console.log("表示確認");
const todoList = [];
const addButton = document.getElementById('add');
const text = document.getElementById('taskName');
const task = document.getElementById('task');
// タスクの数を取得するメソッド
const taskCount = () => {
    let allTask = todoList.length;
    let complatedTask = todoList.filter(completed => completed.checked == true).length;
    let uncomplatedTask = allTask - complatedTask;
    let detail = `全てのタスク：${allTask}　　完了済み：${complatedTask}　　未完了：${uncomplatedTask}`;
    let taskCountLine = document.getElementById('taskCount');
    taskCountLine.append(detail);
};

// create機能
addButton.addEventListener('click', function(){
    let ul = document.querySelectorAll('ul');
    console.log(`ul要素は${ul}`);    //debug
    ul.forEach(ul => ul.remove());  // 表示を更新するために繰り返し処理でul要素を削除
    const text = document.getElementById('taskName');
    console.log(`入力値は${text.value}`);    //debug
    const obj = {
        todo: text.value,
        checked: false
    };
    console.log(obj);
    todoList.push(obj);
    console.log(todoList);  // debug
    for (num of todoList) {
        let ul = document.createElement('ul');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        // チェックボックスのイベントリスナー
        check.addEventListener('change', function(){
            let position = todoList.findIndex(task => task.todo === num.todo);
            todoList[position].checked = check.checked;
            }
        );
        let anchor = document.createElement('a');
        anchor.textContent = num.todo;
        let updateButton = document.createElement('button');
        updateButton.textContent = '編集';
        updateButton.setAttribute("id","block");
        // 編集ボタンのイベントリスナー
        updateButton.addEventListener('click', function() {
            let aElement = ul.querySelector('a');
            let currentText = aElement.textContent;
            let updatedTask = window.prompt("編集してください", currentText);
            if (updatedTask) {
                console.log(`現在のタスクは${currentText}です`);
                let position = todoList.findIndex(task => task.todo === currentText);
                todoList[position].todo = updatedTask;
                aElement.textContent = updatedTask;
                };
            }
        );
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.setAttribute("id","block");
        // 削除ボタンのイベントリスナー
        deleteButton.addEventListener('click', function() {
            ul.remove(); // ul要素を削除
            todoList.splice(todoList.indexOf(num), 1); // todoListから削除
        });
        ul.append(check);
        const indexNumber = todoList.findIndex(task => task.todo === anchor.textContent);
        if (todoList[indexNumber].checked === true){
            check.checked = true
            };
        ul.append(anchor);
        console.log(anchor);
        ul.append(updateButton);
        ul.append(deleteButton);
        task.append(ul);
        text.value = "";

        taskCount();
    }
});

