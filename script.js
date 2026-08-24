document.addEventListener('DOMContentLoaded', () => {
  // 1. Cargar dinámicamente las 11 imágenes Polaroid
  const catalogContainer = document.getElementById('catalog-container');
  const catalogSection = document.getElementById('catalogo');
  const btnToggleCatalog = document.getElementById('btnToggleCatalog');
  const totalImages = 11;

  for (let i = 1; i <= totalImages; i++) {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    
    polaroid.setAttribute('data-tilt', '');
    polaroid.setAttribute('data-tilt-max', '12');
    polaroid.setAttribute('data-tilt-speed', '400');
    polaroid.setAttribute('data-tilt-glare', 'true');
    polaroid.setAttribute('data-tilt-max-glare', '0.2');

    polaroid.innerHTML = `
      <img src="img/catalogo/cat${i}.jpeg" alt="Diseño Hama Bead ${i}" onerror="this.src='https://via.placeholder.com/250?text=Hama+Bead+${i}'">
      <div class="polaroid-caption">Diseño #${i}</div>
    `;

    catalogContainer.appendChild(polaroid);
  }

  // Inicializar efecto 3D Tilt
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.polaroid'));
  }

  // 2. Alternar la visibilidad del catálogo al hacer clic en el botón
  btnToggleCatalog.addEventListener('click', () => {
    if (catalogSection.classList.contains('hidden-section')) {
      catalogSection.classList.remove('hidden-section');
      btnToggleCatalog.textContent = 'Ocultar Catálogo 🙈';
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      catalogSection.classList.add('hidden-section');
      btnToggleCatalog.textContent = 'Explorar Catálogo 📦';
    }
  });

  // 3. Enviar mensaje a WhatsApp
  const btnSend = document.getElementById('btnSend');
  btnSend.addEventListener('click', sendToWhatsApp);

  function sendToWhatsApp() {
    const text = document.getElementById('ideaInput').value.trim();
    const phone = "50379097793";

    if (!text) {
      alert("Por favor, escribe tu idea antes de enviar.");
      return;
    }

    const message = encodeURIComponent(`Hola Ribbead 🐸, me gustaría cotizar una idea personalizada:\n\n"${text}"`);
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }
});