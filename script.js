$(document).ready(function(){

    // ================================
    // STICKY NAVBAR + SCROLL UP BUTTON
    // ================================
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // ================================
    // SCROLL UP BUTTON CLICK
    // ================================
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // ================================
    // SMOOTH SCROLL ON MENU CLICK
    // ================================
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // ================================
    // TOGGLE MOBILE MENU
    // ================================
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // ================================
    // TYPING ANIMATION
    // ================================
    var typed = new Typed(".typing", {
        strings: ["Product Designer", "Product Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Product Designer", "Product Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // ================================
    // OWL CAROUSEL - FIXED
    // ================================
    var owl = $('.carousel').owlCarousel({
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,       // ✅ fix: "TimeOut" → "Timeout"
        autoplayHoverPause: true,
        smartSpeed: 700,             // ✅ smooth scroll animation
        dots: true,
        nav: true,                   // ✅ arrow buttons enable
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2,
                nav: true,
                dots: true
            },
            1000: {
                items: 3,            // ✅ fix: 6 → 3
                nav: true,
                dots: true
            }
        }
    });

    // ================================
    // CUSTOM PREV / NEXT (optional)
    // ================================
    $('.proj-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });
    $('.proj-next').click(function(){
        owl.trigger('next.owl.carousel');
    });

});
