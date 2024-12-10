const weeks = ['日','月','火','水','木','金','土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const startDate = new Date(year,month,1)
const endDate = new Date(year,month+1,0);
const endDayCount = endDate.getDate();
const lastMonthEndDate = new Date(year,month,0) 
const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月最終日
const startDay = startDate.getDay(); // 当月初日
let dayCount = 1
let calendarHtml = ''

calendarHtml += `<p id='title'>${month+1}月 ${year}</p>`;
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i<weeks.length; i++) {
    calendarHtml += '<td>' +weeks[i]
        '</td>'
    };

for (let w = 0; w < 5; w++){
    calendarHtml += '<tr>'
    for (let d = 0; d < 7; d++){
        if (w == 0 && d < startDay){
            let num = lastMonthendDayCount - startDay +d +1
            calendarHtml += '<td class="is-disabled>' + num + '</td>'
        } else if (dayCount > endDayCount) {
            let num = dayCount - endDayCount
            calendarHtml += '<td class=disabled>' + num + '</td>'
            dayCount ++
        } else {
            calendarHtml += '<td>' + dayCount +'</td>'
            dayCount ++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml

