$(document).ready(function() {
	onResize();	
	
	$("#img_fallenstar").animate({"--progress": "1"}, {
		duration: 1000, step: function(val) {
			$(this).css({"--progress": val});
			onResize();
		}
	});
	console.log();
	$("#img_library").animate({left: Math.max(80,parseInt($("#img_library").css("left"))*7/30)+"px"}, 800, "swing", function() {
		$(this).css({left: "max(80px,35%)"});
	});
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 250)/250,1),0);
	
	const container = $("#img_fallenstar_container");
	const fallenstar = $("#img_fallenstar");
	
	$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
	
	fallenstar.css({height: (100-30*t) + "%", top: (12*t) + "%"});
	fallenstar.css("left", Math.min(-(1-fallenstar.css("--progress"))*fallenstar.width(),container.width()-fallenstar.width()) + "px");
}
