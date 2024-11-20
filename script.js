'use strict';

// // イテレーション
// const numbers = [1,2,3,5];
// for (const num in numbers) {
//     console.log(`この表示は${num}回目です`)
// };

// const human = {HP:100,AT:10,DF:5,MP:3};
// for (const status in human) {
//     console.log(`ステータス${status}の値は${human[status]}`);
// };

// // 要素の追加
// let element= document.createElement("p");
// element.textContent="要素を追加しました";
// document.body.appendChild(element);

// const array = [1,2,'dog',3,4,'cat'];
// let cat = array.indexOf("cat");
// if (cat != -1) {
//     array.splice(cat,0,"neko");
// }
// console.log(array);
// let dog = array.indexOf("dog");
// if (dog != -1) {
//     let baw = array.splice(dog,1)
//     console.log(`${baw}の鳴き声はワン`)
// };

// const numbers = [1,2,3];
// console.log(numbers);
// const numbers2 = numbers.map((num)=>num**2);
// console.log(numbers2);
// const numbers3 = numbers2.filter((num) => num%2===1);
// console.log(numbers3);

const numList = [1, 2, 3, 4, 5, 6, 7, 8];
const ul = document.getElementById('list');
const print = numList.filter((num)=>num%2==0);
const list = print.map((number)=>{
    const li = document.createElement('li');
    // console.log(number);
    li.textContent= "No." + number;
    ul.appendChild(li);
})