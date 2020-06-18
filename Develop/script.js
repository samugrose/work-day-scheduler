var clock = $(".clock");
// for (i = 1; i < 4; i++) {
//     if (i < 3) { //prints 9am, 10am, 11am, then triggers pm
//     $(`.container .row .hour:nth-child(${i})`).text(`${i + 8}AM`);
//     }else { //i>== 3
//         $(`.container .row .hour:nth-child(${i})`).text(`${i + 8}PM`);
//     }
// }
$(` .col-md-1 .hour:nth-child(${1})`).text(`${1 + 8}AM`);

//get current hours to determine past, present, etc. this value updates hourly and upon refresh
var currentTime = moment().inspect().split("T")[1].substr(0,2);
console.log(currentTime);