
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.9s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 700);
}
function moverIzquierda(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement ('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 700);
}
btnRight.addEventListener('click', function() {
    moverDerecha();

});

btnLeft.addEventListener('click', function() {
    moverIzquierda();

});

/*Para que sea automatico */
setInterval(function(){
    moverDerecha();

},7500);







