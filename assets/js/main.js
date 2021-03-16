(function ($) {
    "use strict";

    // init Isotope
    var $grid = $('.project-list').isotope({
        // options
    });
    // filter items on button click
    $('.project-titles').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // filter items on button click active
        $('.project-titles').on('click', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });

    });


    // Preloader
    $(window).load(function() {
        $(".project-list").isotope();
        $(".preloader").fadeOut(500);

    });

    // active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
    });
    
    $('.main-menu').slicknav({
        prependTo: '.mobile-menu'
    });

    // Contact form validation
    $("#contact-form").validate({
        rules: {
            name: "required",
            email: "required",
            subject: "required",
            message: "required",
        }
    });

    //  Scrollup
    $.scrollUp({
        scrollName: 'scrollUp',
        topDistance: '300', 
        topSpeed: 300, 
        animation: 'fade',
        animationInSpeed: 200, 
        animationOutSpeed: 200, 
        scrollText: '<i class="fa fa-angle-up"></i>', 
        activeOverlay: false, 
    });







    
}) (jQuery);