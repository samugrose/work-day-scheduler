var clock = $(".clock");
var textRef;
for (i = 9; i <= 17; i++) {
    var hoursec = jQuery( `[value = ${i}]` );
    if (i < 12) { 
        hoursec.text(i + "AM");
    }else  if (i === 12){
        hoursec.text(i + "PM");
    }else { //i> 12
       hoursec.text((i - 12) + "PM");
    }
}


function returnPlans() {
    for (var i = 0; i <9; i++){
        textRef = jQuery( `[data-value = ${i}]` );
      var planned = JSON.parse(localStorage.getItem(i));     
      console.log(planned); 
      textRef.attr("placeholder", planned);
    }
  }

var currentTime = parseInt(moment().inspect().split("T")[1].substr(0,2));
var tempIndex; 

$( ".container" ).on( "click", ".textarea", function( event ) {
    event.preventDefault();
    var dataVal = $( this ).attr("data-value");
    var textRef = jQuery( `[data-value = ${dataVal}]` ); 
     var innerText = textRef.val();
    console.log(innerText);
});

$( ".container" ).on( "click", ".saveBtn", function( event ) {
    event.preventDefault();
    var saveVal = parseInt($(this).attr("data-value").substr(1, 2)); 
    var savedVal = jQuery(`[data-value = ${saveVal}]` ).val();
    textRef = JSON.stringify(savedVal); //gives value stored at the data-value 
        
    localStorage.setItem(saveVal, textRef); 
    var parsed = JSON.parse(localStorage.getItem(saveVal)); 
    console.log("parsed: " + parsed)
});

    if (currentTime < 9) {
        for (i = 0; i < 9; i++) {
            filler("future", i);
        }
    } else if (currentTime > 17) { 
        for (i = 0; i < 9; i++){
            filler("past", i);
        }
    } else { 
        tempIndex = currentTime - 9;
        for (i = 0; i < tempIndex; i++) {
            filler("past", i);
        }
        filler("present", tempIndex);
        for (i = tempIndex + 1; i < 9; i++) {
            filler("future", i);
        }
    } 

function filler(classy, index) {
        var textAreaRef = jQuery( `[data-value = ${index}]`);
        console.log(textAreaRef.attr("class"));
        textAreaRef.addClass(classy);
}


returnPlans();