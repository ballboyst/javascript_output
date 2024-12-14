// カレンダー表示する月の設定値を取得
const userInput = window.prompt("カレンダーコマンドを入力してください");
const parts = userInput.split(" ");
const cmd = parts[0];
const arg = parts[1];
const inputMonth = (parts[2]);


const weeks = ['日','月','火','水','木','金','土']
const date = new Date()
const year = date.getFullYear() // 今年
const month = date.getMonth() //今月に対応した数値（月-1）
setMonth = (inputMonth === undefined) ? month : inputMonth -1  ;
const startDate = new Date(year,setMonth,1) //月初日
const endDate = new Date(year,setMonth+1,0); // 月末
const endDayCount = endDate.getDate(); // 月末の日にち
const lastMonthEndDate = new Date(year,setMonth,0) // 先月末
const lastMonthendDayCount = lastMonthEndDate.getDate() // 先月末の日にち
const startDay = startDate.getDay(); // 月初日の曜日に対応した数値（0~6）
const today = date.getDate();
let dayCount = 1
let calendarHtml = ''

console.log(`設定は${setMonth}で、表示月は${setMonth +1}月です`);       //デバッグ用

// 入力値判定
if (inputMonth === undefined || (inputMonth <13 && inputMonth >0)) {

    // カレンダーの年月表示
    calendarHtml += `<a id='title'>${setMonth + 1}月　${year}</a>`;
    calendarHtml += '<table>'

    // 曜日の行を作成
    for (let dayNum = 0; dayNum<weeks.length; dayNum++) {
        calendarHtml += '<td>' +weeks[dayNum]
            '</td>'
        }; // for文終了時点で<td>日</td> <td>月</td>　...とういうふうにテーブルデータが作られている

    // 週ごとの行を作成
    for (let weekly = 0; weekly < 6; weekly++){
        calendarHtml += '<tr>'
        // 週の中の曜日に対応した日にちを作成
        for (let days = 0; days < 7; days++){
            if (dayCount == today) {
                calendarHtml += '<td id="mark">' + dayCount + '</td>'
                dayCount ++
            }else if (weekly == 0 && days < startDay){
                calendarHtml += '<td class="is-disabled">' + "" + '</td>'
            } else if (weekly == 0 && days >= startDay) {
                let num = dayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount ++
            // } else if (dayCount > endDayCount) { // 翌月の日にち表示
            //     let num = dayCount - endDayCount
            //     calendarHtml += '<td class="is-disabled">' + num + '</td>'
            //     dayCount ++
            } else if (dayCount <= endDayCount ) {
                calendarHtml += '<td class="is-disabled">' + dayCount +'</td>' // 当月の日にち表示
                dayCount ++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    document.querySelector('#calendar').innerHTML = calendarHtml

    console.log("入力は正常です")   // デバッグ用
} else {
    window.alert("入力値エラーです。\n月の指定は１〜１２の範囲です。")
    console.log("入力エラーです")   // デバッグ用
};

