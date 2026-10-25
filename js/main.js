const total = 22;
const numero = Number(document.body.dataset.leccion);

/* document.body.dataset.leccion lee el atributo data-leccion del body. Los atributos data-* sirven para guardar datos propios en el HTML. Siempre llegan como texto, por eso va envuelto en Number() */
document.querySelector('.etiqueta').textContent = `Lección ${numero} de ${total}`; /* Busca el primer elemento con esa clase. textContent cambia su texto, y las comillas invertidas con ${} permiten meter variables dentro de la frase */
document.querySelector('.barra').style.width = `${(numero / total) * 100}%`; /* style.width pone el ancho de la barra directamente. Gana al width: 5% del CSS, porque los estilos en línea tienen prioridad */

/* querySelectorAll('.menu a') devuelve todos los enlaces del menú. Quitamos activa a todos y se la ponemos al que toca. El if evita un error si el número no tiene enlace en el menú */
const enlaces = document.querySelectorAll('.menu a');
enlaces.forEach(enlace => enlace.classList.remove('activa'));

/* Los índices empiezan en 0, por eso la lección 1 es enlaces[0] y hay que restar 1 */
if (enlaces[numero - 1]) {
    enlaces[numero - 1].classList.add('activa');
}