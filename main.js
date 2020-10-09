$(document).ready(function() {


	// scroll function on tablet and desktop view
	$(window).scroll(function() {
		if(($(window).scrollTop() >= 20) && $(window).width() > 768 ) {
			$('header .outerContainer').addClass('headerTransition');
			$('header .innerContent').addClass('justifyCenter');
			$('.logo').addClass('shrinkLogo');
			$('.arrowContainer').addClass('showArrowContainer');

			// header hover over function
			$('header .outerContainer').on('mouseleave', function() {
					$('nav').removeClass('openNav showNav');
			});

			// arrow button click function
			$('.navButton').on('click', function() {
				$('nav').toggleClass('openNav showNav');
			});

			if(!$('nav').hasClass('openNav')) {
				$('nav').removeClass('showNav');
				$('nav').addClass('hideNav');
			}


		} else {
			$('header .outerContainer').removeClass('headerTransition');
			$('header .innerContent').removeClass('justifyCenter');
			$('.logo').removeClass('shrinkLogo');
			$('.arrowContainer').removeClass('showArrowContainer');
			$('nav').removeClass('openNav showNav hideNav')
			
			// header hover over function
			$('header .outerContainer').on('mouseenter', function() {
				$('nav').addClass('openNav showNav');
			});

			if( $('nav').hasClass('openNav') ) {		
				$('nav').addClass('showNav');
			}

		}
	});


	// mobile functions
	if($(window).width() > 1024) {
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
	}








});