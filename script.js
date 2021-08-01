$(document).ready(function() {
   
    $(".saveBtn").on("click", function() {

      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // localStorage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // get current hours
      var currentHour = moment().hours();
  
     
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    
    var interval = setInterval(hourUpdater, 15000);
  
    // load data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("9"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));
  
    // display current day 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  