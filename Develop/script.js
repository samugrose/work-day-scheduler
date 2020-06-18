var clock = $(".clock");
for (i = 9; i <= 17; i++) {
    if (i < 12) { //prints 9am, 10am, 11am, then triggers pm
        var hoursec = jQuery( `[value = ${i}]` );
        hoursec.text(i + "AM");
        console.log(hoursec.attr("value"));
    //$(`.container .row .hour:nth-child(${i})`).text(`${i + 8}AM`);
    }else  if (i === 12){
        var hoursec = jQuery( `[value = ${i}]` );
        hoursec.text(i + "PM");
        console.log(hoursec.attr("value"));
    }else { //i> 12
       // $(`.container .row .hour:nth-child(${i})`).text(`${i + 8}PM`);
       var hoursec = jQuery( `[value = ${i}]` );
       hoursec.text((i - 12) + "PM");
        console.log(hoursec.attr("value"));
    }
}


//get current hours to determine past, present, etc. this value updates hourly and upon refresh
var currentTime = moment().inspect().split("T")[1].substr(0,2);
console.log(currentTime + " hours");

$( ".container" ).on( "click", ".text-area", function( event ) {
    event.preventDefault();
    console.log( $( this ).attr("data-value"));
});
// var textArea = $(".text-area"); //selects each time area, 
// textArea.on("click", function(){
//     var value = $(this).data-value;
//     console.log(value);
// })

// for (i = 0; i < 10; i++) {
//     var clicked = jQuery( `[value = ${i}]` );
//     clicked.attr("data-value");
//     clicked.click(function(event) {
//         event.preventDefault();
//         console.log(clicked.value);
//     });
// }