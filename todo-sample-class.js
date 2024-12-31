"use strict";

class Todo {
    constructor(todo) {
        this.todo = todo;
        this.checked = false;
    }
}

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(todo) {
        this.tasks.push(new Todo(todo));
        this.render();
    }

    toggleTask(index) {
        this.tasks[index].checked = !this.tasks[index].checked;
        this.render();
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    render() {
        const taskContainer = document.getElementById('task');
        taskContainer.innerHTML = ''; // Clear existing tasks
        this.tasks.forEach((task, index) => {
            const ul = document.createElement('ul');
            const check = document.createElement('input');
            check.type = 'checkbox';
            check.checked = task.checked;
            check.addEventListener('change', () => this.toggleTask(index));

            const anchor = document.createElement('a');
            anchor.textContent = task.todo;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            deleteButton.addEventListener('click', () => this.deleteTask(index));

            ul.append(check, anchor, deleteButton);
            taskContainer.appendChild(ul);
        });
        this.updateTaskCount();
    }

    updateTaskCount() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.tasks.filter(task => task.checked).length;
        const taskCountLine = document.getElementById('taskCount');
        taskCountLine.textContent = `全てのタスク：${totalTasks}　　完了済み：${completedTasks}`;
    }
}

const todoList = new TodoList();
const addButton = document.getElementById('add');
const text = document.getElementById('taskName');

addButton.addEventListener('click', () => {
    if (text.value) {
        todoList.addTask(text.value);
        text.value = ''; // Clear input
    }
});