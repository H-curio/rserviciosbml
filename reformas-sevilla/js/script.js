// Validación básica (opcional)
document.getElementById('presupuestoForm').addEventListener('submit', function(e) {
  const files = document.querySelector('input[type="file"]').files;
  if (files.length > 3) {
    e.preventDefault();
    alert('Máximo 3 fotos por favor.');
  }
});

// Efecto de estrellas animadas (opcional)
console.log("✨ RServicios BML - Hecho con ❤️ para Sevilla");