$(document).ready(function () {
  $(".save-button").click(function () {
    var userInput = $(this).siblings(".saveText").val();
    var timeClock = $(this).parent().attr("id");
    localStorage.setItem(timeClock, userInput);
  });

  function hourClock() {
    var currentTime = moment().hours();
    $(".time-block").each(function () {
      var hourSave = parseInt($(this).attr("id").split("-")[1]);
      if (hourSave < currentTime) {
        $(this).addClass("past");
      } else if (hourSave === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourClock();

  var timeUpdate = setInterval(hourClock, 15000);

  $("#hour-9 .saveText").val(localStorage.getItem("hour-9"));
  $("#hour-10 .saveText").val(localStorage.getItem("hour-10"));
  $("#hour-11 .saveText").val(localStorage.getItem("hour-11"));
  $("#hour-12 .saveText").val(localStorage.getItem("hour-12"));
  $("#hour-13 .saveText").val(localStorage.getItem("hour-13"));
  $("#hour-14 .saveText").val(localStorage.getItem("hour-14"));
  $("#hour-15 .saveText").val(localStorage.getItem("hour-15"));
  $("#hour-16 .saveText").val(localStorage.getItem("hour-16"));
  $("#hour-17 .saveText").val(localStorage.getItem("hour-17"));

  $("#currentDay").text(moment().format("LLL"));
});
