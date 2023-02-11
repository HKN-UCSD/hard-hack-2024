var countdownDate = new Date("Apr 15, 2023 09:00:00").getTime();

$(document).ready(function() {
	var height = $(window).height();
	var width = $(window).width();
	var t = Math.max(Math.min(($(window).width() - $(window).height() + 50)/250,1),0);
	$("#img_fallenstar").css("top", (55-t*25)+"vh");
	$("#img_library").css("top", (5+t*20)+"vh");
	
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
		var timeStr = hours + ":" + String(minutes%60).padStart(2, '0') + ":" + String(seconds%60).padStart(2, '0');
		timeStr = timeStr.split('').map(c => {
			const span = `<span>${c}</span>`;
			return span;
		}).join('');
		$("#countdown").html(timeStr);
	}
})
$(window).resize(function() {
	var height = $(window).height();
	var width = $(window).width();
	var t = Math.max(Math.min(($(window).width() - $(window).height() + 50)/250,1),0);
	$("#img_fallenstar").css("top", (55-t*25)+"vh");
	$("#img_library").css("top", (5+t*20)+"vh");
});
