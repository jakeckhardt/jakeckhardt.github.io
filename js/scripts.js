var $social = $("#social"),
    $nav = $("#social i"),
    $colNav = $("#color-social"),
    $colNavi = $("#color-social i"),
    $aboutHeader = $("#aboutHeader"),
    $productsHeader = $("#productsHeader"),
    $contactHeader = $("#contactHeader"),
    $productTitle = $(".projectContainer h1"),
    $productImg = $(".projectContainer img");

$('#fullpage').fullpage({
	onLeave: function(index, nextIndex, direction){

		if(index == 1 && nextIndex == 2){
      $social.addClass("change");
      $nav.css("opacity", "1");
			$nav.css("color", "black");
      setTimeout(function(){
        $aboutHeader.css("transform", "translateX(0)")}, 200);
		} else if(index == 2 && nextIndex == 1){
      $social.removeClass("change");
      $nav.css("color", "white");
      $nav.css("opacity", "0");
      $aboutHeader.css("transform", "translateX(-185px)");
    } else if(index == 2 && nextIndex == 3){
      $nav.css("color", "white");
      $aboutHeader.css("transform", "translateX(-185px)");
      setTimeout(function(){
        $productsHeader.css("transform", "translateX(0)")}, 200);
    } else if(index == 4 && nextIndex == 3){
      $nav.css("color", "white");
      $contactHeader.css("transform", "translateX(-185px)");
      setTimeout(function(){
        $productsHeader.css("transform", "translateX(0)")}, 200);
    } else if(index == 3 && nextIndex == 2){
      $productsHeader.css("transform", "translateX(-185px)");
      setTimeout(function(){
        $aboutHeader.css("transform", "translateX(0)")}, 200);
      $nav.css("color", "black");
    } else {
      $nav.css("color", "black");
      $productsHeader.css("transform", "translateX(-185px)");
      setTimeout(function(){
        $contactHeader.css("transform", "translateX(0)")}, 200);
    }
	}
});



$nav.mouseenter(function() {
  if ($social.hasClass("change")) {
    $(this).css("opacity", "0");
  }
}).mouseleave(function() {
  if ($social.hasClass("change")) {
    $(this).css("opacity", "1");
  }
});


$productTitle.mouseenter(function(){
  $(this).css("transform", "translateX(30px)")
}).mouseleave(function(){
  $(this).css("transform", "translateX(0)")
})

$productImg.mouseenter(function(){
  $(this).css("opacity", "0.5")
}).mouseleave(function(){
  $(this).css("opacity", "1")
})
