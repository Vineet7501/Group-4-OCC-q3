$(".owl-carousel").owlCarousel({

    margin: 10,

    nav: true,

    loop:false,

    dots:false,

    navText : ["<i class='fa fa-chevron-left arrow-left owl-prev' ></i>","<i class='fa fa-chevron-right owl-next'></i>"],

    responsive: {

      0: {

        items: 1,

      },

      480: {

        items: 1,

      },

      768: {

        items: 3,

      },

      992:{

        items:4

      }

    },

});