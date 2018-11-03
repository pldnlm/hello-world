//javascript.js 
var slideIndex=0;
showSlides();
function showSlides() {
    var slides=document.getElementByClassName("myimages");
    for ( var i=0; i < slides.length; i++) {
        slides[i].styles.display="none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex=0;
    }
    slides[slideIndex].style.display="block";
    setTimeout(showSlides, 4000);
}