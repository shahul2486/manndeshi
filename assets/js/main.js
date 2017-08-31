(function ($) {
    "use strict";

    //Mobile menu
    //==========================
    //  Main menu
    var MainLiDrop = $('.mainmenu li.dropdown');
    MainLiDrop.append('<div class="dropdown-btn"></div>');
    //Dropdown Button
    var MainLiDDbtn = $('.mainmenu li.dropdown .dropdown-btn');
    MainLiDDbtn.on('click', function () {
        $(this).toggleClass('submenu-icon');
        $(this).prev('ul').slideToggle(400);
    });

    //sticky
    //==========================
    var SActive = $('.sticky-active');
    SActive.sticky({
        topSpacing: 0
    });

    //menu a active jquery
    //==============================
    var pgurl = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1);
    var aActive = $('ul li a');
    aActive.each(function () {
        if ($(this).attr("href") === pgurl || $(this).attr("href") === '')
            $(this).addClass("active");
    })

    /*
     bxSlider active jquery
    ================================== */
    var SliDEONE = $('#slider-one');
    SliDEONE.bxSlider({
        mode: 'fade',
        pager: false,
        speed: 1000,
        nextText: '<i class="zmdi zmdi-long-arrow-right"></i>',
        prevText: '<i class="zmdi zmdi-long-arrow-left"></i>'
    });

    /*
     Count Up active jquery
    ================================== */
    var CounT = $('.counter');
    CounT.counterUp({
        delay: 50,
        time: 3000
    });

    /*
    	Slick Carousel as Nav
    ===================================*/
    var ONEIt = $('.one-item');
    var ONEItNOtF = $('.one-item-not-fade');
    var ThrEEIT = $('.three-item');
    ONEIt.slick({
        dots: false,
        arrows: true,
        fade: true,
        prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
        nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
    });

    ONEItNOtF.slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    ThrEEIT.slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
        nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 969,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
		]
    });

    //center active
    var Center_Activ = $('.center-active');
    Center_Activ.slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        prevArrow: '<i class="prev zmdi zmdi-chevron-left"></i>',
        nextArrow: '<i class="next zmdi zmdi-chevron-right"></i>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
		},
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
		}
		]
    });
    /*
     fancybox Popup
    ================================ */
    var FancYB = $('.fancybox');
    FancYB.fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',

        prevEffect: 'fade',
        prevSpeed: 550,
        nextEffect: 'fade',
        nextSpeed: 550,

        closeBtn: true,

        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        },
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    FancYB.attr('rel', 'gallery');
    /*
     youtube video popup
    ================================ */
    var VarIou = $(".various");
    VarIou.fancybox({
        'padding': 0,
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
    });

    /*
    wow js
    ================================== */
    var wow = new WOW({
        mobile: false, // trigger animations on mobile devices (default is true)
    });
    wow.init();
    /*
     isotope menu
    ================================ */
    var ProjMli = $('.project-menu li');
    var ProjGrid = $('.project-grid');
    ProjMli.on('click', function () {
        ProjMli.removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr('data-filter');
        ProjGrid.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
    });

    /*
     scrollUp
    ================================ */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*
    CONTACT FORM VALIDATIONS SETTINGS
    ========================================*/
    var CTForm = $('#contact_form');
    CTForm.validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
        highlight: function (element) {
            $(element)
                .text('').addClass('error')
        },
        success: function (element) {
            element
                .text('').addClass('valid')
        }
    });

    /*
    CONTACT FORM SCRIPT
    ========================================*/
    var CTSubmit = $('#contact_submit');
    CTForm.submit(function () {
        // submit the form
        if ($(this).valid()) {
            CTSubmit.button('loading');
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactphone: $('#contact_phone').val(),
                    contactwebsite: $('#contact_website').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function () {
                    CTSubmit.button('reset');
                    CTSubmit.button('complete');
                },
                error: function () {
                    CTSubmit.button('reset');
                    CTSubmit.button('error');
                }
            });
            // return false to prevent normal browser submit and page navigation 
        } else {
            CTSubmit.button('reset')
        }
        return false;
    });
    /*
     Trigger ColorSwitcher
    ==================================== */
    var SwitchButton = $('.switcher-button');
    SwitchButton.on('click', function () {
        var switchBody = $('.switcher-body');
        switchBody.trigger('click')
        $(this).toggleClass('btnclose');
        switchBody.toggleClass('sidebarmain');
        return false;
    });

    var laYoutBox = $('.layout-boxed');
    var pattWrap = $('.pattren-wrap a');
    var bgWrap = $('.background-wrap a');
    var mainWrapper = $('.main-wrapper');
    laYoutBox.add(pattWrap).add(bgWrap).on('click', function () {
        mainWrapper.addClass('wrapper-boxed');
        mainWrapper.removeClass('wrapper-wide');

        var IsoGriddoload3 = $('.project-grid');
        IsoGriddoload3.isotope('layout');
    });

    var layouTWide = $('.layout-wide');
    layouTWide.on('click', function () {
        mainWrapper.addClass('wrapper-wide');
        mainWrapper.removeClass('wrapper-boxed');

        var IsoGriddoload3 = $('.project-grid');
        IsoGriddoload3.isotope('layout');
    });
    /*
     Loding Bar
    ==================================== */
    jQuery(window).on('load', function () {
        var preeLoad = $('#loading');
        preeLoad.fadeOut(1000);

        /* Isotope grid
        ---------------*/
        var IsoGriddoload = $('.project-grid');
        IsoGriddoload.isotope({
            itemSelector: '.grid-item',
            masonryHorizontal: {
                rowHeight: 100
            }
        });
    });

/*
bootstrap multilevel dropdown menus with responsive
====================================================*/
			$(document).ready(function(){
				$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
					event.preventDefault(); 
					event.stopPropagation(); 
					$(this).parent().siblings().removeClass('open');
					$(this).parent().toggleClass('open');
				});
			});
    
})(jQuery);
