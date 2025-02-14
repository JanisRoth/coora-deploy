document.addEventListener('DOMContentLoaded', () => {
    const moveable = document.querySelector('.moveable');
    let followMouse = true;
    
    if (!moveable) return;

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            // Bewege das Objekt zu einer zufälligen Position
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            moveable.style.transform = `translate(${randomX}px, ${randomY}px)`;
        } else if (event.code === 'KeyP') {
            // Bewege das Objekt zu einer festen Position und stoppe Mausverfolgung
            moveable.style.transform = 'translate(1000px, 200px)';
            followMouse = false;
        }
    });

    document.addEventListener('mousemove', (event) => {
        if (followMouse) {
            moveable.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
    });
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}