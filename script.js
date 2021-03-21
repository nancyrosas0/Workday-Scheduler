//moment for the date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//div blocks for time on HTML


//color codes to show past, present, future


//save the text areas to local storage
var tasksBtn = document.querySelector(".saveBtn").addEventListener("click", function() {
    var taskEl = $(".tasks");
    var time = this.value;
    var task = taskEl.val();
    console.log(task);
    localStorage.setItem(time, task);
    console.log(taskEl.val());

});

// var savedTask = localStorage.getItem("tasks")
// console.log(savedTask);

$("#7am-text").val(localStorage.getItem("7am"));
$("#8am-text").val(localStorage.getItem("8am"));
$("#9am-text").val(localStorage.getItem("9am"));
$("#10am-text").val(localStorage.getItem("10am"));
$("#11am-text").val(localStorage.getItem("11am"));
$("#12pm-text").val(localStorage.getItem("12pm"));
$("#1pm-text").val(localStorage.getItem("1pm"));
$("#2pm-text").val(localStorage.getItem("2pm"));
$("#3pm-text").val(localStorage.getItem("3pm"));

//array of elements for 7-3 and for each


//when we refresh, the text must remain
//after time blocks are done, save the info to ls and grab to compare, or do time first then ls