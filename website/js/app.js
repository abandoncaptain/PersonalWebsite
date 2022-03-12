$(document).ready(function() {
  updateCenter();
  $(window).resize(function() {
    updateCenter();
  });
});

function updateCenter() {
var sWidth = $(window).width();
  $(".center").each(function() {
    var width = $(this).width();
    var leftIndent = (sWidth / 2) - (width / 2);

    if (sWidth >= 900)
      $(this).css("left", leftIndent + "px");
    else
      $(this).css("left", "auto");
  });
  var footer = $("footer");
  footer.css("left", (sWidth / 2) - (footer.width() / 2) + "px");

}
