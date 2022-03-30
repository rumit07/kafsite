        $(document).ready(function (){
            $("#click1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist1").offset().top
                }, 2000);
            });
              $("#click2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist2").offset().top
                }, 2000);
            });
                 $("#click3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist3").offset().top
                }, 2000);
            });
                    $("#click4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist4").offset().top
                }, 2000);
            });
                       $("#click5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist5").offset().top
                }, 2000);
            });
                             $("#click6").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist6").offset().top
                }, 2000);
            });
                                   $("#click7").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist7").offset().top
                }, 2000);
            });
                                         $("#click8").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist8").offset().top
                }, 2000);
            });
              $("#click9").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist9").offset().top
                }, 2000);
            })
                    $("#click10").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist10").offset().top
                }, 2000);
            });
                  $("#click11").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist11").offset().top
                }, 2000);
            });
                  $("#click12").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist12").offset().top
                }, 2000);
            });
              $("#click13").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist13").offset().top
                }, 2000);
            });
                  $("#click14").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist14").offset().top
                }, 2000);
            });
              $("#click15").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist15").offset().top
                }, 2000);
            });
               $("#click16").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist16").offset().top
                }, 2000);
            });
              $("#click17").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist17").offset().top
                }, 2000);
            });
              $("#click18").click(function (){
                $('html, body').animate({
                    scrollTop: $("#artist18").offset().top
                }, 2000);
            });
        });
        function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
$(document).ready(function(){
     
        //Show carousel-control
        
        $("#myCarousel").mouseover(function(){
            $("#myCarousel .carousel-control").show();
        });

        $("#myCarousel").mouseleave(function(){
            $("#myCarousel .carousel-control").hide();
        });
        
        //Active thumbnail
        
        $("#thumbCarousel .thumb").on("click", function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        
        });
        
        //When the carousel slides, auto update
        
        $('#myCarousel').on('slid.bs.carousel', function(){
           var index = $('.carousel-inner .item.active').index();
           //console.log(index);
           var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
           thumbnailActive.addClass('active');
           $(thumbnailActive).siblings().removeClass("active");
           //console.log($(thumbnailActive).siblings()); 
        });
     });
    addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }

        jQuery(document).ready(function ($) {
            $(".scroll").click(function (event) {
                event.preventDefault();

                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
        $(document).ready(function () {

            $().UItoTop({
                easingType: 'easeOutQuart'
            });

        });

        $(window).load(function () {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });
        });