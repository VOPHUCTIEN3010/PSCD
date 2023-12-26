$(document).ready(function() {
  var totalSlides = $('.bxslider img').length;
  var currentSlide = 0;

  function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }
    currentSlide = index; 
    $('.bxslider img.active').fadeOut(300, function () {
        $(this).removeClass('active');
        $('.bxslider img').eq(index).addClass('active').fadeIn(500);
    });
    updatePager(index);
}

function updatePager(index) {
  $('.bx-pager-item').empty();
  $('.bx-pager').empty();
  for (var i = 0; i < totalSlides; i++) {
      var pagerItem = $('<div class="bx-pager-item"></div>');
      var pagerLink = $('<button href="#" data-slide-index="' + i + '" class="bx-pager-link">' + (i+1) + '</button>');
      if (i === index) {
          pagerLink.addClass('active');
         
       
      }
      pagerItem.append(pagerLink);
      $('.bx-pager').append(pagerItem);
  }
  var coffeeText = "Coffee " + (index + 1);
  $('.bx-caption span').text(coffeeText);
}


  $(".bx-next").on('click', function(){
      showSlide(currentSlide + 1);
  });

  $(".bx-prev").on('click', function(){
      showSlide(currentSlide - 1);
  });

  $(document).on('click', '.bx-pager-link', function(e) {
      e.preventDefault();
      var slideIndex = $(this).data('slide-index');
      showSlide(slideIndex);
  });

  updatePager(currentSlide);
});
