console.log("Trabajo final de Argentina programa 4.0")
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
document.getElementById("barra").style.backgroundColor = bgcolor;


}


//empieza funcion de mas info

function continuar() {
    document.getElementById('id-info1').style.display='block';
    document.getElementById('id-info2').style.display='none';
}

function cancelar() {
    document.getElementById('id-info2').style.display='block';
    document.getElementById('id-info1').style.display='none';
}

