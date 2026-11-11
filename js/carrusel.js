(function () {
    const pista = document.querySelector('.pista');
    if (!pista) return;

    const ant = document.getElementById('ant');
    const sig = document.getElementById('sig');
    const contador = document.getElementById('contador');
    const total = pista.children.length;

    function indice() {
        return Math.round(pista.scrollLeft / pista.clientWidth);
    }

    function ir(direccion) {
        pista.scrollBy({ left: direccion * pista.clientWidth, behavior: 'smooth' });
    }

    function actualizar() {
        const i = indice();
        contador.textContent = `${i + 1} / ${total}`;
        ant.disabled = i === 0;
        sig.disabled = i === total - 1;
    }

    ant.addEventListener('click', () => ir(-1));
    sig.addEventListener('click', () => ir(1));
    pista.addEventListener('scroll', actualizar);
    actualizar();
})();