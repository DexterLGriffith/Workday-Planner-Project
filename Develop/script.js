// date and time
var date = new Date();
document.getElementById("currentDay").innerHTML = date.toLocaleDateString('en-US', {
    weekday: "long",
    day: "numeric",
    year: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
});
