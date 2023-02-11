$(document).ready(function() {
	var height = $(window).height();
	var width = $(window).width();
	if(width<height)
	{
		$("#img_fallenstar").css("top", "55vh");
		$("#img_library").css("top", "5vh");
	}
})
$(window).resize(function() {
	var height = $(window).height();
	var width = $(window).width();
	var t = Math.max(Math.min(($(window).width() - $(window).height() + 50)/250,1),0);
	$("#img_fallenstar").css("top", (55-t*25)+"vh");
	$("#img_library").css("top", (5+t*20)+"vh");
});