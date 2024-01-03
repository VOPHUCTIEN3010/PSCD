$(document).ready(function () {
  var totalImages = $(".clearfix img").length;
  var currentImage = 0;
  let pagHtml = "";
  for (var i = 0; i < totalImages; i++) {
    pagHtml += `<a href="#" data-slide-index="${i}" class="jcarousel-pager-link ${i === currentImage ? " active" : ""}">${i + 1}</a>`;
  }
  $(".jcarousel-pagination").html(pagHtml);
  function showSlide(index, direc) {
    $(".clearfix img").not(".active").hide();
    $(".clearfix").css("left", 0);
    let slideWidth = $(".clearfix img").width();
    let offset = 0;
    if (direc) {
      offset = -1 * slideWidth;
      if (index > currentImage) {
        for (let j = currentImage + 1; j <= index; j++) {
          $(".clearfix").append($(".clearfix img[alt='img" + j + "']").show());
        }
        offset = (currentImage - index)*slideWidth;
      } else {
        $(".clearfix").append($(".clearfix img[alt='img" + index + "']").show()
        );
      }     
    } else {
      let noSteps = 1;
      if (index < currentImage) {
        for (let j = currentImage - 1; j >= index; j--) {
          $(".clearfix").prepend($(".clearfix img[alt='img" + j + "']").show());
        }
        noSteps = currentImage - index;
      } else {
        $(".clearfix").prepend($(".clearfix img[alt='img" + index + "']").show()
        );
      }
      $(".clearfix").css("left", -(noSteps * slideWidth) + "px");
    }
    $(".clearfix").animate({left: offset }, 300);    
    $(".jcarousel-pagination a:eq(" + currentImage + ")").removeClass("active");
    $(".jcarousel-pagination a:eq(" + index + ")").addClass("active");
    $(".clearfix img[alt='img" + currentImage + "']").removeClass("active");
    $(".clearfix img[alt='img" + index + "']").addClass("active");
    currentImage = index;
  }
  $(".jcarousel-control-next").on("click", function () {
    let newImage = currentImage === totalImages - 1 ? 0 : currentImage + 1;
    showSlide(newImage, true);
  });
  $(".jcarousel-control-prev").on("click", function () {
    let newImage = currentImage === 0 ? totalImages - 1 : currentImage - 1;
    showSlide(newImage, false);
  });
  $(document).on("click", ".jcarousel-pager-link", function () {
    var imageIndex = $(this).data('slide-index');
    const direc= imageIndex > currentImage ? true : false;
    showSlide(imageIndex, direc);
  });
});
