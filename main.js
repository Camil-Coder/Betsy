window.addEventListener('load', iniciarJuego);//evento para escuchar cuando el navegador esta cargado al 100%
//autenticacion
function alerta(titulo, texto, iconos) {
    Swal.fire({
        title: titulo,
        text: texto,
        icon: iconos,
    });
}

function iniciarJuego() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        const respuesta = parseInt(document.getElementById('codigoInput').value);
        if (respuesta != 2014) return alerta('¡No es correcto!', "¡Inténtalo de nuevo!", "warning");

        alerta('¡Es correcto!', "¡ya puedes leer la otra pista!", "success");
        const tituloCardPistaUno = document.getElementById('tituloCardPistaUno').innerHTML='Correcto es el año 2014';
        const textoCardPistaUno = document.getElementById('textoCardPistaUno').innerHTML='Adentro de mi maleta gris encontraras tu primera recompenza.';
        const textoDosCardPistaUno = document.getElementById('textoDosCardPistaUno').innerHTML='Te gusto.. bueno ahora sigamos con el resto de los retos.';
        const btnCardPistaUno = document.getElementById('btnCardPistaUno').innerHTML='<a class="link" href="./pistasDos.html">Toca aqui para tu segunda pista 👈🏻</a>';
    });
};