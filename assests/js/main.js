$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".menu").toggleClass("active");
  });
});

$(".testimonial-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


// accordion start
$(document).ready(function () {
  $(".process-paragraph").hide();
  $(".arow").click(function () {
    var content = $(this).closest(".process-box").find(".process-paragraph");
    if (content.is(":visible")) {
      content.slideUp();
      $(this).removeClass("active");
    } else {
      $(".process-paragraph").slideUp();
      $(".arow").removeClass("active");
      content.slideDown();
      $(this).addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".frequently-paragraph").hide();
  $(".process-box-title, .arow-second").click(function () {
    var content = $(this).closest(".process-box").find(".frequently-paragraph");
    var arrow = $(this).closest(".process-box").find(".arow-second");
    if (content.is(":visible")) {
      content.slideUp();
      arrow.removeClass("active");
    } else {
      $(".frequently-paragraph").slideUp();
      $(".arow-second").removeClass("active");
      content.slideDown();
      arrow.addClass("active");
    }
  });
});
// accordion end

// back to top
var $backToTop = $(".top-up-btn");
$backToTop.hide();

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 400) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on("click", function (e) {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// back to end


