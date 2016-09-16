// js file for the portfolio lightbox

// if clicked on a portfolio item give the lightbox a display: flex;

function openLightbox(){
	var lightbox = document.getElementsByClassName(lightbox);
	console.log("clicked " + lightbox);
	for(var i = 0; i < lightbox.length; i++){
		lightbox[i].style.display='flex';
	}
}

// simpel: als item 1 is geklikt is afb 1 de achtergrond, anders 2 anders 3 enz. 