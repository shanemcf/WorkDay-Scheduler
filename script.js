let d= new Date()
let year = d.getFullYear()
let month= d.getMonth()+1;
let day= d.getDate()

let totalDays = New Date(year, month, 0).getDate()

let output = 
(month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year

