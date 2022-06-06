'use strict';

import $ from 'jquery';


function init() {
    /*
 * Replace all SVG images with inline SVG
 */
    $('img.svg').each(function () {
        let $img = $(this);
        let imgID = $img.attr('id');
        let imgClass = $img.attr('class');
        let imgURL = $img.attr('src');

        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('.sticky-top').removeClass('bgtransform');
        } else {
            $('.sticky-top').addClass('bgtransform');
        }
    });

    $(window).on('load resize', function () {
        let scroll = $(window).scrollTop();
        if (scroll < 100) {
            $('.fixed-top').removeClass('bgtransform');
        } else {
            $('.fixed-top').addClass('bgtransform');
        }
    });


    $('.scrollto').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top - 180
        }, {
            duration: 370,
            easing: 'linear'
        });

        return false;
    });
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 10,
            },
            960: {
                items: 4,
                margin: 30,
            }
        }
    });

    var swiper = new Swiper(".gallery-small", {
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        grabCursor: true,
        watchSlidesProgress: true,
    });
    var swiper = new Swiper(".gallery-big", {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        thumbs: {
            swiper: swiper,
        },
    });

    var swiper = new Swiper(".swiper-fade", {
        spaceBetween: 30,
        effect: "fade",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });



    $('.search-btn').click(function () {
        if (!$('.navbar-menu').hasClass('hidden')) {
            $('.link-wrapper').toggle('slow');
        }
        return;
    });
    $('.menu-toggler').click(function () {
        $('.link-wrapper').toggle('slow');
    });


    document.querySelector('.navbar-toggler').addEventListener('click', function () {
        this.classList.toggle("collapsed");
        document.querySelector('body').classList.toggle("fixed");
        document.querySelector('.navbar-menu__mobile').classList.toggle("show");
    });

    document.querySelector('.main-content').addEventListener('click', function () {
        if (!document.querySelector('.navbar-toggler').classList.contains("collapsed")) {
            document.querySelector('.navbar-toggler').classList.toggle("collapsed");
            document.querySelector('body').classList.toggle("fixed");
            document.querySelector('.navbar-menu__mobile').classList.toggle("show");
        };
    });

    document.querySelector('.search-btn').addEventListener('click', function () {
        this.classList.add("open");
        document.querySelector('.navbar-menu').classList.add('hidden');
        document.querySelector('.right-nav').classList.add('opened');
    });

    document.querySelector('.menu-toggler').addEventListener('click', function () {
        if (document.querySelector('.navbar-menu').classList.contains('hidden')) {
            document.querySelector('.navbar-menu').classList.remove('hidden');
            document.querySelector('.right-nav').classList.remove('opened');
        }
    });
}



const result = {
    init: init,
};
export default result;