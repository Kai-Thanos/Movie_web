// Slide Background
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



// Slide Infront
const carouselItems = document.querySelectorAll(".carousel_item");
let i = 1;

setInterval(() => {
    // Accessing All the carousel Items
    Array.from(carouselItems).forEach((item, index) => {

        if (i < carouselItems.length) {
            item.style.transform = `translateX(-${i * 100}%)`
        }
    })


    if (i < 4) {
        i++;
    }
    else {
        i = 0;
    }
}, 3000)



// Hide/Show Location Menu
function myFunction() {
    var element = document.getElementById("myLocate");
    element.classList.toggle("isLocate");
}


// Now Showing & Coming Soon
var taplinks = document.getElementsByClassName("tap-link");
var tapcontents = document.getElementsByClassName("tap-contents")

function opentap (tapname){
    for(taplink of taplinks){
        taplink.classList.remove("active-link")
    }
    event.currentTarget.classList.add("active-link")
    for(tapcontent of tapcontents){
        tapcontent.classList.remove("active-tap")
    }
    document.getElementById(tapname).classList.add("active-tap")
}


