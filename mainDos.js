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
    document.getElementById('loginFormDos').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        const respuesta = parseInt(document.getElementById('codigoInputDos').value);
        if (respuesta != 26) return alerta('¡No es correcto!', "¡Inténtalo de nuevo!", "warning");

        alerta('¡Es correcto!', "¡ya puedes leer la otra pista!", "success");
        const tituloCardPistaDos = document.getElementById('tituloCardPistaDos').innerHTML='Correcto cumples 26 años';
        const textoCardPistaDos = document.getElementById('textoCardPistaDos').innerHTML='Busca a camilo para reclamar tu segunda recompenza.';
        const textoDosCardPistaDos = document.getElementById('textoDosCardPistaDos').innerHTML='Espero que Te guste bueno ahora sigamos con tercer reto. camilo te dara la otra tarjeta';
        const btnCardPistaDos = document.getElementById('btnCardPistaDos').innerHTML='<a class="link" href="./pistasTre.html">Toca aqui para tu tercera pista 👈🏻</a>';
    });
};