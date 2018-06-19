$(function() {
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.mnu-toggle').click(function(){
		$(".mob-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});

	$(".mob-mnu li a").click(function(){
		$(".mob-mnu").slideUp();
		$(".sandwich").removeClass("active");
	});

	$(".top-mnu li a[href*='#'], .mob-mnu li a[href*='#']").mPageScroll2id();

	$(".callback-btn").click(function(){
		$(".modal-callback").fadeIn(400);
		$(".bg").fadeIn(300);
	});

	$('.close').click(function(){
		$(".modal-callback, .modal-catalog, .modal-complete").fadeOut(300);
		$('.bg').fadeOut(400);
	});

	$('.ok').click(function(){
		$(".modal-complete").fadeOut(300);
		$('.bg').fadeOut(400);
	});

	$('.bg').click(function(){
		$(".modal-callback, .modal-complete, .modal-catalog").fadeOut(300);
		$('.bg').fadeOut(400);
	});

	$(".maskphone").mask("+7 999 999 99 99");

	$("#header-carousel").owlCarousel({
		items : 1,
		singleItem: true,
		autoPlay: 3000,
		slideSpeed : 300,
		paginationSpeed : 400,
		transitionStyle:"fade",
		touchDrag: false,
		mouseDrag: false,
		responsiveBaseWidth: "carousel"
	});

	var owlStuff = $("#carousel-stuff");
	owlStuff.owlCarousel({
		items : 3,
		slideSpeed : 300,
		paginationSpeed : 400,
		itemsDesktopSmall: [1200,3],
		itemsTablet: [992,3],
		itemsTablet: [768,2],
		itemsMobile: [320,1]
	});
	$(".next-button").click(function(){
		owlStuff.trigger("owl.next");
	});
	$(".prev-button").click(function(){
		owlStuff.trigger("owl.prev");
	});

	$("#carousel-partners").owlCarousel({
		items: 3,
		autoPlay: 2500,
		slideSpeed: 500,
		paginationSpeed: 500,
		itemsDesktopSmall: [1200,3],
		itemsTablet: [992,3],
		itemsTablet: [768,2],
		itemsMobile: [320,1]
	});

	$('.fancybox').fancybox();

	$('.topper').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	// $("form").submit(function() {
	// 	var th = $(this);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: th.serialize()
	// 	}).done(function() {
	// 		$(".modal").fadeOut(200);
	// 		$(".modal-complete, .bg").fadeIn(250);
	// 			if(th[0].id == 'callbackForm') {
	// 				$(".modal-complete .form-header").html('Спасибо за заявку! Мы свяжемся с вами по указанному телефону в ближайшее время!');
	// 			} else {
	// 				$(".modal-complete .form-header").html('Спасибо за заявку! На ваш e-mail мы отправили письмо с ссылкой на каталог!');
	// 			}
	// 			setTimeout(function() {
	// 				th.trigger("reset");
	// 			}, 1000);
	// 		});
	// 	return false;
	// });
	var validPhone = false;
	var validEmail = false;
	var phoneRegexp = /\+7 \d{3} \d{3} \d{2} \d{2}/;
	var emailRegexp = /.+@{0,1}.+\..+/i;

	function validate(input) {
		for(var i=0; i<input.length; i++) {
			if(input[i].type == 'email') {
				if(!emailRegexp.test(input.val())) {
					input.removeClass("has-success").addClass("has-error");
					validEmail = false;
				} else {
					input.removeClass("has-error").addClass("has-success");
					validEmail = true;
				}
				console.log(validEmail);
			}

			if(input[i].type == 'tel') {
				if(!phoneRegexp.test(input.val())) {
					input.removeClass("has-success").addClass("has-error");
					validPhone = false;
				} else {
					input.removeClass("has-error").addClass("has-success");
					validPhone = true;
				}
				console.log(validPhone);
			}
		}

		// if(input.val() == "") {
		// 	// $(".emailBlock").append("<span class='glyphicon glyphicon-remove form-control-feedback' aria-hidden='true'></span>");
		// 	// $(".emailBlock .glyphicon-ok").remove();
		// } else {
		// 	// $(".emailBlock").append("<span class='glyphicon glyphicon-ok form-control-feedback' aria-hidden='true'></span>");
		// 	// $(".emailBlock .glyphicon-remove").remove();
		// }
	}





	$("form").submit(function(e) {
		e.preventDefault();
		var th = $(this);
		// validate(th.find('.input-field'));

		// if(th.find('input[type=tel]')) {
		// 	var input = th.find('input[type=tel]');
		// 	if(!phoneRegexp.test(input.val())) {
		// 		input.removeClass("has-success").addClass("has-error");
		// 		validPhone = false;
		// 	} else {
		// 		input.removeClass("has-error").addClass("has-success");
		// 		validPhone = true;
		// 	}
		// 	input.on('input', function(e) {
		// 		if(!phoneRegexp.test(input.val())) {
		// 			input.removeClass("has-success").addClass("has-error");
		// 			validPhone = false;
		// 		} else {
		// 			input.removeClass("has-error").addClass("has-success");
		// 			validPhone = true;
		// 		}
		// 		console.log(validPhone);
		// 	});
		// }

		if(th.find('input[type=tel]')) {
			var inputPh = th.find('input[type=tel]');
			if(!phoneRegexp.test(inputPh.val())) {
				inputPh.removeClass("has-success").addClass("has-error");
				validPhone = false;
			} else {
				inputPh.removeClass("has-error").addClass("has-success");
				validPhone = true;
			}

			inputPh.on('change', function() {
				if(!phoneRegexp.test(inputPh.val())) {
					inputPh.removeClass("has-success").addClass("has-error");
					validPhone = false;
				} else {
					inputPh.removeClass("has-error").addClass("has-success");
					validPhone = true;
				}
			});
		}

	if(th.find('input[type=email]')) {
		var input = th.find('input[type=email]');
		if(!emailRegexp.test(input.val())) {
			input.removeClass("has-success").addClass("has-error");
			validEmail = false;
		} else {
			input.removeClass("has-error").addClass("has-success");
			validEmail = true;
		}

		input.on('input', function() {
			if(!emailRegexp.test($(this).val())) {
				$(this).removeClass("has-success").addClass("has-error");
				validEmail = false;
			} else {
				$(this).removeClass("has-error").addClass("has-success");
				validEmail = true;
			}
		});
	}

		if(th[0].id === 'callbackForm' && validPhone === true) {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				$(".modal").fadeOut(200);
				$(".modal-complete, .bg").fadeIn(250);
				if(th[0].id == 'callbackForm') {
					$(".modal-complete .form-header").html('Спасибо за заявку! Мы свяжемся с вами по указанному телефону в ближайшее время!');
				} else {
					$(".modal-complete .form-header").html('Спасибо за заявку! На ваш e-mail мы отправили письмо с ссылкой на каталог!');
				}
				setTimeout(function() {
						th.trigger("reset");
						th.find('input').removeClass('has-success');
					}, 1000);
				});
			}
			if (validEmail === true && validPhone === true) {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: th.serialize()
				}).done(function() {
					$(".modal").fadeOut(200);
					$(".modal-complete, .bg").fadeIn(250);
					if(th[0].id == 'callbackForm') {
						$(".modal-complete .form-header").html('Спасибо за заявку! Мы свяжемся с вами по указанному телефону в ближайшее время!');
					} else {
						$(".modal-complete .form-header").html('Спасибо за заявку! На ваш e-mail мы отправили письмо с ссылкой на каталог!');
					}
					setTimeout(function() {
						th.trigger("reset");
						th.find('input').removeClass('has-success');
					}, 1000);
				});
			}
		return false;
	});
	
});

$(window).scroll(function() {
	if($(this).scrollTop() > 800) {
		$('.topper').fadeIn();
	} else {
		$('.topper').fadeOut();
	}

	if($(this).scrollTop() > 80) {
		$(".mob-mnu").slideUp();
		$(".sandwich").removeClass("active");
	}
});
