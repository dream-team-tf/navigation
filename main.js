$(document).ready(function() {


	// scroll function
	$(window).scroll(function() {
		if(($(window).scrollTop() >= 20) && $(window).width() > 768 ) {
			$('header .outerContainer').addClass('headerTransition');
			$('header .innerContent').addClass('justifyCenter');
			$('.logoContainer').addClass('shrinkLogo');
			$('.arrowContainer').addClass('showArrowContainer');

			// header hover over function
			$('header .outerContainer').on('mouseleave', function() {
					$('nav').removeClass('openNav showNav');
			});

			if($('nav').hasClass('openNav') == false) {
				$('nav').removeClass('showNav');
				$('nav').addClass('hideNav');


			}


		} else {
			$('header .outerContainer').removeClass('headerTransition');
			$('header .innerContent').removeClass('justifyCenter');
			$('.logoContainer').removeClass('shrinkLogo');
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
	})


	// arrow button click function
	$('.navButton').on('click', function() {
		if($(window).scrollTop() >= 20 && $(window).width() > 768) {
			$('nav').toggleClass('openNav showNav');
		}
	});








});