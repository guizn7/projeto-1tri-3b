// Alterar o tamanho da fonte ao aumentar
document.getElementById('font-increase').addEventListener('click', () => {
    const currentZoom = parseFloat(document.body.style.zoom) || 1; // Verifica o zoom atual
    document.body.style.zoom = currentZoom * 1.1; // Aumenta 10% o zoom
});

// Alterar o tamanho da fonte ao diminuir
document.getElementById('font-decrease').addEventListener('click', () => {
    const currentZoom = parseFloat(document.body.style.zoom) || 1; // Verifica o zoom atual
    document.body.style.zoom = currentZoom / 1.1; // Diminui 10% o zoom
});

// Alternar alto contraste
document.getElementById('high-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Transição suave ao rolar para uma seção
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightbox = document.getElementById('close-lightbox');

// Abrir lightbox ao clicar em uma imagem dos cards de problemas ou soluções
document.querySelectorAll('.problem-card img, .solution-card img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = img.src;
    });
});

// Fechar lightbox ao clicar no "X"
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Fechar lightbox ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});