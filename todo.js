"Use strict";
console.log("表示確認");
const todoList = [];
const addButton = document.getElementById('add');
const text = document.getElementById('taskName');
const task = document.getElementById('task');


// todoList配列から要素番号を調べるメソッド
const getTaskPosition = (ul) => {
    let aElement = ul.querySelector('a');
    let currentText = aElement.textContent;
    return todoList.findIndex(task => task.todo === currentText);
};

// READ機能
const readFunction = () => {
    let ul = document.querySelectorAll('ul');
    console.log(`ul要素は${ul}`);    //debug
    ul.forEach(ul => ul.remove());  // 表示を更新するために繰り返し処理でul要素を削除
    for (num of todoList) {     // ulを作成
        let ul = document.createElement('ul');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');

        // チェックボックスのイベントリスナー
        check.addEventListener('change', function(){
            let position = getTaskPosition(ul);
            console.log(position);
            todoList[position].checked = check.checked;
            console.log(todoList);  // debug
            taskCount();
            }
        );
        let anchor = document.createElement('a');
        anchor.textContent = num.todo;
        let updateButton = document.createElement('button');
        updateButton.textContent = '編集';
        updateButton.setAttribute("id","block");

        // 編集ボタンのイベントリスナー
        updateButton.addEventListener('click', function() {
            let position = getTaskPosition(ul);
            let displayText = todoList[position].todo;
            let form = document.createElement('input');
            let recordButton = document.createElement('button');
            recordButton.textContent = '保存';
            ul.replaceChild(form, anchor);
            ul.replaceChild(recordButton, updateButton);
            // let updatedTask = window.prompt("編集してください", displayText);
            // if (updatedTask) {
            //     todoList[position].todo = updatedTask;
            //     anchor.textContent = updatedTask;
            //     };

            recordButton.addEventListener('click', function(){
                form.setAttribute('placeholder','displayText');
                let updatedTask = form;
                console.log(updatedTask);
                todoList[position].todo = updatedTask;
                anchor.textContent = updatedTask;
                ul.replaceChild(anchor, form);
                ul.replaceChild(updateButton, recordButton);
                readFunction();
                }
            );
        });
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.setAttribute("id","block");

        // 削除ボタンのイベントリスナー
        deleteButton.addEventListener('click', function() {
            let dialog = document.getElementById('dialog');
            dialog.showModal();
                let okButton = document.getElementById('okButton');
                let cancelButton = document.getElementById('cancelButton');
                okButton.onclick = () => {
                    let position = getTaskPosition(ul);
                    todoList.splice(position, 1); // todoListから削除
                    dialog.close();
                    readFunction();
                };
                cancelButton.onclick = () => {
                    dialog.close();
                };
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

}

// タスクの数を取得するメソッド
const taskCount = () => {
    let allTask = todoList.length;
    let complatedTask = todoList.filter(completed => completed.checked == true).length;
    let uncomplatedTask = allTask - complatedTask;
    let detail = `全てのタスク：${allTask}　　完了済み：${complatedTask}　　未完了：${uncomplatedTask}`;
    let taskCountLine = document.getElementById('taskCount');
    taskCountLine.textContent = detail;
};

// create機能
addButton.addEventListener('click', function(){
    const text = document.getElementById('taskName');
    console.log(`入力値は${text.value}`);    //debug
    const obj = {
        todo: text.value,
        checked: false
    };
    console.log(obj);
    todoList.push(obj);
    console.log(todoList);  // debug
    readFunction();
});

