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

function init() {
  console.log("Task Manager");

  $("#iImportant").click(toggleImportance);
  $("#btnTogglePanel").click(toggleVisibility);
}

window.onload = init;
