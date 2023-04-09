console.log("Trabajo final de Argentina programa 4.0")


const sol = document.querySelector("#botonModoClaro");
const luna = document.querySelector("#dark");
const body = document.body;
const navbar = document.querySelector("#navbar");
const borde = document.getElementById("masInfo");

sol.addEventListener("click", modoClaro);
luna.addEventListener("click", modoOscuro);


function modoClaro() {
    body.classList.add("claro");
    navbar.classList.add("claro");
    document.getElementById("masInfo").style.borderColor = "#212529";
}
function modoOscuro() {
    body.classList.remove("claro");
    navbar.classList.remove("claro");
}



















// document.getElementById("theme").style.backgroundColor = bgcolor;
// document.getElementById("theme").style.color = color;
// document.getElementById("masInfo").style.border = borde;
// document.getElementById("navbar").style.backgroundColor = bgcolor;
// document.getElementById("barra").style.backgroundColor = bgcolor;



//empieza funcion de mas info

function continuar() {
    document.getElementById('id-info1').style.display='block';
    document.getElementById('id-info2').style.display='none';
}

function cancelar() {
    document.getElementById('id-info2').style.display='block';
    document.getElementById('id-info1').style.display='none';
}

