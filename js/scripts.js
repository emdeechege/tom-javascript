$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
$(document).ready(function() {
  $("button").click(function() {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});
$(document).ready(function() {
  $("button").click(function() {
    $("#div4").fadeOut();
    $("#div5").fadeOut("slow");
    $("#div6").fadeOut(3000);
      });
    });
$(document).ready(function() {
  $("#flip").click(function() {
  $("#panel").slideDown("slow");
    });
      });
