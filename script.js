'use strict';
const button = document.querySelector('button');
button.addEventListener('click', (e)=>{
    const text = document.querySelector('input');
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'type';
    button.name = '削除';
    li.textContent = text.value;
    document.body.appendChild(li);
});