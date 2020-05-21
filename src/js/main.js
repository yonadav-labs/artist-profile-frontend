$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 900) {
            $('.header-sticky').addClass('fadeInDown');
            $('.header-sticky').removeClass('fadeOutUp');
            $('.header-sticky').addClass('animated');
        } else {
            $('.header-sticky').addClass('fadeOutUp');
            $('.header-sticky').removeClass('fadeInUp');
            $('.header-sticky').removeClass('animated');
        }
    });
});


$(document).ready(function () {
    $(window).scroll(function () {
        $('.parallax-container').each(function (i) {
            var scrollTop = $(window).scrollTop() + 0;
            var elementOffset = $(this).offset().top;
            if (scrollTop > elementOffset) {
                $(this).css("opacity", 1 - (scrollTop - elementOffset) / 786);
            }
        });
    });
    if ($(window).width() > 767) {
        $('.page-section').addClass('parallax-container');
    } else {
        $('.page-section').removeClass('parallax-container');
    }
});
$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

// perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

//////fadein-up////////////
// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function ($) {

// Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function () {

// Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');

// Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }

// Check all animatables and animate them if necessary
        $animatables.each(function (i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

// Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

//$(window).scroll(function () {
//    var scrollDistance = $(window).scrollTop();
//
//    // Show/hide menu on scroll
//    //if (scrollDistance >= 850) {
//    //		$('nav').fadeIn("fast");
//    //} else {
//    //		$('nav').fadeOut("fast");
//    //}
//
//    // Assign active class to nav links while scolling
//    $('.page-section').each(function (i) {
//        if ($(this).position().top <= scrollDistance) {
//            $('.navigation a.active').removeClass('active');
//            $('.navigation a').eq(i).addClass('active');
//        }
//    });
//})

///////////carousel///////////////
$(document).ready(function () {
    $('#content-slider').lightSlider({
        item: 3,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive: [
            {
                breakpoint:900,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },

            {
                breakpoint: 767,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }]
    });
})
$('.carousel-control-next').on('click',function(){
    $('#carouselItem').carousel('next')
})
$('.carousel-control-prev').on('click',function(){
    $('#carouselItem').carousel('prev')
})

//var navPosition=$('nav').offset().top;


////STICKY MENU
//$(window).scroll(function(){
//    var navTop=$(window).scrollTop();
//    if(navPosition < navTop){
//        $('nav').addClass('fixed');
//    }
//    else{
//        $('nav').removeClass('fixed');
//    }
//});
/////////////////pop-over//////////////

function switchStyle() {
    if (document.getElementById('styleSwitch').checked) {
        document.getElementById('gallery').classList.add("custom");
        document.getElementById('galleryModal').classList.add("custom");
    } else {
        document.getElementById('gallery').classList.remove("custom");
        document.getElementById('galleryModal').classList.remove("custom");
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 900) {
            $('.header-sticky').addClass('fadeInDown');
            $('.header-sticky').removeClass('fadeOutUp');
            $('.header-sticky').addClass('animated');
        } else {
            $('.header-sticky').addClass('fadeOutUp');
            $('.header-sticky').removeClass('fadeInUp');
            $('.header-sticky').removeClass('animated');
        }
    });
});






