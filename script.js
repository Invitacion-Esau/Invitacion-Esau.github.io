 
   const eventDate = new Date('2025-02-01T18:00:00');

   function updateCountdown() {
       const now = new Date();
       const timeLeft = eventDate - now;

       if (timeLeft <= 0) {
           document.getElementById('countdown').textContent = "¡El evento ha comenzado!";
           clearInterval(interval);
           return;
       }

       const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
       const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

       document.getElementById('countdown').textContent = `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
   }

   const interval = setInterval(updateCountdown, 1000);
   document.addEventListener('DOMContentLoaded', function () {
    new Splide('#galeria', {
        type: 'loop', 
        perPage: 1,   
        arrows: true, 
        pagination: false,
    }).mount();
});
