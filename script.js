const weeks = ['日','月','火','水','木','金','土']
const date = new Date()
const year = date.getFullYear() // 今年
const month = date.getMonth() //今月に対応した数値（月-1）
const startDate = new Date(year,month,1) //今月初日
const endDate = new Date(year,month+1,0); // 今月末
const endDayCount = endDate.getDate(); // 今月末の日にち
const lastMonthEndDate = new Date(year,month,0) // 先月末
const lastMonthendDayCount = lastMonthEndDate.getDate() // 先月末の日にち
const startDay = startDate.getDay(); // 今月初日の曜日に対応した数値（0~6）
console.log(lastMonthEndDate);
console.log(lastMonthendDayCount);
let dayCount = 1
let calendarHtml = ''

// カレンダーの年月表示
calendarHtml += `<p id='title'>${month+1}月 ${year}</p>`;
calendarHtml += '<table>'

// 曜日の行を作成
for (let dayNum = 0; dayNum<weeks.length; dayNum++) {
    calendarHtml += '<td>' +weeks[dayNum]
        '</td>'
    }; // for文終了時点で<td>日</td> <td>月</td>　...とういうふうにテーブルデータが作られている

// 週ごとの行を作成
for (let weekly = 0; weekly < 5; weekly++){
    calendarHtml += '<tr>'
    // 週の中の曜日に対応した日にちを作成
    for (let days = 0; days < 7; days++){
        if (weekly == 0 && days < startDay){
            let num = lastMonthendDayCount - days 
            calendarHtml += '<td class="is-disabled>' + num + '</td>'
        } else if (weekly == 0 && days >= startDay) {
            let num = dayCount
            calendarHtml += '<td class="is-disabled">' + num + '</td>'
            dayCount ++
        } else if (dayCount > endDayCount) { // 翌月の日にち表示
            let num = dayCount - endDayCount
            calendarHtml += '<td class=disabled>' + num + '</td>'
            dayCount ++
        } else {
            calendarHtml += '<td>' + dayCount +'</td>' // 当月の日にち表示
            dayCount ++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml

