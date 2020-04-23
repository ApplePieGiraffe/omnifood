$(document).ready(function() {
    
//    sticky navigation
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
       }
    }, {
        offset: '60px;'
    });
    
//    fancy scrolly animations
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
//    mobile navigation
    
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon');
       nav.slideToggle(200);
       if (icon.hasClass('ion-navicon')) {
           icon.addClass('ion-android-close');
           icon.removeClass('ion-navicon')
       } else {
           icon.addClass('ion-navicon');
           icon.removeClass('ion-android-close')
       }
    });
    
});
