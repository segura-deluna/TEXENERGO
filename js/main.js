$(document).ready(function() {
	
	$(window).scroll(function() {
		150 < $(window).scrollTop() ? ($("#menu").css("display", "none"), 
			$("#menu-small").css("display", "block")) : ($("#menu").css("display", "block"), 
			$("#menu-small").css("display", "none"))
	}),


	$(".trigger-down").on("click", function() {
		$(".trigger-menu").toggle("slow")
	}), 

	$(".starters-down").on("click", function() {
		$(".starters-menu").toggle("slow")
	}), 

	$(".module-down").on("click", function() {
		$(".module-menu").toggle("slow")
	}), 

	$(".auto-down").on("click", function() {
		$(".auto-menu").toggle("slow")
	}),

	 $(".unit-down").on("click", function() {
		$(".unit-menu").toggle("slow")
	}),

	$(".search-down").on("click", function() {
	  $(".search-menu").toggle("slow")
	}),



	$("#btnModal, #btnModal2, #btnModal3").click(function() {
		$("#exampleModal").modal("show")
	}),




	$(".new-year__slider").slick({
		infinite: !0,
		speed: 1e3,
		cssEase: "linear",
		autoplay: !0,
		autoplaySpeed: 5e3,
		arrows: !1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
	}),

	 $(".starters__gallery").slick({
		infinite: !0,
		speed: 1e3,
		cssEase: "linear",
		autoplay: !0,
		autoplaySpeed: 5e3,
		arrows: !1,
		fade: !1,
		dots: !1,
		adaptiveHeight: !1
	}), 

	google.maps.event.addDomListener(window, "load", function() {
		var e = {
			center: new google.maps.LatLng(55.75632, 37.620065),
			zoom: 15
		};
		new google.maps.Map(document.getElementById("map"), e)
	}), $(".help__head").next().hide(), $(".help__head").click(function() {
		$(this).next().slideToggle(), $(".help__head").not(this).next().stop(!0, !0).slideUp()
	})
});




//Прокручивающийся список ссылок в выпадающем меню поиска

$(function(){
  makeScrollable("div.sc_menu_wrapper", "div.sc_menu");


  function makeScrollable(wrapper, scrollable){
    var wrapper = $(wrapper), scrollable = $(scrollable);
    scrollable.hide();
    var loading = $('<div class="loading">Downl...</div>').appendTo(wrapper);
    var interval = setInterval(function(){
      var card = scrollable.find('card_link');
      var completed = 0;
      card.each(function(){
        if (this.complete) completed++;
      });

      if (completed == card.length){
        clearInterval(interval);
        setTimeout(function(){
          loading.hide();
          wrapper.css({overflow: 'hidden'});
          scrollable.slideDown('slow', function(){
            enable();
          });
        }, 1000);
      }
    }, 100);

    function enable(){
      var inactiveMargin = 99;
      var wrapperHeight = wrapper.height();
      var scrollableHeight = scrollable.outerHeight() + 2*inactiveMargin;

      wrapper.mousemove(function(e){
        var wrapperOffset = wrapper.offset();
        var top = (e.pageY -  wrapperOffset.top) * (scrollableHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
        if (top < 0){
          top = 0;
        }
        wrapper.scrollTop(top);
      });
    }
  }
});





