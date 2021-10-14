$("#demo").hide(); // sets to display: none
$("#demo").show(200); // shows hidden elemnt with animation (speed)
$("#demo").toggle(); // toggle between show and hide
$("#demo").fadeIn(); // fade in a hidden element
$("#demo").fadeOut(300); // fade out
$("#demo").fadeToggle("slow"); // toggle between fadeIn and hadeOut
$("#demo").fadeTo("slow", 0.25); // fades to 0.25 opacity
$("#demo").slideDown();
$("#demo").slideUp("slow");
$("#demo").slideToggle();
$("div").animate({
  opacity: "0.5",
  left: "200px",
  height: "200px",
});
$(selector).css({
    propertyName: value
    
});
$(".demo").click(function () {
  $(this).hide(200);
});
