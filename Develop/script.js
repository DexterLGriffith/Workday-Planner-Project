// date and time
var date = moment();
$("#currentDay").text(date.format("MMMM Do, YYYY, HH:MM"));



var timeDay = $(".hour");
var now = parseInt(moment().format());

$.each(timeDay, function (i, hour) {
    var timeD = parseInt($(this).attr("id"));
    if (timeD === now) {
        $(this).next().addClass("present");

    }
    else if (timeD < now) {
        $(this).next().addClass("past");
    }
    else if (timeD > now) {
        $(this).next().addClass("future");
    }
});
