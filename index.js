$(document).ready(function() {
	var height = $(window).height();
	var width = $(window).width();
	var t = Math.max(Math.min(($(window).width() - $(window).height() + 50)/250,1),0);
	$("#img_fallenstar").css("top", (55-t*25)+"vh");
	$("#img_library").css("top", (5+t*20)+"vh");
	
	$("#img_fallenstar").animate({left: "-65px"}, 1000);
	$("#img_library").animate({right: "-50px"}, 1000);
})
$(window).resize(function() {
	var height = $(window).height();
	var width = $(window).width();
	var t = Math.max(Math.min(($(window).width() - $(window).height() + 50)/250,1),0);
	$("#img_fallenstar").css("top", (55-t*25)+"vh");
	$("#img_library").css("top", (5+t*20)+"vh");
});