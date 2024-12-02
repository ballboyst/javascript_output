# javascript_output
## 学習内容

### 要素の取得（DOMの操作）
document.getElementById('id名');
document.getClassNama('クラス名');
document.querySelector('要素名orクラス名orID名');

### 要素の内容操作(要素を取得してから)
<要素>.innerHTML =  <タグを含めた新しい要素>;

### 要素の生成
document.createElement('要素名');

### エレメントをHTMLに追加
<親エレメント>.appendChild(<生成したエレメント>);

### 条件分岐
if (<条件式>) {
    <Trueの処理文>
} else if (<条件式2>) {
    <Trueの処理文2>
} else {
    <Falseの処理文>
}

### 三項演算子
const <変数名> = <条件式> ? <Trueの時の代入値> : <Falseの代入値>;

### 入力ダイアログの表示
const <変数名> = windows.prompt("<表示文>");

### 繰り返し処理
for (let <変数名> = <初期値>; <条件式> <更新式>) {
    <処理文>};

### 反復処理(for-ofとfor-in)
#### for-ofはイテレーションで要素を取得する。配列の要素をループする。
#### 要素は配列の中の値をこと
#### for-inはイテレーションでプロパティ名（キー）を取得する。オブジェクトのプロパティをループする
#### プロパティはオブジェクトに関連付けられたキーと値のペアのこと。オブジェクトの状態などを表す
例えば次の配列　const numbers = [1,2,3,5];　の場合、
for (const num of numbers) {
    console.log(`この表示は${num}回目です`)
};
だとnumには1,2,3,5と代入されていく。
for (const num in numbers) {
    console.log(`この表示は${num}回目です`)
};
だとnumには0,1,2,3が代入されていく（キーを取得するため）

### 配列（array）、中身のことは要素（element）という
const array = [1,2,'dog',3,4,'cat'];
console.log(array[2]);

### 配列への追加削除
array.push(); 末尾に追加
array.unshift();　先頭に追加
array.pop();　末尾の要素を削除
array.shift();　先頭の要素を削除
array.splice(1,0,'cat'); 第１引数はインデックス、第２引数が0なら第３引数を追加
array.splice(3,1)　第１引数はインデックス、第２引数が１なら削除

### 配列の調査
array.indexOf('dog'); 配列から引数に一致するインデックスを取得する

### 配列から新しい配列を作る
const <配列> = <配列>.map((要素)=>加工処理);
例
const numbers = [1,2,3];
const numbers2 = numbers.map((num)=>num*2);

### 配列から要素を抽出する
const <配列> = <配列>.filter((要素) => 抽出条件);

### オブジェクトのプロパティを指定(ドット記法とブラケット記法)
const obj = {a:'A', b:'B', c:'C' };
console.log(obj.a);      // A
console.log(obj['a']);   // A

const prop = 'a'
console.log(obj.prop);      // undefined
console.log(obj[prop]);     // A    これはconsole.log(obj['a'])となるから

#### オブジェクトの使用例
const obj = { HP: '100', MP: '10', DF: '20' };
for (const prop in obj) {
    console.log(`私の${prop}は${obj[prop]}です`)
};

#### 関数定義
function <関数名>(引数) {
    <処理>
};
// アロー関数なら以下
const <関数名> (引数) => {処理};