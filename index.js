var countdownDate = new Date("Apr 15, 2023 09:00:00").getTime();

$(document).ready(function() {
	onResize();	
	
	$("#img_fallenstar").animate({left: "-65px"}, 1000);
	$("#img_library").animate({right: "-50px"}, 1000);
	
	updateCountdown();
	$("#countdown").animate({opacity: 1}, 500);
	
	setInterval(updateCountdown, 1000);
	function updateCountdown() {
		const time = countdownDate - (new Date().getTime());
		const seconds = Math.floor(time/1000);
		const minutes = Math.floor(seconds/60);
		const hours = Math.floor(minutes/60);
		const days = Math.floor(hours/24);
		var timeStr = String(days).padStart(2, '0') + ":" + String(hours%24).padStart(2, '0') + ":" + String(minutes%60).padStart(2, '0') + ":" + String(seconds%60).padStart(2, '0');
		timeStr = timeStr.split('').map(c => {
			const span = `<span>${c}</span>`;
			return span;
		}).join('');
		$("#countdown").html(timeStr);
	}
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
}
