//function for changing the bg of navigation
window.onscroll = function changeClasses(){
	var navBar = document.getElementById('navBar'),
		navBarHeight = navBar.getBoundingClientRect().height,
		aboutSection = document.getElementById('aboutSection'),
		aboutSectionTop = aboutSection.getBoundingClientRect().top,
		aboutTexts = document.getElementsByClassName('about-text');
		portfolioItems = document.getElementsByClassName('portfolio-item'); 

    if(aboutSectionTop <= navBarHeight) {
        navBar.className = ('main-nav nontransparant');
    } else if(aboutSectionTop >= navBarHeight) {
         navBar.className =  ('main-nav');
    }

    for (var i = 0; i < portfolioItems.length; i++){
	    if(portfolioItems[i].getBoundingClientRect().top <= window.innerHeight - 75) {
	        portfolioItems[i].className = ('portfolio-item visible');
	    } 
	}

	for (var j = 0; j < aboutTexts.length; j++){
	    if(aboutTexts[j].getBoundingClientRect().top <= window.innerHeight - 75) {
	    	if(aboutTexts[j].classList.contains('italic')){
	    		aboutTexts[j].className = ('italic about-text visible');
	    	} else {
	        	aboutTexts[j].className = ('about-text visible');
	        }
	    } 
	}
};