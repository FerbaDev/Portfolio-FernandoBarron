console.log("Trabajo final de Argentina programa 4.0")


const sol = document.querySelector("#botonModoClaro");
const luna = document.querySelector("#dark");
const body = document.body;
const navbar = document.querySelector("#navbar");
const cartelMasInfo = document.getElementById("masInfo");
const bordesEstudios = document.querySelectorAll(".bordesEstudios");
const botonContinuar = document.getElementById("info-continuar");
const contenedorEstudios = document.getElementById("contenedorEstudios");



sol.addEventListener("click", modoClaro);
luna.addEventListener("click", modoOscuro);


function modoClaro() {
    body.classList.add("claro");
    navbar.classList.add("claro");
    cartelMasInfo.style.borderColor = "#212529";
}
function modoOscuro() {
    body.classList.remove("claro");
    navbar.classList.remove("claro");
    cartelMasInfo.style.borderColor = "azure";
}


botonContinuar.addEventListener("click", mostrarMasInfo);

function mostrarMasInfo() {
    contenedorEstudios.innerHTML = "";
    const estudios = document.createElement("div");
    estudios.classList.add("estudios");
    estudios.innerHTML = `
    <fieldset class="fieldset">
        <legend class="legend">Mis conocimientos:</legend>
        <ul class="lista-estudios">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Flex-box</li>
            <li>Grids</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>Responsive design</li>
            <li>Accesibilidad</li>
            <li>SEO</li>
            <li>Git/Github</li>
        </ul>
    </fieldset>`;
    contenedorEstudios.append(estudios);

    const estudiando = document.createElement("div");
    estudiando.classList.add("estudiando");
    estudiando.innerHTML = `
    <fieldset class="fieldset-est">
        <legend class="legend-est">Estudiando:</legend>
        <ul class="lista-estudios">
            <li>JavaScript ES6</li>
        </ul>
    </fieldset>`;
    contenedorEstudios.append(estudiando);

    const aEstudiar = document.createElement("div");
    aEstudiar.classList.add("aestudiar");
    aEstudiar.innerHTML = `
                <fieldset class="fieldset-aest">
                    <legend class="legend-aest">A estudiar:</legend>
                        <ul class="lista-aestudios">
                            <li>React JS</li>
                            <li>Ajax & Fetch</li>
                            <li>Frameworks & NodeJS</li>
                            <li>Python</li>
                            <li>NPM</li>
                            <li>Websockets</li>
                            <li>SQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Twilio & OWASP</li>
                            <li>GraphQL</li>
                        </ul>
                </fieldset>`;
    contenedorEstudios.append(aEstudiar);

    continuar.removeEventListener("click", mostrarMasInfo);

}


const botonCancelar = document.getElementById("info-cancelar");

botonCancelar.addEventListener("click", cancelar);

function cancelar() {
    contenedorEstudios.innerHTML = "";
    const gracias = document.createElement("div");
    gracias.classList.add("aestudiar");
    gracias.innerHTML = `
                <fieldset class="fieldset-aest">
                        <ul class="lista-aestudios">
                            <span>Muchas gracias por pasar!</span>
                        </ul>
                </fieldset>
    `
    contenedorEstudios.append(gracias);

    botonCancelar.removeEventListener("click", cancelar);
    
}










