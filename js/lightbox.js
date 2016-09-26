// js file for the portfolio lightbox
var portfolioItems = document.querySelectorAll(".portfolio-item"), 
	lightbox = document.getElementById('lightbox'),
	image = document.createElement("img"),
	lightboxImage = document.getElementById('lightbox').appendChild(image);
	closeBtn = document.getElementById('close');

for (var k = 0; k < portfolioItems.length ; k++) {
	portfolioItems[k].onclick = function(e) {
		var portfolioBackground = window.getComputedStyle(this, null).getPropertyValue("background-image");
		lightbox.classList.add('show');
		image.src = portfolioBackground.replace('url("http://localhost:8080/portfolio2.0/','').replace('")','');
	};

	closeBtn.onclick = function(e){
		lightbox.classList.remove('show');
	};
}