// date and time
var date = moment();
$("#currentDay").text(date.format("MMMM Do, YYYY, HH:MM"));
var timeblock1 = document.getElementById("#timeblock1");

// ---------past,present,future background color change attempt ------//
var timeDay = date.getHours;
    if (timeblock1) {
        if (timeDay === moment) {
            next().addClass("present");
        }
    }
    else if (timeblock1) { 
        if (timeDay > moment) {
            next().addClass("future");
        }
    }
    else if (timeblock1) {
        if (timeDay < moment) {
            next().addClass("past");
        }
    }
// --------save button to local storage-----//
var SaveBtn = document.getElementById("saveBtn");
SaveBtn.onclick = saveData();

function saveData() {
    var input = document.getElementById("text");
    localStorage.setItem("text", input.placeholder);
   
}