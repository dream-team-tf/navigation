/*$(window).scroll(function() {
  if (($(document).scrollTop() > 116) && ($(window).width() < 768)) {
    $('header').addClass('fixed');
  }
  else {
    $('header').removeClass('fixed');
  }
});*/

$("#headerMobile #navSearch").click(function () {
	$("#headerMobile .searchContainer").addClass("#headerMobile open");
});
$(document).mouseup(function(e) 
{
	var containerS = $("#headerMobile .searchContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerS.is(e.target) && containerS.has(e.target).length === 0) 
	{
	$("#headerMobile .searchContainer").removeClass("#headerMobile open");
	}
});

$("#headerMobile #navCart").click(function () {
	$("#headerMobile .cartContainer").addClass("#headerMobile open");
});
$(document).mouseup(function(e) 
{
	var containerC = $("#headerMobile .searchContainer");

	// if the target of the click isn't the container nor a descendant of the container
	if (!containerC.is(e.target) && containerC.has(e.target).length === 0) 
	{
	$("#headerMobile .cartContainer").removeClass("#headerMobile open");
	}
});