/*$(window).scroll(function() {
  if (($(document).scrollTop() > 116) && ($(window).width() < 768)) {
    $('header').addClass('fixed');
  }
  else {
    $('header').removeClass('fixed');
  }
});*/

$("#navSearch").click(function () {
	$(".searchContainer").addClass("open");
});
$(document).mouseup(function(e) 
{
	var containerS = $(".searchContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerS.is(e.target) && containerS.has(e.target).length === 0) 
	{
	$(".searchContainer").removeClass("open");
	}
});

$("#navCart").click(function () {
	$(".cartContainer").addClass("open");
});
$(document).mouseup(function(e) 
{
	var containerC = $(".searchContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerC.is(e.target) && containerC.has(e.target).length === 0) 
	{
	$(".cartContainer").removeClass("open");
	}
});