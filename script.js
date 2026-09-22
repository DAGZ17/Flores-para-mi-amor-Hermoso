const boton = document.getElementById("boton");

boton.addEventListener("click", () => {

    // Cambiamos el texto del botón
    boton.textContent = "🌻 Para ti, Sara";

    // Creamos el mensaje
    const mensaje = document.createElement("div");

    mensaje.className = "mensaje";

    mensaje.innerHTML = `
    <button class="cerrar-mensaje" aria-label="Cerrar">×</button>
        <div class="mensaje-contenido">

            <div class="corazon">💛</div>

            <h2>Mi amor</h2>

           <p class="texto-escritura">
    Quería hacer algo diferente para ti.
    Algo que no fuera simplemente un mensaje,
    sino un pequeño lugar hecho pensando en ti.
</p>

      <p class="texto-escritura">
                Se que aveces no soy el hombre perfcto, mas sin embargo 
quiero que sepas que cada día me esfuerzo por ser mejor para ti, porque te amo y quiero que seas feliz. 💜
            </p>

           <div class="codigo-romantico">
    <span class="codigo-titulo">💜 Código especial para Mi niña</span>

    <div class="linea-codigo">
        <span class="rosa">while</span>
        <span>(sarita.isInMyLife())</span> {
    </div>

    <div class="linea-codigo">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="amarillo">felicidad++;</span>
    </div>

    <div class="linea-codigo">
        }
    </div>

    <div class="resultado">
        🌻 felicidad...
    </div>
</div>

          <p class="texto-escritura">
                Porque si hay algo que tengo claro,
                es que desde que estás en mi vida,
                hay momentos que simplemente cobran sentido por el cual estoy vidiendo
                todos los días y eso es gracias a ti, mi razon de vivir💛
            </p>

            <div class="firma">
                Hecho especialmente para ti 🌻
            </div>

        </div>
    `;

    document.body.appendChild(mensaje);
    const cerrar = mensaje.querySelector(".cerrar-mensaje");

cerrar.addEventListener("click", () => {
    crearPetalos();
    mensaje.classList.remove("mostrar");

    setTimeout(() => {
        mensaje.remove();
    }, 800);
});

    setTimeout(() => {
        mensaje.classList.add("mostrar");
        crearCorazones();
    
        const textos = mensaje.querySelectorAll(".texto-escritura");
    
        textos.forEach((texto, index) => {
            const contenido = texto.textContent.trim();
            texto.textContent = "";
    
            setTimeout(() => {
                let i = 0;
    
                const escribir = setInterval(() => {
                    texto.textContent += contenido.charAt(i);
                    i++;
    
                    if (i >= contenido.length) {
                        clearInterval(escribir);
                    }
                }, 25);
    
            }, index * 1800);
        });
    
    }, 50);
    const flores = document.querySelector(".flores-creciendo");

    setTimeout(() => {
        flores.classList.add("activar");
    }, 2500);
});
function crearPetalos() {
    for (let i = 0; i < 18; i++) {

        const petalo = document.createElement("div");

        petalo.className = "petalo-caida";
        petalo.textContent = "🌻";

        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.animationDelay = Math.random() * 1.5 + "s";
        petalo.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(petalo);

        setTimeout(() => {
            petalo.remove();
        }, 6500);
    }
}
document.addEventListener("mousemove", (e) => {

    const flores = document.querySelectorAll(".girasol");

    flores.forEach((flor) => {

        const rect = flor.getBoundingClientRect();

        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        const distanciaX = e.clientX - centroX;
        const distanciaY = e.clientY - centroY;

        const inclinacion = Math.max(
            -8,
            Math.min(8, distanciaX / 80)
        );

        const movimiento = Math.max(
            -5,
            Math.min(5, distanciaY / 100)
        );

        flor.style.transform =
            `rotate(${inclinacion}deg) translateY(${movimiento}px)`;
    });

});
function crearCorazones() {

    for (let i = 0; i < 12; i++) {

        const corazon = document.createElement("div");

        corazon.className = "corazon-flotante";
        corazon.textContent = i % 2 === 0 ? "💜" : "💛";

        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.animationDelay = Math.random() * 3 + "s";
        corazon.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 7500);
    }
}
const florSecreta = document.querySelector(".flor-secreta");
console.log("Flor secreta:", florSecreta);

florSecreta.addEventListener("click", () => {

    const sorpresa = document.createElement("div");

    sorpresa.className = "sorpresa";

    sorpresa.innerHTML = `
        <div class="sorpresa-contenido">

            <button class="cerrar-sorpresa">×</button>

            <div class="sorpresa-flor">🌸</div>

            <p class="sorpresa-pequena">
                Encontraste un pequeño secreto 💜
            </p>

            <h2>Y eso me recuerda a ti, Mi amor.</h2>

            <p class="sorpresa-texto">
                Porque entre tantas personas, tantos caminos
                y tantos lugares, tuve la suerte de encontrarte.
            </p>

            <div class="frase-final">
                <br>
            Adicional a eso elabore una playits unicamente con las canciones que me hacen pensar en ti o te dedico cada una de ellas. 💜
            </div>
            <a
    href="https://open.spotify.com/playlist/1vGRLx2SOf8ygtRsxomgFE"
    target="_blank"
    rel="noopener noreferrer"
    class="boton-spotify"
>
    🎧 Escuchar nuestra playlist
</a>

            <div class="firma-final">
                — Para ti 🌻
            </div>

        </div>
    `;

    document.body.appendChild(sorpresa);

    setTimeout(() => {
        sorpresa.classList.add("mostrar-sorpresa");
    }, 50);

    const cerrar = sorpresa.querySelector(".cerrar-sorpresa");

    cerrar.addEventListener("click", () => {
        sorpresa.classList.remove("mostrar-sorpresa");

        setTimeout(() => {
            sorpresa.remove();
        }, 700);
    });

});