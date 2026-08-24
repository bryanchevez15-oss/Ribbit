document.addEventListener('DOMContentLoaded', () => {
  // 1. Cargar dinámicamente las 11 imágenes Polaroid con animación 3D Tilt
  const catalogContainer = document.getElementById('catalog-container');
  const totalImages = 11;

  for (let i = 1; i <= totalImages; i++) {
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    
    // Configuración para el efecto 3D al interactuar con el mouse
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

  // Inicializar efecto 3D Tilt en las Polaroid
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.polaroid'));
  }

  // 2. Enviar mensaje de cotización a WhatsApp
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