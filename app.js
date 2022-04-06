var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = true;
var isPanelVisible = true;

function toggleImportance() {
    console.log("Toggle clicked");

  if (isImportant) {
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
    isImportant = false;
  } else {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;

    }
}

function toggleVisibility(){

    if(isPanelVisible){
        $("#sect-form").hide();
        isPanelVisible = false;
    }else{
        $("#sect-form").show();
        isPanelVisible = true;
    }

}

function saveTask(){
    console.log("Register Tasks");

    var imp = $("#iImportant").val();
    var title = $("#txtTitle").val();
    var desc = $("#txtDescription").val();
    var color = $("#selColor").val();
    var due = $("#dueDate").val();
    var start = $("#startDate").val();
    var cat = $("#selCat").val();

    console.log(imp,title,desc,color,due,start,cat);
}

function init() {
  console.log("Task Manager");

  $("#iImportant").click(toggleImportance);
  $("#btnTogglePanel").click(toggleVisibility);
  $("#btnSave").click(saveTask);
}

function test() {
    $.ajax({
        url: "https://restclass.azurewebsites.net/api/test",
        type: "GET",
        success: function(response){
            console.log("server says:", response);
        },
        error: function(errorDetails) {
            console.log(errorDetails);
        }
    });
}

function registerTask(){
    console.log("Register Tasks");
}

window.onload = init;
