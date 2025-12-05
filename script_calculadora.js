function pedirDatos() {
  let nombre = prompt('Por favor, escribe tu nombre:');
  if (nombre === null) {
    return null; 
  }

  nombre = nombre.trim();
  if (nombre.length === 0) nombre = 'Amigo/a';

  let anioStr = prompt('Escribe tu año de nacimiento (ej. 1990):');
  if (anioStr === null) return null;

  anioStr = anioStr.trim();
  let anio = parseInt(anioStr, 10);

  const anioActual = new Date().getFullYear();


  if (isNaN(anio) || anio < 1900 || anio > anioActual) {
    alert('Año inválido. Inténtalo nuevamente. Debe estar entre 1900 y ' + anioActual + '.');
    return pedirDatos();
  }

  return { nombre, anio };
}


function calcularEdad(anioNacimiento) {
  const anioActual = new Date().getFullYear();
  return anioActual - anioNacimiento;
}


function mostrarResultado(nombre, anio) {
  const edad = calcularEdad(anio);
  const mensajeEl = document.getElementById('mensaje');
  const detalleEl = document.getElementById('detalle');

  mensajeEl.textContent = `Hola, ${nombre}. Tienes ${edad} año${edad === 1 ? '' : 's'}.`;
  detalleEl.textContent = `Naciste en ${anio}. Año actual: ${new Date().getFullYear()}.`;
}


function iniciar() {
  const datos = pedirDatos();

  if (datos === null) {
    document.getElementById('mensaje').textContent = 'No ingresaste datos. Recarga la página o pulsa "Cambiar datos".';
    document.getElementById('detalle').textContent = '';
    return;
  }

  mostrarResultado(datos.nombre, datos.anio);
}


document.getElementById('btnRecalcular').addEventListener('click', function () {
  iniciar();
});


document.getElementById('btnMostrarEjemplo').addEventListener('click', function () {
  mostrarResultado('Ana', 1990);
});


window.addEventListener('load', iniciar);
