$(document).ready(function() {
	if($(window).width()<560)
	{
		$("#menu-bar").css({display: "none"});
		$("#dropdown-menu-bar").css({display: "block"});
		$("#icon").css({display: "none"});
	}
	else
	{
		$("#menu-bar").css({display: "block"});
		$("#dropdown-menu-bar").css({display: "none"});
		$("#icon").css({display: "block"});
	}
	
			
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 250)/250,1),0);
	const s = Math.max(Math.min((height - width)/100,1),0);
	$("#img_fallenstar").animate({"--progress": "1"}, {
		duration: 600, step: function(val) {
			$(this).css({"--progress": val});
			
			const container = $("#img_fallenstar_container");
			const fallenstar = $("#img_fallenstar");
			
			$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
			$("#apply-link").css("margin-top", (Math.max(-200,Math.min(0,height-650)/1.4)-36*t) + "px");
			
			fallenstar.css({height: (140-70*t) + "%", top: (8*t-s*8+10) + "%"});
			fallenstar.css("left", Math.min(-(1-fallenstar.css("--progress"))*fallenstar.width(),container.width()-fallenstar.width()) + "px");
		}
	});
	
	$("#img_library").animate({left: Math.max(24,600-width)+"px"}, 550, "swing", function() {
		$("#img_library").css("left", Math.max(24,600-width) + "px");
	});
	
	$(".hamburger-icon").click(function() {
		const icon = $(this);
		icon.toggleClass("hamburger-change");
		const items = $("#dropdown-menu-bar-items");
		const h = icon.hasClass("hamburger-change") ? items.children().first().height() : 0;
		items.animate({height: h + "px"}, 300);
	});
	
	onResize();
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((height - width + 400)/800,1),0);
	const s = Math.max(Math.min((height - width)/100,1),0);
	
	const container = $("#img_fallenstar_container");
	const fallenstar = $("#img_fallenstar");
	
	$("#cover-flex").css({"padding-bottom": (48*(1+t)) + "px"});
	$("#apply-link").css("margin-top", (Math.max(-200,Math.min(0,height-650)/1.4)-36*t) + "px");
			
	fallenstar.css({height: (140-70*t) + "%", top: (8*t-s*8+10) + "%"});
	fallenstar.css("left", Math.min(-(1-fallenstar.css("--progress"))*fallenstar.width(),container.width()-fallenstar.width()) + "px");
	
	$("#img_library").css("left", Math.max(24,600-width) + "px");
	
	if(width<560)
	{
		$("#menu-bar").css({display: "none"});
		$("#dropdown-menu-bar").css({display: "block"});
		$("#icon").css({display: "none"});
	}
	else
	{
		$("#menu-bar").css({display: "block"});
		$("#dropdown-menu-bar").css({display: "none"});
		$("#icon").css({display: "block"});
	}
}
