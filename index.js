$(document).ready(function() {
	onResize();	
	
	$("#img_fallenstar").animate({left: "-65px"}, 1000);
	$("#img_library").animate({right: "-50px"}, 1000);
	
	$(".hamburger-icon").click(function() {
		const icon = $(this);
		icon.toggleClass("hamburger-change");
		const items = $("#dropdown-menu-bar-items");
		const h = icon.hasClass("hamburger-change") ? items.children().first().height() : 0;
		items.animate({height: h + "px"}, 300);
	});
})
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((width - height + 50)/250,1),0);
	const maxHeight = Math.max(Math.min((900 - width)/200,1),0)*430;
	$("#img_fallenstar").css("top", "max(" + (55-t*25)+"vh," + maxHeight + "px)");
	$("#img_library").css("top", "max(" + (5+t*20)+"vh,30px)");
	
	const h = $("#cover-page").outerHeight();
	if(h !== undefined)
		$("#background").css("height", "max(100vh," + (h*1.1) + "px)");
	
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
