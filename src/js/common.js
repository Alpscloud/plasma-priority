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

	$('.js-anchor-link').on('click', function (e) {
	e.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top - 30;

	$('html, body').animate({scrollTop: top}, 350);
});
	// ========= =========== =========== ===========


	$('.menu-item-has-children').each(function() {
		var btn = '<button class="btn-toggle js-toggle-submenu-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 8"><path d="M450.005,159.7a0.474,0.474,0,0,1,.134-0.391l0.075-.062v-0.032l0.267-.265v-0.031l0.03-.016,0.075-.094,0.163-.156v-0.031l0.268-.266v-0.031l0.269-.266v-0.031l0.029-.016V158l0.239-.235v-0.031l0.268-.266v-0.031l0.029-.016,0.075-.093,0.163-.156V157.14l0.268-.265v-0.031l0.03-.016,0.045-.063,0.194-.187v-0.031a0.269,0.269,0,0,1,.029-0.016l0.075-.094,0.164-.156c0-.016.009-0.031,0.014-0.047a0.98,0.98,0,0,0,.224-0.25l-0.238-.234v-0.032l-0.164-.156-0.075-.093-0.029-.016v-0.031l-0.269-.266v-0.031l-0.119-.11L452,154.734l-0.178-.172v-0.031l-0.268-.266v-0.031l-0.03-.016-0.075-.093-0.163-.157v-0.031l-0.269-.265V153.64l-0.163-.156-0.075-.094-0.03-.015v-0.032l-0.238-.234v-0.016l-0.03-.015v-0.031l-0.267-.266V152.75l-0.045-.032-0.06-.078-0.029-.015v-0.032l-0.03-.015-0.015-.063H450.02a0.589,0.589,0,0,1-.015-0.218h0.015V152.25h0.015l0.03-.094,0.074-.062,0.015-.032h0.03v-0.015a0.123,0.123,0,0,0,.059-0.032l0.194-.015v0.015h0.044v0.016l0.075,0.016,0.179,0.171v0.032L451,152.515v0.031l0.238,0.235V152.8l0.03,0.015v0.031l0.268,0.266v0.031l0.268,0.266v0.031l0.268,0.266v0.031L452.343,154v0.031l0.268,0.265v0.032l0.268,0.265v0.032l0.268,0.265v0.031l0.029,0.016v0.016l0.239,0.234v0.031c0.034,0.032.069,0.063,0.1,0.094s0.069,0.084.1,0.125l0.06,0.047v0.031l0.029,0.016v0.016a0.91,0.91,0,0,1,.283.375,0.341,0.341,0,0,1-.015.156v0.062a0.666,0.666,0,0,1-.149.188c-0.034.042-.069,0.083-0.1,0.125l-0.044.031v0.031l-0.268.266v0.031l-0.253.25-0.015.047-0.268.266v0.031l-0.268.266V157.7l-0.268.265V158l-0.164.156-0.075.094-0.029.015V158.3l-0.268.265v0.032c-0.04.036-.08,0.072-0.119,0.109l-0.239.281-0.178.172v0.031l-0.149.141-0.075.093-0.044.032v0.031l-0.254.25c0,0.016-.009.031-0.014,0.047-0.06.057-.12,0.114-0.179,0.172h-0.03v0.016h-0.045v0.015a0.468,0.468,0,0,1-.238,0v-0.015l-0.059-.016v-0.016h-0.03l-0.045-.062-0.044-.031v-0.032H450.05v-0.031h-0.015l-0.015-.078h-0.015Z" transform="translate(-450 -152)"/></svg></button>';
		var link = $(this).find('> a');
		$(btn).insertAfter(link);

	});

	$('.js-toggle-submenu-btn').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');
		$(this).next('.sub-menu').stop().slideToggle(150);
	});

	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;

		if($('.js-nav').hasClass('is-opened')) {
			$('.js-open-mobile-menu-btn').removeClass('is-active');
			$('html').removeClass('is-fixed');
			$('.js-nav').removeClass('is-opened');
		}

		$('html, body').animate({scrollTop: top}, 'slow');
	});	


	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).addClass('is-active');
		$('html').addClass('is-fixed');
		$('.js-nav').addClass('is-opened');

	});

	$('.js-close-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$('.js-open-mobile-menu-btn').removeClass('is-active');
		$('html').removeClass('is-fixed');
		$('.js-nav').removeClass('is-opened');

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

	$('.js-open-quiz-popup-btn').on('click',function(e) {
		e.preventDefault();


		$('.js-quiz-popup').fadeIn(300);
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

	var promoSliderInit = $('.js-promo-slider');
	var feedbacksSliderInit = $('.js-feedbacks-slider');
	var sertificatesSliderInit = $('.js-sertificates-slider');
	var aboutClinicSliderInit = $('.js-about-clinic-slider');
	var gallerySliderInit = $('.js-gallery-slider');

	if (promoSliderInit.length > 0) {

		var promoSlider = new Swiper(promoSliderInit, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			pagination: {
				el: '.js-promo-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-promo-slider-btn-next',
				prevEl: '.js-promo-slider-btn-prev',
			},

			
		});

	}

	if (feedbacksSliderInit.length > 0) {

		var feedbacksSlider = new Swiper(feedbacksSliderInit, {
			loop: true,
			slidesPerView: 1,
			centeredSlides: false,
			spaceBetween: 20,
			pagination: {
				el: '.js-feedbacks-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-feedbacks-slider-btn-next',
				prevEl: '.js-feedbacks-slider-btn-prev',
			},

			breakpoints: {
				1250: {
					slidesPerView: 'auto',
					centeredSlides: true,
					spaceBetween: 120
				}
			},
			on: {
				slideChange: function (el) {
					console.log('1');
					$('.swiper-slide').each(function () {
						var youtubePlayer = $(this).find('iframe').get(0);
						if (youtubePlayer) {
							youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
						}
					});
				},
			},
		});

	}

	if (sertificatesSliderInit.length > 0) {

		var sertificatesSlider = new Swiper(sertificatesSliderInit, {
			loop: true,
			slidesPerView: 1,
			centeredSlides: false,
			spaceBetween: 0,
			pagination: {
				el: '.js-sertificates-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-sertificates-slider-btn-next',
				prevEl: '.js-sertificates-slider-btn-prev',
			},

			breakpoints: {
				1400: {
					slidesPerView: 5,
				},
				1000: {
					slidesPerView: 4,
				},
				700: {
					slidesPerView: 3,
				},
				480: {
					slidesPerView: 2,
				}
			}
		});

	}

	if (aboutClinicSliderInit.length > 0) {
		var aboutClinicSlider = new Swiper(aboutClinicSliderInit, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.js-about-clinic-slider-btn-next',
				prevEl: '.js-about-clinic-slider-btn-prev',
			},
		});
	}

	if (gallerySliderInit.length > 0) {

		var gallerySlider = new Swiper(gallerySliderInit, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				el: '.js-gallery-slider-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.js-gallery-slider-btn-next',
				prevEl: '.js-gallery-slider-btn-prev',
			},
			breakpoints: {
				1050: {
					slidesPerView: 3
				},
				620: {
					slidesPerView: 2
				}
			}

			
		});

	}




	$('[data-fancybox]').fancybox();

	$('.js-tab-content').not(":first").hide();
	$('.js-tab-btn:first').addClass('is-active');

	$('.js-tab-btn').on('click', function(e) {
		e.preventDefault();
		$('.js-tab-content').removeClass('is-active');
		$('.js-tab-btn').removeClass('is-active').eq($(this).index()).addClass('is-active');
		$('.js-tab-content').hide().eq($(this).index()).fadeIn().addClass('is-active');
	}).eq(0).addClass('is-active');

	$('.js-toggle-accordion-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');
		$(this).parents('.accordion-item').toggleClass('is-active');

		$(this).parents('.accordion-item').find('.accordion-body').stop().slideToggle(150);
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
			url: "/wp-content/themes/plasma-theme/mail.php", //Change
			data: that.serialize()
		}).done(function() {
			that.trigger("reset");
			window.location.href ='/spasibo';
		});

	});
	// ========= =========== =========== ===========



	function initTelMask() {
		$('input[type=tel]').mask('+7 (999) 999-99-99');
	}

	initTelMask();

	function initTheia() {
		$('.page-service, .aside-page').theiaStickySidebar({
			'additionalMarginTop': additionalMarginTop,
			'disableOn': false
		});
	}

	if (html < 1251) {
		var additionalMarginTop = 110;

	} else {
		var additionalMarginTop = 20;
	}

	initTheia();

	

	






});
