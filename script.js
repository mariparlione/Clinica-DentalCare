
  // Cacular el 12% al valor del servicio.
function calcularTotal() {
  const precios = { limpieza: 30, extraccion: 50, ortodoncia: 100 };
  let subtotal = 0;
  document.querySelectorAll('input[name="servicio"]:checked').forEach(item => {
    subtotal += precios[item.value];
  });
  const iva = subtotal * 0.12;
  const total = subtotal + iva;

  document.getElementById('subtotal').innerText = subtotal.toFixed(2);
  document.getElementById('iva').innerText = iva.toFixed(2);
  document.getElementById('total').innerText = total.toFixed(2);
}

// Verificar si hay una cita disponible
function verificarCita() {
  const fecha = document.getElementById('fechaConsulta').value;
  if (!fecha) {
    alert('Por favor seleccione una fecha.');
    return;
  }
//Ejemplo para la verificación de cita. 
  const ocupadas = ['2025-07-15', '2025-07-20'];
  const disponible = !ocupadas.includes(fecha);
  const disponibilidad = document.getElementById('disponibilidad');
  if (disponible) {
    disponibilidad.innerText = '✅ Hay citas disponibles para este día.';
    disponibilidad.style.color = 'green';
  } else {
    disponibilidad.innerText = '❌ No hay citas disponibles para este día.';
    disponibilidad.style.color = 'red';
  }
}
