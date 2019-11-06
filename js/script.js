/* ----------------- Start JS Document ----------------- */

var $ = jQuery.noConflict();

// Page Loader
$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();
});

$(document).ready(function ($) {
	"use strict";

	/*
	* Imprimir (debe incluir en el html a jquery_printarea.js)
	*/
		$('.link-print-generico').click(function() {
			var divimprimir = $(this).data('divimprimir');
			$('#' + divimprimir).printArea();
		});

	/*-------------------------------------------------*/
	/*  Anular Submit
	/*-------------------------------------------------*/
	$('form').keypress(function(e) {
		if(e.keyCode == 13)
		{
			return false;
		}
	});

	$('.form-enable-enter').unbind('keypress');

	/*--------------------------------------------------*/
	/*  TextBox solo numericos
	/*--------------------------------------------------*/
	$('.only-numbers').keypress(function(e) {
		if(event.charCode >= 48 && event.charCode <= 57)
	      	return true;
	    return false; 
	});
	
	/*----------------------------------------------------*/
	/*	Hidder Header
	/*----------------------------------------------------*/
	
	var headerEle = function(){
		var $headerHeight = $('header').height();
		$('.hidden-header').css({ 'height' : $headerHeight  + "px" });
	};
	
	$(window).load(function () {
	  headerEle();
	});
	
	$(window).resize(function () {
	   headerEle();
	});
	
    /*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    
    $('.skill-shortcode').appear(function() {
  		$('.progress').each(function(){ 
    		$('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
  		});
	},{accY: -100});
	
    /*--------------------------------------------------*/
    /* Counter
    /*--------------------------------------------------*/
    
    $('.timer').countTo();

    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{accY: -100});
    
	/*----------------------------------------------------*/
	/*	Nice-Scroll
	/*----------------------------------------------------*/
	
	/*$("html").niceScroll({
		scrollspeed: 100,
		mousescrollstep: 38,
		cursorwidth: 5,
		cursorborder: 0,
		cursorcolor: '#333',
		autohidemode: false,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});*/
		
	/*----------------------------------------------------*/
	/*	Nav Menu & Search
	/*----------------------------------------------------*/
	
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
	
	$('.show-search').click(function() {
		$('.search-form').fadeIn(300);
		$('.search-form input').focus();
	});
	$('.search-form input').blur(function() {
		$('.search-form').fadeOut(300);
	});
	
	/*----------------------------------------------------*/
	/*	Back Top Link
	/*----------------------------------------------------*/
	
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })
	
	/*----------------------------------------------------*/
	/*	Sliders & Carousel
	/*----------------------------------------------------*/
	
	////------- Touch Slider
	var time = 4.4,
		$progressBar,
		$bar,
		$elem,
		isPause,
		tick,
		percentTime;
	$('.touch-slider').each(function(){
		var owl = jQuery(this),
			sliderNav = $(this).attr('data-slider-navigation'),
			sliderPag = $(this).attr('data-slider-pagination');
			
		if ( sliderNav == 'false' || sliderNav == '0' ) {
			var returnSliderNav = false
		}else {
			var returnSliderNav = true
		}
		
		if ( sliderPag == 'true' || sliderPag == '1' ) {
			var returnSliderPag = true
		}else {
			var returnSliderPag = false
		}
		
		owl.owlCarousel({
			navigation : returnSliderNav,
			pagination: returnSliderPag,
			slideSpeed : 400,
			paginationSpeed : 400,
			lazyLoad : true,
			singleItem: true,
			autoHeight : true,
			autoPlay: true,
			stopOnHover: true,
			transitionStyle : "fade",
			startDragging : pauseOnDragging
		});
		
	});

    function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
    }
	
    function buildProgressBar(){
		$progressBar = $("<div>",{
			id:"progressBar"
		});
		$bar = $("<div>",{
			id:"bar"
		});
		$progressBar.append($bar).prependTo($elem);
    }
	
	function start() {
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
    };
 
    function interval() {
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+"%"
			});
			if(percentTime >= 100){
				$elem.trigger('owl.next')
			}
		}
    }
	
    function pauseOnDragging(){
      isPause = true;
    }
	
    function moved(){
      clearTimeout(tick);
      start();
    }
	
	////------- Projects Carousel
	$(".projects-carousel-paquetes").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 800,
		stopOnHover: true,
    	autoPlay: 5000,
    	items : 2,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	$(".projects-carousel-inicio").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 800,
		stopOnHover: true,
    	autoPlay: 5000,
    	items : 2,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	$(".projects-carousel-aviso").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 100,
		stopOnHover: true,
    	autoPlay: 10000,
    	items : 1,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	
	////------- Testimonials Carousel
	$(".testimonials-carousel").owlCarousel({
		navigation : true,
		pagination: false,
		slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:true,
		autoHeight : true,
		transitionStyle : "fade"
	});
	
	////------- Custom Carousel
