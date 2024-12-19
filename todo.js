"Use strict";
console.log("表示確認");
const todoList = [];

 const addButton = document.getElementById('add');
 const text = document.getElementById('taskName');
 const task = document.getElementById('task');

// create機能
addButton.addEventListener('click', function(){
    let ul = document.querySelectorAll('ul');
    console.log(`ul要素は${ul}`);    //debug
    ul.forEach(ul => ul.remove());
    const text = document.getElementById('taskName');
    console.log(`入力値は${text.value}`);    //debug
    todoList.push(text.value);
    console.log(`todoリストは${todoList}`);  // debug
    for (num of todoList) {
        let ul = document.createElement('ul');
        let check = document.createElement('input');
        check.setAttribute('type','checkbox');
        let anchor = document.createElement('a');
        anchor.textContent = num;
        let updateButton = document.createElement('button');
        updateButton.textContent = '編集';
        // 編集ボタンのイベントリスナー
        updateButton.addEventListener('click', function() {
            let updatedTask = window.prompt("編集してください");
            if (updatedTask) {
                let aElement = ul.querySelector('a');
                let currentText = aElement.textContent;
                console.log(`現在のタスクは${currentText}です`);
                let position = todoList.indexOf(currentText);
                console.log(`現在の要素番号は${num}です`);
                console.log(`取得した配列の要素番号は${position}です`);
                todoList[position] = updatedTask;
                aElement.textContent = updatedTask;
                };
            }
        );
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        // 削除ボタンのイベントリスナー
        deleteButton.addEventListener('click', function() {
            ul.remove(); // ul要素を削除
            todoList.splice(todoList.indexOf(num), 1); // todoListから削除
        });

        ul.append(check);
        ul.append(anchor);
        ul.append(updateButton);
        ul.append(deleteButton);
        task.append(ul);
        text.value = "";
    }
});
