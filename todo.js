"Use strict";
console.log("表示確認");
const todoList = ['apple','melon','grape'];

 const addButton = document.getElementById('add');
 const text = document.getElementById('taskName');
 const task = document.getElementById('task');

addButton.addEventListener('click', function(){
//     // let li = document.createElement('li');
//     let ul = document.createElement('ul');
//     let check = document.createElement('input');
//     check.setAttribute('type','checkbox');
//     let anchor = document.createElement('a');
//     anchor.textContent = text.value;
//     let updateButton = document.createElement('button');
//     updateButton.textContent = '編集';
//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = '削除';
//     // li.append(ul);
//     ul.append(check);
//     ul.append(anchor);
//     ul.append(updateButton);
//     ul.append(deleteButton);
//     task.append(ul);
// });
const text = document.getElementById('taskName');
console.log(text.value);
todoList.push(text.value);
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
    ul.append(check);
    ul.append(anchor);
    ul.append(updateButton);
    ul.append(deleteButton);
    task.append(ul);
    };
});