/* 	$('.custom-carousel').each(function(){
		var owl = jQuery(this),
			itemsNum = $(this).attr('data-appeared-items'),
			sliderNavigation = $(this).attr('data-navigation');
			
		if ( sliderNavigation == 'false' || sliderNavigation == '0' ) {
			var returnSliderNavigation = false
		}else {
			var returnSliderNavigation = true
		}
		if( itemsNum == 1) {
			var deskitemsNum = 1;
			var desksmallitemsNum = 1;
			var tabletitemsNum = 1;
		} 
		else if (itemsNum >= 2 && itemsNum < 4) {
			var deskitemsNum = itemsNum;
			var desksmallitemsNum = itemsNum - 1;
			var tabletitemsNum = itemsNum - 1;
		} 
		else if (itemsNum >= 4 && itemsNum < 8) {
			var deskitemsNum = itemsNum -1;
			var desksmallitemsNum = itemsNum - 2;
			var tabletitemsNum = itemsNum - 3;
		} 
		else {
			var deskitemsNum = itemsNum -3;
			var desksmallitemsNum = itemsNum - 6;
			var tabletitemsNum = itemsNum - 8;
		}
		owl.owlCarousel({
			slideSpeed : 300,
			stopOnHover: true,
			autoPlay: false,
			navigation : returnSliderNavigation,
			pagination: false,
			lazyLoad : true,
			items : itemsNum,
			itemsDesktop : [1000,deskitemsNum],
			itemsDesktopSmall : [900,desksmallitemsNum],
			itemsTablet: [600,tabletitemsNum],
			itemsMobile : false,
			transitionStyle : "goDown",
		});
	}); */
	
    ////------- Testimonials Carousel
	$(".fullwidth-projects-carousel").owlCarousel({
		navigation : false,
		pagination: false,
		slideSpeed : 400,
		stopOnHover: true,
    	autoPlay: 3000,
    	items : 5,
    	itemsDesktopSmall : [900,3],
		itemsTablet: [600,2],
		itemsMobile : [479, 1]
	});
	$(".aceptar-notificacion").click(function() {
		var index = $(this).data('index');
		var usuario = $(this).data('usuario');
		var notificacion = $(this).data('notificacion');
		var abs = $('#url_abs_global').val();
		var numero_notificaciones = $('#cantidad_notificaciones').html();
		numero_notificaciones = Number(numero_notificaciones) - 1;
		if (numero_notificaciones > 0) {
			$('#cantidad_notificaciones').html(numero_notificaciones.toString()) ;
		} else {
			$('#cantidad_notificaciones').remove();
			$('#sin_notificacion').removeClass('hidden');
		}
		$('#notificacion-'+ index).slideUp();
		$.ajax({
			url : abs + '/notificacion_leida/'+usuario+ '/'+ notificacion,
			data : '',
		 	type : 'GET',
		 	success : function(data) {
			},
		 	error : function(xhr, status) {
			}
		});
	});
	/*----------------------------------------------------*/
	/*	Tabs
	/*----------------------------------------------------*/
	
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	
	/*----------------------------------------------------*/
	/*	Css3 Transition
	/*----------------------------------------------------*/
	
	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});
	
	/*----------------------------------------------------*/
	/*	Pie Charts
	/*----------------------------------------------------*/
	
	var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';
		
	function initPieCharts() {
		var chart = $('.' + pieChartClass);
		chart.each(function() {
			$(this).appear(function() {
				var $this = $(this),
					chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
					chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
				if( !$this.hasClass(pieChartLoadedClass) ) {
					$this.easyPieChart({
						animate: 2000,
						size: chartBarWidth,
						lineWidth: 2,
						scaleColor: false,
						trackColor: "#eee",
						barColor: chartBarColor,
					}).addClass(pieChartLoadedClass);
				}
			});
		});
	}
	initPieCharts();
	
	/*----------------------------------------------------*/
	/*	Animation Progress Bars
	/*----------------------------------------------------*/
	
	$("[data-progress-animation]").each(function() {
		
		var $this = $(this);
		
		$this.appear(function() {
			
			var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
			
			if(delay > 1) $this.css("animation-delay", delay + "ms");
			
			setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);

		}, {accX: 0, accY: -50});

	});
	
	/*----------------------------------------------------*/
	/*	Milestone Counter
	/*----------------------------------------------------*/
	
	jQuery('.milestone-block').each(function() {
		jQuery(this).appear(function() {
			var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
			jQuery(this).find('.milestone-number').countTo({
				from: 0,
				to: $endNum,
				speed: 4000,
				refreshInterval: 60,
			});
		},{accX: 0, accY: 0});
	});
	
	/*----------------------------------------------------*/
	/*	Nivo Lightbox
	/*----------------------------------------------------*/
	
	$('.lightbox').nivoLightbox({
		effect: 'fadeScale',
		keyboardNav: true,
		errorMessage: 'The requested content cannot be loaded. Please try again later.'
	});
	
	/*----------------------------------------------------*/
	/*	Change Slider Nav Icons
	/*----------------------------------------------------*/
	
	$('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
	$('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
	$('.read-more').append('<i class="fa fa-angle-right"></i>');
	
	/*----------------------------------------------------*/
	/*	Tooltips & Fit Vids & Parallax & Text Animations
	/*----------------------------------------------------*/
	
	$("body").fitVids();
	
	$('.itl-tooltip').tooltip();
	
	$('.bg-parallax').each(function() {
		$(this).parallax("30%", 0.2);
	});
	
	$('.tlt').textillate({
		loop: true,
		in: {
			effect: 'fadeInUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
		out: {
			effect: 'fadeOutUp',
			delayScale: 2,
			delay: 50,
			sync: false,
			shuffle: false,
			reverse: true,
		},
	});
	
	/*----------------------------------------------------*/
	/*	Sticky Header
	/*----------------------------------------------------*/
	
	(function() {
		
			var docElem = document.documentElement,
				didScroll = false,
				changeHeaderOn = 100;
				document.querySelector( 'header' );
				
			function init() {
				window.addEventListener( 'scroll', function() {
					if( !didScroll ) {
						didScroll = true;
						setTimeout( scrollPage, 250 );
					}
				}, false );
			}
			
			function scrollPage() {
				var sy = scrollY();
				if ( sy >= changeHeaderOn ) {
					if(!$($('.top-bar')[0]).attr('id'))
					{
						$('.top-bar').slideUp(300);
					}
					$("header").addClass("fixed-header");
					$('.navbar-brand').css({ 'padding-top' : 5 + "px", 'padding-bottom' : 5 + "px" });
					
					if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
					}else{
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 23 + "px", 'padding-bottom' : 23 + "px" })
						$('.search-side').css({ 'margin-top' : -7 + "px" });
					};
					
				}
				else {
					if(!$($('.top-bar')[0]).attr('id'))
					{
						$('.top-bar').slideDown(300);
					}
					$("header").removeClass("fixed-header");
					//$('.navbar-brand').css({ 'padding-top' : 7 + "px", 'padding-bottom' : 7 + "px" });
					
					if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479 ){
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 0 + "px", 'padding-bottom' : 0 + "px" })
					}else{
						$('.navbar-default .navbar-nav > li > a').css({ 'padding-top' : 22 + "px", 'padding-bottom' : 22 + "px" })
						$('.search-side').css({ 'margin-top' : 0  + "px" });
					};
					
				}
				didScroll = false;
			}
			
			function scrollY() {
				return window.pageYOffset || docElem.scrollTop;
			}
			
			init();
				
		})();
	});


/*----------------------------------------------------*/
/*	Portfolio Isotope
/*----------------------------------------------------*/

jQuery(window).load(function(){
	
	var $container = $('#portfolio');
	$container.isotope({
		layoutMode : 'masonry',
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('.portfolio-filter ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('.portfolio-filter ul'),
	    $optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		if ( $this.hasClass('selected') ) { return false; }
		var $optionSet = $this.parents('.portfolio-filter ul');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected'); 
	});
	
});
/* ----------------- End JS Document ----------------- */
