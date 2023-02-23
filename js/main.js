// modo claro/oscuro
function selectMode (mode) {
    let color = "azure";
    let bgcolor = "#212529";
    let borde = "3px solid azure";


    if (mode === "dark") {
        bgcolor = "#212529"
        color = "azure"
        borde = "3px solid azure"
    } else {
        bgcolor = "azure"
        color = "#212529"
        borde = "3px solid #212529"
    }

document.getElementById("theme").style.backgroundColor = bgcolor;
document.getElementById("theme").style.color = color;
document.getElementById("masInfo").style.border = borde;
document.getElementById("navbar").style.backgroundColor = bgcolor;

}


//empieza funcion de mas info
const continuar1 = "Soy Front End Developer" 


const cancelar1 = "Gracias por pasar!"
function continuarsi() {
    document.getElementById('id-info').innerHTML = continuar1;
}

function continuarno() {
    document.getElementById('id-info').innerHTML = cancelar1;
}

