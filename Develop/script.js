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
var currentTime = parseInt(moment().inspect().split("T")[1].substr(0,2));
var tempIndex; // for for loop determining time
console.log(currentTime + " hours");

//universal event delegator listening for clicks in text-areas (for adding text to calendar)
$( ".container" ).on( "click", ".textarea", function( event ) {
    event.preventDefault();
    console.log( $( this ).attr("data-value"));
});

//change color of area of map based on what time it is
//if before 9am, everything green- after 5pm everything gray, otherwise must determine which hour it is and turn it that color 9 == index 0

    if (currentTime < 9) { //0-8 - all green
        for (i = 0; i < 9; i++) {
            filler("future", i);
        }
    } else if (currentTime > 17) { //18 - 24 - all gray
        for (i = 0; i < 9; i++){
            filler("past", i);
        }
    } else { // between 9 and seventeen one red, some of both
        tempIndex = currentTime - 9;
        for (i = 0; i < tempIndex; i++) {
            filler("past", i); //fill all with gray before red one, which is at tempIndex
        }
        filler("present", tempIndex);
        for (i = tempIndex + 1; i <= 9; i++) {
            filler("future", i); //fill all with gray before red one, which is at tempIndex
        }
    } //make method that takes limit initial index and limit end hour as parameter and turns everythign up to that point the respective class
     //for setting the color of the text areas
function filler(classy, index) {
        var textAreaRef = jQuery( `[data-value = ${index}]`);
        console.log(textAreaRef.attr("class"));
        textAreaRef.addClass(classy);
}