$(document).ready(function() {

	// $(window).resize(function() {
	// 	if($(window).width() <= 500) {
	// 		$('#body').hide()
	// 		$('#mobile').show()
	// 	} else {
	// 		$('#body').show()
	// 		$('#mobile').hide()
	// 	}
	// })

	// scroll function
	$(window).scroll(function() {
		if(($(window).scrollTop() >= 20) && $(window).width() > 768 ) {
			$('#headerDesktop header .outerContainer').addClass('#headerDesktop headerTransition');
			$('#headerDesktop header .innerContent').addClass('#headerDesktop justifyCenter');
			$('#headerDesktop .logo').addClass('#headerDesktop shrinkLogo');
			$('#headerDesktop .arrowContainer').addClass('#headerDesktop showArrowContainer');

			// header hover over function
			$('#headerDesktop header .outerContainer').on('mouseleave', function() {
					$('#headerDesktop nav').removeClass('#headerDesktop openNav showNav');
			});

			if($('#headerDesktop nav').hasClass('#headerDesktop openNav') == false) {
				$('#headerDesktop nav').removeClass('#headerDesktop showNav');
				$('#headerDesktop nav').addClass('#headerDesktop hideNav');


			}


		} else {
			$('#headerDesktop header .outerContainer').removeClass('#headerDesktop headerTransition');
			$('#headerDesktop header .innerContent').removeClass('#headerDesktop justifyCenter');
			$('#headerDesktop .logo').removeClass('#headerDesktop shrinkLogo');
			$('#headerDesktop .arrowContainer').removeClass('#headerDesktop showArrowContainer');
			$('#headerDesktop nav').removeClass('#headerDesktop openNav showNav hideNav')
			
			// header hover over function
			$('#headerDesktop header .outerContainer').on('mouseenter', function() {
				$('#headerDesktop nav').addClass('#headerDesktop openNav showNav');
			});

			if( $('#headerDesktop nav').hasClass('#headerDesktop openNav') ) {		
				$('#headerDesktop nav').addClass('#headerDesktop showNav');


			}

		}
	})


	// arrow button click function
	$('#headerDesktop .navButton').on('click', function() {
		if($(window).scrollTop() >= 20 && $(window).width() > 768) {
			$('#headerDesktop nav').toggleClass('#headerDesktop openNav showNav');
		}
	});








});