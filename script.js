var yearElement = document.getElementById("year")
var curYear = new Date().getFullYear()
yearElement.textContent = curYear

var headerElement = document.querySelector("header.header")
var navElement = document.getElementById("mobile-nav")
navElement.addEventListener('click', function onClick() {

    headerElement.classList.toggle("nav-open")
    // if (headerElement.classList.contains("nav-open")) {
    //     headerElement.classList = "header"
    // }
    // else {

    //     headerElement.classList += " nav-open"
    // }

})

// Sticky navigation after Hero section

var heroElement = document.querySelector("section.hero-section")
const observer = new IntersectionObserver(function (event) {

    const ent = event[0]
    if (ent.isIntersecting == false) {
        headerElement.classList.add("sticky")
        heroElement.style.marginTop = "96px";


    }
    else {
        headerElement.classList.remove("sticky")
        heroElement.style.marginTop = "0";


    }

}, {
    // in the viewport
    root: null,
    // trigger after how much of the section is remaining
    threshold: 0,
    rootMargin: "-80px",
})
observer.observe(heroElement)