// File preview
document.getElementById('fileInput')?.addEventListener('change', function(e) {
  const preview = document.getElementById('filePreview');
  preview.innerHTML = '';
  const files = Array.from(e.target.files).slice(0, 3);
  files.forEach(file => {
    if (!file.type.match('image.*')) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      preview.appendChild(img);
    }
    reader.readAsDataURL(file);
  });
});

// Form submission
document.getElementById('presupuestoForm')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const submitBtn = this.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  
  // Aquí iría tu endpoint de Formspree
  const endpoint = this.getAttribute('action');
  if (endpoint === '#' || !endpoint) {
    alert('⚠️ Formulario no configurado. Reemplaza el action con tu endpoint de Formspree.');
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    return;
  }
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      alert('✅ ¡Gracias! Tu presupuesto ha sido enviado. Nos contactaremos en menos de 1 hora.');
      this.reset();
      document.getElementById('filePreview').innerHTML = '';
    } else {
      throw new Error('Error en el envío');
    }
  } catch (error) {
    alert('❌ Error al enviar. Por favor, inténtalo de nuevo o llama al 602 638 653.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
