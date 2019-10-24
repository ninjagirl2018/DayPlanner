// get from Momentjs the data to display current day on page - added YYYY to template
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));


  //figure out from Momentjs what time it is (from getTime function) and evaluate with a loop, in each row, 
  //whether that row is before now, now or later than now, in relation to the current hour, and sets
  //the timeRow to classes of done, now or future
  
  function getTime() {
    var now = moment().hours();
    $(".row").each(function() {
      var timeRow = parseInt($(this).attr("id").split("-")[1]);
        if (timeRow < now) {
          $(this).addClass("done");
        } 
        else if (timeRow === now) {
          $(this).removeClass("done");
          $(this).addClass("now");
        } 
        else {
          $(this).removeClass("done");
          $(this).removeClass("now");
          $(this).addClass("future");
      }
    });
  }


  //get whatever the user inputs into .calendar Event, turn it into a value and put it
  //into local storage and tie it to the hour
  $("#hour-9 .calendarEvent").val(localStorage.getItem("hour-9"));
  $("#hour-10 .calendarEvent").val(localStorage.getItem("hour-10"));
  $("#hour-11 .calendarEvent").val(localStorage.getItem("hour-11"));
  $("#hour-12 .calendarEvent").val(localStorage.getItem("hour-12"));
  $("#hour-13 .calendarEvent").val(localStorage.getItem("hour-13"));
  $("#hour-14 .calendarEvent").val(localStorage.getItem("hour-14"));
  $("#hour-15 .calendarEvent").val(localStorage.getItem("hour-15"));
  $("#hour-16 .calendarEvent").val(localStorage.getItem("hour-16"));
  $("#hour-17 .calendarEvent").val(localStorage.getItem("hour-17"));
  $("#hour-18 .calendarEvent").val(localStorage.getItem("hour-18"));
  $("#hour-19 .calendarEvent").val(localStorage.getItem("hour-19"));


//When user clicks save, ask jQuery to get the calendarEvent and save them
//as one item in local storage - this can only happen after the page is loaded
//getTime also sets an internal of 1 minute to update the time

$(document).ready(function() {
  $(".storeEvent").on("click", function() {
    var value = $(this).siblings(".calendarEvent").val();
    var now = $(this).parent().attr("id");
    localStorage.setItem(now, value);
  });
  
  getTime();
    var interval = setInterval(getTime, 60000);
  
});
  

//I don't think the order of my functions always make sense, but when I try to order them
//properly it breaks my app