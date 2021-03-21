//moment for the date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//div blocks for time on HTML


//color codes to show past, present, future


//save the text areas to local storage
var tasksBtn = document.querySelector(".saveBtn").addEventListener("click", function() {
    var taskEl = $("#tasks");
    localStorage.setItem("tasks", taskEl.val());
    //console.log(taskEl.val());

});

var savedTask = localStorage.getItem("tasks")
console.log(savedTask);
//array of elements for 7-3 and for each






//when we refresh, the text must remain
//after time blocks are done, save the info to ls and grab to compare, or do time first then ls