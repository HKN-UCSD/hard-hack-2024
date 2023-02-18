$(document).ready(function() {
	$("dropdown-box").each(function(ind, elem) {
		root = elem.shadowRoot;
		$(".dropdown .header", root).click(function() {
			const hiddenText = $(this).parent().find(".dropdown-hidden p");
			const hlines = $(this).parent().find(".dropdown-hidden hr");
			const svg = $(this).find("svg");
			if(hiddenText.height() == 0)
			{
				hiddenText.css("height", "auto");
				const autoHeight = hiddenText.height();
				hiddenText.css("height", "0px");
				hlines.animate({opacity: 1}, 100);
				hiddenText.animate({height: autoHeight, margin: "1em 1em"}, 500, "swing", function() {$(this).css("height", "auto")});
				svg.animate({deg: "90"}, {
						duration: 500, step: function(val) {
							$(this).css({transform: "rotate(" + (val-90) + "deg)"});
						}
					}
				);
			}
			else
			{
				hlines.delay(400).animate({opacity: 0}, 100);
				hiddenText.animate({height: 0, margin: "0px 1em"}, 500);
				svg.animate({deg: "0"}, {
						duration: 500, step: function(val) {
							$(this).css({transform: "rotate(" + (val-90) + "deg)"});
						}
					}
				);
			}
		});
	});
});

function updateDropdown(elem) {
	const header = elem.getAttribute("header");
	const bodyText = elem.getAttribute("text");
	const val = `<div class="header">
					<h3>${header}</h3>
					<svg width="31px" height="31px">
						<path d="M13.8488 19.3187L0.682497 6.15236C-0.22753 5.24233 -0.22753 3.7708 0.682497 2.87045L2.87043 0.682519C3.78046 -0.227506 5.25199 -0.227506 6.15233 0.682519L15.4849 10.0151L24.8175 0.682519C25.7276 -0.227506 27.1991 -0.227506 28.0994 0.682519L30.3067 2.86077C31.2168 3.7708 31.2168 5.24233 30.3067 6.14267L17.1404 19.309C16.2304 20.2287 14.7589 20.2287 13.8488 19.3187Z" fill="white" transform="translate(0,5)"/>
					</svg>
				</div>
			<div class="dropdown-hidden"><hr/><p>${bodyText}</p><hr/></div>`;
			
	const wrapper = document.createElement("div");
	wrapper.innerHTML = val;
	wrapper.setAttribute("class", "dropdown");
	elem.shadowRoot.append(wrapper);
}
class DropdownBox extends HTMLElement {
	
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		
		const stylesheet = document.createElement("link");
		stylesheet.setAttribute("rel", "stylesheet");
		stylesheet.setAttribute("href", "./assets/modules/dropdown/dropdown.css");
		this.shadowRoot.appendChild(stylesheet);
	}
	
	connectedCallback() {
		updateDropdown(this);
	}
}
customElements.define("dropdown-box", DropdownBox);
