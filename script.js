// var currDate = new Date();
// var currTime = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();


function setDate (){
    var currDate = new Date();
    var currTime = currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
document.getElementById("currentDay").innerHTML = write(currTime);
}
setDate();

//Ok we gotta make a papa div with an id of hour-9 and class of row and time-block

//NEXT make a child div with a class of hour(you will need to look at bootstrap to see how to make it small)

//ext write a textarea next to the div with the hour and after that a button!

//In the textarea make a class of description 
//Make all those in one line to add up to 12