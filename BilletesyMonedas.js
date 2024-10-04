function validateNumber(input) {
    input.value = input.value.replace(/[^0-9]/g, '');

    if (input.value.length > 5) {
        input.value = input.value.slice(0, 5);
    }
}

function mostrarDinero() {
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (isNaN(cantidad) || cantidad < 0) {
        alert("Ingresa una cantidad válida");
        return;
    }

    let restante = cantidad;

    const mil = Math.floor(restante / 1000);
    restante = restante % 1000;

    const cien = Math.floor(restante / 100);
    restante = restante % 100;

    const diez = Math.floor(restante / 10);
    restante = restante % 10;

    const uno = restante;

    document.getElementById('mil').innerHTML = generarImagenes('mil', mil);
    document.getElementById('cien').innerHTML = generarImagenes('cien', cien);
    document.getElementById('diez').innerHTML = generarImagenes('diez', diez);
    document.getElementById('uno').innerHTML = generarImagenes('uno', uno);
}

function generarImagenes(tipo, cantidad) {
    let imagenes = '';
    for (let i = 0; i < cantidad; i++) {
        switch(tipo) {
            case 'mil':
                imagenes += '<img src="mil_pesos.jpeg" alt="Mil Peso">';
                break;
            case 'cien':
                imagenes += '<img src="cien_pesos.jpeg" alt="Cien Peso">';
                break;
            case 'diez':
                imagenes += '<img src="diez_pesos.jpeg" alt="Diez Peso">';
                break;
            case 'uno':
                imagenes += '<img src="uno_pesos.jpeg" alt="Uno Peso">';
                break;
        }
    }
    return imagenes;
}

function reiniciar() {
    window.location.reload();
   /*  document.getElementById('cantidad').value = '';
    document.getElementById('mil').innerHTML = '';
    document.getElementById('cien').innerHTML = '';
    document.getElementById('diez').innerHTML = '';
    document.getElementById('uno').innerHTML = ''; */
}