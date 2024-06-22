console.log("Trabajo final de Argentina programa 4.0");

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
            <li>CSS3 y librerías</li>
            <li>Flex-box y Grid</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>Responsive design</li>
            <li>Accesibilidad</li>
            <li>SEO</li>
            <li>Git/Github</li>
            <li>JavaScript</li>
            <li>APIs</li>
            <li>React JS</li>
            <li>NPM</li>
            <li>Vite</li>
            <li>Material UI</li>
            <li>Integración de Mercado Pago</li>
            <li>Firebase</li>
            <li>Node js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Passport</li>
            <li>JWT</li>
            <li>Mongoose</li>
            <li>Websockets</li>
            <li>Twilio & OWASP</li>
        </ul>
    </fieldset>`;
  contenedorEstudios.append(estudios);


  botonContinuar.removeEventListener("click", mostrarMasInfo);

  botonCancelar.addEventListener("click", cancelar);
}

const botonCancelar = document.getElementById("info-cancelar");

botonCancelar.addEventListener("click", cancelar);

function cancelar() {
  contenedorEstudios.innerHTML = "";
  const gracias = document.createElement("div");
  gracias.classList.add("aestudiar");
  gracias.innerHTML = `
                <div class="gracias">
                  <fieldset class="field-gracias">
                    <ul>
                      <span>Muchas gracias por pasar!</span>
                    </ul>
                  </fieldset>
                </div>
    `;
  contenedorEstudios.append(gracias);

  botonCancelar.removeEventListener("click", cancelar);

  botonContinuar.addEventListener("click", mostrarMasInfo);
  setTimeout(() => {
    contenedorEstudios.innerHTML = "";
  }, 2000);
}
