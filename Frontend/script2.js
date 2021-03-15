"use strict";
// Display the table or loading keyword when submit button is pressed
function showDiv() {
  if (document.getElementById("table")) {
    if (document.getElementById("table").style.display == "none") {
      document.getElementById("table").style.display = "block";
      document.getElementById("loadingData").style.display = "none";
    } else {
      document.getElementById("table").style.display = "none";
      document.getElementById("loadingData").style.display = "block";
    }
  }
}

// Adjusting the table size when output table is displayed
$(document).ready(function () {
  $("#table").show();
});
$("#myIframe").css("height", $(window).height() + "px");
