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
	
	$("dropdown-box h3").click(function() {
		const hiddenText = $(this).parent().find(".dropdown-hidden p");
		const hlines = $(this).parent().find(".dropdown-hidden hr");
		const svg = $(this).find("svg");
		if(hiddenText.height() == 0)
		{
			hiddenText.css("height", "auto");
			const autoHeight = hiddenText.height();
			hiddenText.css("height", "0px");
			hlines.animate({opacity: 1}, 100);
			hiddenText.animate({height: autoHeight, margin: "1em 1em"}, 600, "swing", function() {$(this).css("height", "auto")});
			svg.animate({deg: "90"}, {
					duration: 600, step: function(val) {
						$(this).css({transform: "rotate(" + (val-90) + "deg)"});
					}
				}
			);
		}
		else
		{
			hlines.delay(500).animate({opacity: 0}, 100);
			hiddenText.animate({height: 0, margin: "0px 1em"}, 600);
			svg.animate({deg: "0"}, {
					duration: 600, step: function(val) {
						$(this).css({transform: "rotate(" + (val-90) + "deg)"});
					}
				}
			);
		}
	});
});
$(window).resize(onResize);

function onResize() {
	const height = $(window).height();
	const width = $(window).width();
	const t = Math.max(Math.min((width - height + 50)/250,1),0);
	const maxHeight = Math.max(Math.min((900 - width)/200,1),0)*430;
	$("#img_fallenstar").css("top", "max(" + (55-t*25)+"vh," + maxHeight + "px)");
	$("#img_library").css("top", "max(" + (5+t*20)+"vh,30px)");
}


function updateDropdown(elem) {
	const header = elem.getAttribute("header");
	const bodyText = elem.getAttribute("text");
	elem.innerHTML = `<h3>${header} <svg width="1.75em" height="1.25em" style="vertical-align: top; padding: 0px 1em; transform: rotate(-90deg); deg: -90">
					<path d="M13.8488 19.3187L0.682497 6.15236C-0.22753 5.24233 -0.22753 3.7708 0.682497 2.87045L2.87043 0.682519C3.78046 -0.227506 5.25199 -0.227506 6.15233 0.682519L15.4849 10.0151L24.8175 0.682519C25.7276 -0.227506 27.1991 -0.227506 28.0994 0.682519L30.3067 2.86077C31.2168 3.7708 31.2168 5.24233 30.3067 6.14267L17.1404 19.309C16.2304 20.2287 14.7589 20.2287 13.8488 19.3187Z" fill="white"/>
				</svg>
			</h3>
			<div class="dropdown-hidden"><hr/><p>${bodyText}</p><hr/></div>`
}
class DropdownBox extends HTMLElement {
	constructor() {
		super();
	}
	
	connectedCallback() {
		updateDropdown(this);
	}
	/*
	static get observedAttributes() { return ['header', 'text']; }
	attributeChangedCallback() {
		alert("changed")
		updateDropdown(this);
	}
	*/
}
customElements.define("dropdown-box", DropdownBox);

