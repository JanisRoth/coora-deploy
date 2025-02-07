// Füge den Scroll-Event-Listener hinzu
window.addEventListener('scroll', () => {
    const container = document.querySelector('.image-container');
    const containerPosition = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    // Überprüfen, ob der Container im sichtbaren Bereich liegt
    if (containerPosition < windowHeight && containerPosition > -container.offsetHeight) {
        container.classList.add('revealed');
        container.classList.remove('hidden');
    } else if (containerPosition > windowHeight || containerPosition < -container.offsetHeight) {
        container.classList.add('hidden');
        container.classList.remove('revealed');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.slide-in').forEach((element) => {
    observer.observe(element);
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}
