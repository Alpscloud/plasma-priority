$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});

	// ========== Scroll-to-top button ==========
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 150) {
			$('.js-go-to-top-btn').fadeIn();
		} else {
			$('.js-go-to-top-btn').fadeOut();
		}
		
	});

	$('.js-go-to-top-btn').on('click', function (e) { 
		e.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
	});
	// ========= =========== =========== ===========

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========

	// Popup
	$('.js-open-callback-popup-btn').on('click',function(e) {
		e.preventDefault();

		var btnText = $(this).attr('data-btn-text');
		var formTheme = $(this).attr('data-form-theme');

		$('.js-callback-popup').find('.btn').html(btnText);
		$('.js-callback-popup').find('input[name=form_subject]').val(formTheme);

		$('.js-callback-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========


	var feedbacksSlider = new Swiper('.js-feedbacks-slider', {
		loop: true,
		slidesPerView: 3,
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 120,
		autoplay: {
			delay: 6000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.js-feedbacks-slider-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.js-feedbacks-slider-btn-next',
			prevEl: '.js-feedbacks-slider-btn-prev',
		}
	});


	$('.js-toggle-faq-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');

		$(this).parents('.faq').find('.faq__answer').stop().slideToggle(150);
	});

	// =========== Hide all steps except the first
	var quizStep = $('.js-quiz-step');
	var quizControls = $('.js-quiz-controls');
	quizStep.not(":nth-child(1)").hide();
	quizStep.first().addClass('is-active');
	// =========== Calc progress width

	// =========== Show next / prev quiz step
	quizControls.each(function() {
		var self = $(this);

		self.on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			var quizBtn = $(e.target),
					quizDirection = quizBtn.attr('data-quiz-direction');

			if(quizBtn.prop('tagName') !== 'BUTTON') {return};


			// Quiz steps
			var currentQuizStep = self.parents('.js-quiz-step'),
					nextQuizStep = currentQuizStep.next('.js-quiz-step'),
					prevQuizStep = currentQuizStep.prev('.js-quiz-step');

			if(quizDirection === 'next') {

				// Steps
				currentQuizStep.removeClass('is-active').hide();
				nextQuizStep.addClass('is-active').fadeIn();

				initTelMask();

			} else if(quizDirection === 'prev') {

				// Steps
				currentQuizStep.removeClass('is-active').hide();
				prevQuizStep.addClass('is-active').fadeIn();

				initTelMask();

			} 
		});
	});

	// ========= Ajax form ===========
	$('.js-input').on('focus',function() {
		if($(this).hasClass('is-error')) {
			$(this).removeClass('is-error');
		}
	});

	$('.form').submit(function(e) {
		e.preventDefault();

		var that = $(this);
			inputs = that.find('.js-input'),
			flag = true;

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).addClass('is-error');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: that.serialize()
		}).done(function() {
			$('.js-popup').fadeOut(150);
			$('.js-quiz-popup').fadeOut(150);
			$('.js-thanks-popup').fadeIn(150);
			setTimeout(function() {
				$('.js-thanks-popup').fadeOut(150);
				$('html').removeClass('is-fixed');
				that.trigger("reset");
			}, 2000);
		});

	});
	// ========= =========== =========== ===========




	// ========= G o o g l e   m a p   s t y l e s ===========
	var map = $('#map');

	if(map.length > 0) {


	var latitude = $('.coords').attr('data-latitude'), // coordinates 
		longitude = $('.coords').attr('data-longitude'), // coordinates 
		map_zoom = 16, 
		marker_url = 'img/icons/svg/map.svg'; // map marker 
	// Styles
	var style =  [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFBB00"
            },
            {
                "saturation": 43.400000000000006
            },
            {
                "lightness": 37.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#FFC200"
            },
            {
                "saturation": -61.8
            },
            {
                "lightness": 45.599999999999994
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 51.19999999999999
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#FF0300"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 52
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#0078FF"
            },
            {
                "saturation": -13.200000000000003
            },
            {
                "lightness": 2.4000000000000057
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#00FF6A"
            },
            {
                "saturation": -1.0989010989011234
            },
            {
                "lightness": 11.200000000000017
            },
            {
                "gamma": 1
            }
        ]
    }
];
		// Create the point
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};
		var map = new google.maps.Map(document.getElementById('map'), map_options),
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				map: map,
				visible: true,
				icon: marker_url
			});

	}
	// ========= =========== =========== ===========




	function initTelMask() {
		$('input[type=tel]').mask('+7 (999) 999-99-99');
	}

	initTelMask();


});
