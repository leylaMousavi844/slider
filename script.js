let slides = document.querySelectorAll(".slide");

slides.forEach((item, index) => {
    item.style.transform = `translateX(${index * 100}%)`
})
let currentSlides = 0;
let numberOfSlides = slides.length - 1;
document.querySelector(".next").addEventListener("click", () => {
    if (currentSlides === numberOfSlides) {
        currentSlides = 0;
    } else {
        currentSlides++;
    }
    slides.forEach((item, index) => {
        item.style.transform = `translateX(${100 * (index - currentSlides)}%)`
    })
})
document.querySelector(".previous").addEventListener("click", () => {
    if (currentSlides == 0) {
        currentSlides = numberOfSlides
    } else {
        currentSlides--;
    }
    slides.forEach((item, index) => {
        item.style.transform=`translate(${100*(index-currentSlides)}%)`
    })

})