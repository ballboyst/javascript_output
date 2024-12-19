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

//         ul.append(check);
//         ul.append(anchor);
//         ul.append(updateButton);
//         ul.append(deleteButton);
//         task.append(ul);
//         text.value = "";
//         }
// });

// // delete機能
// buttons = document.querySelectorAll('button');
// for (number = 0; number < buttons.length; number ++){
//     buttons[number]=addEventListener('click',function(){
//         this.parent.remove();
//     })
// };

// // 削除ボタンのイベントリスナー
// deleteButton.addEventListener('click', function() {
//     ul.remove(); // ul要素を削除
//     todoList.splice(todoList.indexOf(num), 1); // todoListから削除
// });

// ul.append(check);
// ul.append(anchor);
// ul.append(updateButton);
// ul.append(deleteButton);
// task.append(ul);
// text.value = "";
// }
// });