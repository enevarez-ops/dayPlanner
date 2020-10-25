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
    });
  }

  hourClock();
});
