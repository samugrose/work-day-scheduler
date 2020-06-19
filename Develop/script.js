var clock = $(".clock");
var textRef;
for (i = 9; i <= 17; i++) {
    if (i < 12) { //prints 9am, 10am, 11am, then triggers pm
        var hoursec = jQuery( `[value = ${i}]` );
        hoursec.text(i + "AM");
        //console.log(hoursec.attr("value"));
        //getStored(i - 9);
    }else  if (i === 12){
        var hoursec = jQuery( `[value = ${i}]` );
        hoursec.text(i + "PM");
        //console.log(hoursec.attr("value"));
        //getStored(i - 9);
    }else { //i> 12
       var hoursec = jQuery( `[value = ${i}]` );
       hoursec.text((i - 12) + "PM");
        //console.log(hoursec.attr("value"));
        //getStored(i - 9);
    }
}

function indexIfy(index) {
    var value = "\"" + index + "\"";
    console.log("indexified: " + value);
    return value;
}
function returnPlans() {
    for (var i = 0; i <9; i++){
        textRef = jQuery( `[data-value = ${i}]` ); //reference to the form inside
        //console.log(indexed + " indexed");
      var planned = JSON.parse(localStorage.getItem(i));
    // console.log(planned);
    //if (planned !== null) {
      
      console.log(planned + " : textRef");

    //}
    }
  }

// var name = { 'first': 1, 'second': 2, 'third': 3 };

// // Put the object into storage
// localStorage.setItem('name', JSON.stringify(name));

// // Retrieve the object from storage
// var retrievedObject = JSON.parse(localStorage.getItem('name'));

// function getStored(index) {
// //var value;
//     var input;// = JSON.parse(localStorage.getItem(JSON.stringify(index)));
//     var planned = JSON.parse(localStorage.getItem(index));
//     console.log(planned);
//     // console.log(JSON.stringify(index));
//     // if (input !== null) {
//     //     value = input;
//     // }
//     // console.log("locals: " + index + ": " + input);
// }


//get current hours to determine past, present, etc. this value updates hourly and upon refresh
var currentTime = parseInt(moment().inspect().split("T")[1].substr(0,2));
var tempIndex; // for for loop determining time
console.log(currentTime + " hours");

//universal event delegator listening for clicks in text-areas (for adding text to calendar)
$( ".container" ).on( "click", ".textarea", function( event ) {
    event.preventDefault();
    var dataVal = $( this ).attr("data-value");
    var textRef = jQuery( `[data-value = ${dataVal}]` ); 
     var innerText = textRef.val();
    console.log(innerText);
});

$( ".container" ).on( "click", ".saveBtn", function( event ) {
    event.preventDefault();
    var saveVal = parseInt($(this).attr("data-value").substr(1, 2)); // gives single INT, use as key
    var savedVal = jQuery(`[data-value = ${saveVal}]` ).val();
    textRef = JSON.stringify(savedVal); //gives value stored at the data-value 
    console.log("textRef's text: " + textRef);
        //console.log("text value: " + textRef + " " + saveVal);
    localStorage.setItem(saveVal, textRef); //should store the textRef value at "0" or "data-value"
    console.log(localStorage.getItem(saveVal) + " value stored, indexify: " + indexIfy(savedVal));
    var parsed = JSON.parse(localStorage.getItem(saveVal)); //so you can pull from it as long as you parse and getItem with a 'val 
        console.log("saved value: " + parsed);
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
        for (i = tempIndex + 1; i < 9; i++) {
            filler("future", i); //fill all with gray before red one, which is at tempIndex
        }
    } //make method that takes limit initial index and limit end hour as parameter and turns everythign up to that point the respective class
     //for setting the color of the text areas
function filler(classy, index) {
        var textAreaRef = jQuery( `[data-value = ${index}]`);
        console.log(textAreaRef.attr("class"));
        textAreaRef.addClass(classy);
}
returnPlans();