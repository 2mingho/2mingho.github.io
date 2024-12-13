let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Referencias a elementos del DOM
const fullscreenView = document.getElementById('fullscreen-view');
const fullscreenImg = document.getElementById('fullscreen-img');
const images = document.querySelectorAll('.categoria_images img'); // Todas las imágenes en las categorías

// Función para mostrar la imagen en pantalla completa
function openFullscreen(src) {
    fullscreenImg.src = src; // Cambiar la fuente de la imagen
    fullscreenView.style.visibility = 'visible';
    fullscreenView.style.opacity = '1';
}

// Función para cerrar la vista de pantalla completa
function closeFullscreen() {
    fullscreenView.style.visibility = 'hidden';
    fullscreenView.style.opacity = '0';
    fullscreenImg.src = ''; // Limpiar la imagen
}

// Agregar evento click a cada imagen para abrirla en pantalla completa
images.forEach(img => {
    img.addEventListener('click', () => {
        openFullscreen(img.src);
    });
});

// Agregar evento click al botón de cierre
const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', closeFullscreen);

// Opcional: cerrar al hacer clic fuera de la imagen
fullscreenView.addEventListener('click', (event) => {
    if (event.target === fullscreenView) {
        closeFullscreen();
    }
});

