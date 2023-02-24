$(document).ready(function() {
	onResize();	
	
	//$("#img_fallenstar").animate({left: "-65px"}, 1000);
	//$("#img_library").animate({right: "-50px"}, 1000);
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 250)/250,1),0);
	
	const container = $("#img_fallenstar_container");
	const fallenstar = $("#img_fallenstar");
	
	$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
	
	fallenstar.css({ height: (100-30*t) + "%", top: (12*t) + "%"});
	fallenstar.css("left", Math.min(0,container.width()-fallenstar.width()) + "px");
}
