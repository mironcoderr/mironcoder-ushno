

// FOR TEAM SECTION SLIDER
$('.team-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: false,
    autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
    nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        }
      }
    ]
  });


// FOR VIDEO SECTION SLIDER
$('.video-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: false,
  autoplay: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
      }
    }
  ]
});
  

// FOR BLOG SECTION SLIDER
$('.blog-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: false,
  autoplay: true,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
      }
    }
  ]
});
  