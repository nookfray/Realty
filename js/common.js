$(document).ready(function() {

	$(function() {
        $('.lazy').lazy({
			effect: "fadeIn",
			effectTime: 400,
			threshold: 0
        });
    });


	// SELECTSTYLE
	$('.mod_select').niceSelect();


	// SANDWICH ANIMATION
	$(".main_header .toggle_menu").click(function() {
		$(this).toggleClass("active");
		$(".main_header .nav_block").slideToggle().toggleClass("active");
	});


	// PROPOSITIONS SLIDER
	$('.propositions_slider').each(function() {
		var propositionSwiper = new Swiper(this, {
			slidesPerView: "auto",
			spaceBetween: 0,
			speed: 400,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			lazy: {
				loadPrevNext: true,
			},
		});
	});

	$(".item_thumb").brazzersCarousel();


	// SANDWICH ANIMATION
	$(".show_tel").click(function() {
		$(this).addClass("active");
	});


	// ADVANCED SEARCH ACTIVE
	$(".search_form .advanced_btn").click(function() {
		$(".search_form").removeClass("active");
		$(".advanced_search_form").addClass("active");
		if($(window).width() < 768) {
			$("body").addClass("overflow");
		}
	});
	$(".advanced_search_form .close").click(function() {
		$(".advanced_search_form").removeClass("active");
		$(".search_form").addClass("active");
		$("body").removeClass("overflow");
	});


	// PHONE INPUT MASK
	$(function(){
		$("input[name='tel']").mask("+7 (999) 999 - 99 - 99");
	});


	// NEWS SLIDER
	$('.news_slider').each(function() {
		var newsSwiper = new Swiper(this, {
			slidesPerView: "auto",
			spaceBetween: 0,
			speed: 400,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			lazy: {
				loadPrevNext: true,
			},
		});
	});


	$('.quantity_input').keyup(function(){
		$(this).val(String($(this).val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
	});


	$('#dometro').on('keyup',function(){
		var $this = $(this),
		val = $this.val();
		if(val.length >= 1){
			$(this).addClass("active");
		}else {
			$(this).removeClass("active");
		}
	});

	$(".advanced_search_form .more_params").click(function() {
		($(this).text() === "Меньше параметров") ? $(this).text("Больше параметров") : $(this).text("Меньше параметров");
		$(".advanced_search_form .dop_params").slideToggle(200);
		
	});



	// MULTISELECT
	$(".multi_select .select_btn").click(function() {
		$(this).parent().toggleClass("open");
	});

	$(document).mouseup(function (e) {
		if ($(".multi_select", this).hasClass("open")) {
			var container = $(".multi_select.open");
			if (container.has(e.target).length === 0){
				$(".multi_select").removeClass("open");
			}
		}
	});


	// MULTIPLE SELECT
	function checkedBoxes() {
		$('.multi_select').each(function() {
			checkbox = $(this).find("input:checked").length;
			$(this).find(".quantity").text(checkbox);
			if (checkbox > 0) {
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
	};

	$('.multi_select').each(function() {
		checkedBoxes();
		checkbox = $(this).find("input:checked").length;
		$(this).find(".text").text($(this).find("input:checked").val());
		$('.multi_select .checkbox_item input').change(function() {
			checkedBoxes();
			checkbox = $(this).parents(".multi_select").find("input:checked").length;
			if($(this).is(':checked')) {
				$(this).parents(".multi_select").find(".text").text($(this).siblings("span").text());
			} else if(checkbox > 0) {
				$(this).parents(".multi_select").find(".text").text($(this).parents(".multi_select").find("input:checked").val());
			} else {
				$(this).parents(".multi_select").find(".text").text("...");
			}
		});
	});


	function cityList() {
		$('.city_list').each(function() {
			checkbox = $(this).find("input:checked").length;
			$('#mkad_modal_btn .quantity').text(checkbox);
			if (checkbox > 0) {
				$('#mkad_modal_btn').addClass("active");
			} else {
				$('#mkad_modal_btn').removeClass("active");
			}
		});
	};
	cityList();
	


	$('.city_list li label input').change(function() {
		checkbox = $(".city_list").find("input:checked").length;
		$('#mkad_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#mkad_modal_btn').addClass("active");
		} else {
			$('#mkad_modal_btn').removeClass("active");
		}
	});
	$(".clear_city_modal").click(function() {
		$('#mkad_modal_btn').removeClass("active");
		$('#mkad_modal_btn .quantity').text(0);
		$('.city_list li label input').prop("checked", false);
	});
	$(".city_list .title_li").click(function() {
		var checkBoxes = $(this).parent("ul").find("input");
		(checkBoxes.prop("checked")==true)?checkBoxes.prop("checked", false):checkBoxes.prop("checked", true);   
		checkbox = $(".city_list").find("input:checked").length;
		$('#mkad_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#mkad_modal_btn').addClass("active");
		} else {
			$('#mkad_modal_btn').removeClass("active");
		}
	});
	



	$('.disctict_list li label input').change(function() {
		checkbox = $(".disctict_list").find("input:checked").length;
		$('#district_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#district_modal_btn').addClass("active");
		} else {
			$('#district_modal_btn').removeClass("active");
		}
	});
	$(".clear_disctict_modal").click(function() {
		$('#district_modal_btn').removeClass("active");
		$('#district_modal_btn .quantity').text(0);
		$('.disctict_list li label input').prop("checked", false);
	});
	$(".disctict_list .title_li").click(function() {
		var checkBoxes = $(this).parent("ul").find("input");
		(checkBoxes.prop("checked")==true)?checkBoxes.prop("checked", false):checkBoxes.prop("checked", true);   
		checkbox = $(".disctict_list").find("input:checked").length;
		$('#district_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#district_modal_btn').addClass("active");
		} else {
			$('#district_modal_btn').removeClass("active");
		}
	});




	$('.metro_list li label input').change(function() {
		checkbox = $(".metro_list").find("input:checked").length;
		$('#metro_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#metro_modal_btn').addClass("active");
		} else {
			$('#metro_modal_btn').removeClass("active");
		}
	});
	$(".clear_metro_modal").click(function() {
		$('#metro_modal_btn').removeClass("active");
		$('#metro_modal_btn .quantity').text(0);
		$('.metro_list li label input').prop("checked", false);
	});
	$(".metro_list .title_li").click(function() {
		var checkBoxes = $(this).parent("ul").find("input");
		(checkBoxes.prop("checked")==true)?checkBoxes.prop("checked", false):checkBoxes.prop("checked", true);   
		checkbox = $(".metro_list").find("input:checked").length;
		$('#metro_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#metro_modal_btn').addClass("active");
		} else {
			$('#metro_modal_btn').removeClass("active");
		}
	});




	$('.road_list li label input').change(function() {
		checkbox = $(".road_list").find("input:checked").length;
		$('#road_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#road_modal_btn').addClass("active");
		} else {
			$('#road_modal_btn').removeClass("active");
		}
	});
	$(".clear_road_modal").click(function() {
		$('#road_modal_btn').removeClass("active");
		$('#road_modal_btn .quantity').text(0);
		$('.road_list li label input').prop("checked", false);
	});
	$(".road_list .title_li").click(function() {
		var checkBoxes = $(this).parent("ul").find("input");
		(checkBoxes.prop("checked")==true)?checkBoxes.prop("checked", false):checkBoxes.prop("checked", true);   
		checkbox = $(".road_list").find("input:checked").length;
		$('#road_modal_btn .quantity').text(checkbox);
		if (checkbox > 0) {
			$('#road_modal_btn').addClass("active");
		} else {
			$('#road_modal_btn').removeClass("active");
		}
	});


	


	$('.near_moscow').change(function() {
		if($(".near_moscow").is(':checked')) {
			$('.mkad').addClass("active");
		} else {
			$('.mkad').removeClass("active");
		}
	});




	// MAIN FORM
	$('.main_form').each(function() {
		$(this).validate({
			ignore: [],
			rules:{
				name:{
					required: true,
				},
				tel:{
					required: true,
				},
				email: {
					email: true,
					maxlength: 120,
				},
			},
			messages:{
				name:{
					required: "Поле не заполнено",
				},
				tel:{
					required: "Поле не заполнено",
				},
				email: {
					required: "Пожалуйста введите верный email адрес.",
					email: "Пожалуйста введите верный email адрес.",
					maxlength: "Максимум 120 символов."
				},
			},
			errorPlacement: function(error, element) {
				if (element.is('select:hidden')) {
					error.insertAfter(element.next('.nice-select'));
				} else {
					error.insertAfter(element);
				}
			},
			submitHandler: function(form) {
				$.ajax({
					url: "", // путь к обработчику
					type: "POST",
					data: $(form).serialize(),
					success: function(response) {
						$('.callback_form').trigger('reset');
						$('.modal').modal("hide");
						setTimeout(function(){$('#thanks_modal').modal("show")}, 500); 
					}            
				});
			}
		});
	});


	$('form .mod_select').on('change', function() {
		$(this).valid();
	})







});


