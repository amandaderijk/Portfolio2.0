// js file for the portfolio lightbox
var portfolioItems = document.querySelectorAll(".portfolio-item"), 
	lightbox = document.getElementById('lightbox'),
	image = document.createElement("img"),
	lightboxImage = document.getElementById('lightbox').appendChild(image);
	closeBtn = document.getElementById('close'), 
	body = document.body;

for (var k = 0; k < portfolioItems.length ; k++) {
	portfolioItems[k].onclick = function(e) {
		var portfolioBackground = this.dataset.lightbox;
		lightbox.classList.add('show');
		image.src = portfolioBackground.replace('url("','').replace('")','');
		body.classList.add('noscroll');
	};

	closeBtn.onclick = function(e){
		lightbox.classList.remove('show');
		body.classList.remove('noscroll');
	};
}

window.addEventListener("keydown", closeBox, false);
	function closeBox(key){
		if (key.keyCode == 27) {
				lightbox.classList.remove('show');
				body.classList.remove('noscroll');
			}
		}