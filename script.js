'use strict';

// イテレーション
const numbers = [1,2,3,5];
for (const num in numbers) {
    console.log(`この表示は${num}回目です`)
};

// 要素の追加
let element= document.createElement("p");
element.textContent="要素を追加しました";
document.body.appendChild(element);

