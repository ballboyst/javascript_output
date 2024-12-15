"Use strict";
console.log("表示確認");
const todoList = [];

 const addButton = document.getElementById('add');
 const text = document.getElementById('taskName');
 const task = document.getElementById('task');

addButton.addEventListener('click', function(){
    let li = document.createElement('li');
    let anchor = document.createElement('a');
    anchor.textContent = text.value;
    li.append(anchor);
    task.append(li);
});
