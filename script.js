// script.js
// Este archivo puede ser utilizado para añadir interactividad a la presentación.
// Por ahora, está vacío, pero puedes usarlo para:
// - Animaciones sutiles al hacer scroll.
// - Mostrar/ocultar detalles.
// - Navegación entre secciones si creas un menú.

console.log("Script de presentación cargado.");

// Ejemplo: Podrías añadir un listener para animar elementos al ser visibles
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: Desobservar después de que se active para evitar re-activaciones
                // observer.unobserve(entry.target); 
            } else {
                // Opcional: Remover clase si quieres que la animación se repita al salir y volver
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 // Activar cuando el 10% de la sección es visible
    });

    sections.forEach(section => {
        // Añadir una clase inicial para que los elementos se oculten por defecto si usas CSS para la animación
        section.classList.add('hidden'); 
        observer.observe(section);
    });
});

// Añade este CSS a tu style.css para que la animación funcione:
/*
section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}
*/
