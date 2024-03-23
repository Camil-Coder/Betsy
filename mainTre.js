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
    document.getElementById('loginFormTre').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        const respuesta = parseInt(document.getElementById('codigoInputTre').value);
        if (respuesta != 10) return alerta('¡No es correcto 😡!', "¡Inténtalo de nuevo!", "warning");

        alerta('¡Es correcto!', "¡ya puedes leer la otra pista!", "success");
        const tituloCardPistaTre = document.getElementById('tituloCardPistaTre').innerHTML='correcto 10 años';
        const textoCardPistaTre = document.getElementById('textoCardPistaTre').innerHTML='Si lose...💁🏻‍♂️ se ha sentidto como poco tiempo, pero siento que una vida es muy poco para Amarte 🧑🏻‍❤️‍💋‍🧑🏼';
        const textoDosCardPistaTre = document.getElementById('textoDosCardPistaTre').innerHTML='Ya puedes ir a casa y rebir la ultima recompenza 🧏🏻‍♂️ te voy a dar una pista buscala en la mesa de la cosina.';
        const btnCardPistaTre = document.getElementById('btnCardPistaTre').style.display='none';
    });
};