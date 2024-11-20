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

// const numList = [1, 2, 3, 4, 5, 6, 7, 8];
// const ul = document.getElementById('list');
// const print = numList.filter((num)=>num%2==0);
// const list = print.map((number)=>{
//     const li = document.createElement('li');
//     // console.log(number);
//     li.textContent= "No." + number;
//     ul.appendChild(li);
// })

// const table = document.querySelector('table');
// const tr = document.createElement('tr');
// const header = ['名前', 'タイプ', '体重', '特技'];
// for (const h in header) {
//     const th = document.createElement('th');
//     th.textContent = h;
//     tr.appendChild(th);
// };
// table.appendChild(tr);
// const evList = [
//     { name: 'サンダース', type: 'でんき', weight: 24.5, ability: 'ちくでん' },
//     { name: 'ブースター', type: 'ほのお', weight: 25.0, ability: 'もらいび' },
//     { name: 'エーフィ', type: 'エスパー', weight: 26.5, ability: 'シンクロ' },
//     { name: 'ブラッキー', type: 'あく', weight: 27.0, ability: 'シンクロ' },
//     { name: 'リーフィア', type: 'くさ', weight: 25.5, ability: 'リーフガード' },
//     { name: 'ニンフィア', type: 'フェアリー', weight: 23.5, ability: 'メロメロボディ' },
//     { name: 'グレイシア', type: 'こおり', weight: 25.9, ability: 'ゆきがくれ' },
//     { name: 'シャワーズ', type: 'みず', weight: 29.0, ability: 'ちょすい' },
//   ];

//   for (const ev of evList) {
//     console.log(ev.name);
//   };
'use strict';

const servants = ['犬', '猿', '雉'];

// console.log('現在の家来は:');
// for (const servant of servants) {
//     console.log(servant);
// };
// console.log(`の総数${servants.length}名です。`);

const showServants = (name) => {
    servants.push(name);
    console.log('現在の家来は:');
    for (const servant of servants) {
        console.log(servant);
    };
    console.log(`の総数は${servants.length}名です。`);
};

showServants("鬼");