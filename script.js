document.addEventListener('DOMContentLoaded', () => {
  // 1. Seguimiento suave de luz neón con el mouse
  const cursorGlow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // 2. Generar las 11 Polaroid del Catálogo
  const catalogContainer = document.getElementById('catalog-container');
  const catalogSection = document.getElementById('catalogo');
  const btnToggleCatalog = document.getElementById('btnToggleCatalog');
  const totalImages = 11;

  for (let i = 1; i <= totalImages; i++) {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    
    // Atributos para efecto 3D al pasar el cursor
    polaroid.setAttribute('data-tilt', '');
    polaroid.setAttribute('data-tilt-max', '10');
    polaroid.setAttribute('data-tilt-speed', '300');
    polaroid.setAttribute('data-tilt-glare', 'true');
    polaroid.setAttribute('data-tilt-max-glare', '0.15');

    polaroid.innerHTML = `
      <div class="polaroid-img-box">
        <img src="img/catalogo/cat${i}.jpeg" alt="Diseño Hama Bead ${i}" onerror="this.src='https://via.placeholder.com/300x350?text=Ribbead+Dise%C3%B1o+${i}'">
      </div>
      <div class="polaroid-caption">Diseño #${i}</div>
    `;

    catalogContainer.appendChild(polaroid);
  }

  // Inicializar efecto 3D Tilt
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.polaroid'));
  }

  // 3. Mostrar / Ocultar el catálogo al presionar el botón
  btnToggleCatalog.addEventListener('click', () => {
    if (catalogSection.classList.contains('hidden-section')) {
      catalogSection.classList.remove('hidden-section');
      btnToggleCatalog.innerHTML = '<span>Ocultar Catálogo 🙈</span>';
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      catalogSection.classList.add('hidden-section');
      btnToggleCatalog.innerHTML = '<span>Explorar Catálogo 📦</span>';
    }
  });

  // 4. Enviar idea a WhatsApp
  const btnSend = document.getElementById('btnSend');
  btnSend.addEventListener('click', sendToWhatsApp);

  function sendToWhatsApp() {
    const text = document.getElementById('ideaInput').value.trim();
    const phone = "50379097793";

    if (!text) {
      alert("Por favor, escribe tu idea antes de consultar.");
      return;
    }

    const message = encodeURIComponent(`Hola Ribbead 🐸, me gustaría cotizar una idea personalizada:\n\n"${text}"`);
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }
});