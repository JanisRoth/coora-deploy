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
