const btnLeft = document.querySelector(".btnleft"),
      btnRight = document.querySelector(".btnright"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".carrusel-img");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 4000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .8s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .8s" 
}   


/*BOTON MODO OSCURO*/

const swith = document.getElementById("switch");
const formulariodark = document.getElementById("formulario")

swith.addEventListener("click", e => {
    swith.classList.toggle("active")
    document.body.classList.toggle("active")
    document.nav-header.classList.toggle("active")

    
})




/*popup*/
let popup = document.getElementById("popup");
let fondo = document.getElementById("popupfondo")
let overlay = document.getElementById("overlay")

setTimeout(() =>{
    popup.style.display = `flex`
    overlay.style.display = 'block';

}, 3000)

//boton cerrar

let closebtn = document.getElementById("close-btn");


closebtn.addEventListener(`click`, () =>{
    popup.style.display=`none`
    overlay.style.display = 'none';
})