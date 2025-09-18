document.addEventListener('DOMContentLoaded', function() {
    // Get button and element references using your HTML classes
    const playBtn = document.querySelector('.play-btn');
    const presentBtn = document.querySelector('.present-btn');
    const flame = document.querySelector('.flame');
    const note = document.querySelector('.note');
    const card = document.querySelector('.card');

    // Path to the local birthday song in your music folder
    const audio = new Audio('music/Birthday.mp3');

    // Create confetti elements and add them to the body
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);
    }
    
    // 1. Play button functionality
    playBtn.addEventListener('click', function() {
        // Play the audio
        audio.play();

        // After 10 seconds, extinguish the flame smoothly
        setTimeout(() => {
            flame.classList.add('out');
            


            const smoke = document.querySelector('.smoke');
            if (smoke) {
            smoke.classList.add('show');
            setTimeout(() => {
                smoke.classList.remove('show');
            }, 3000);
            }


            
        }, 10000); // 10000 milliseconds = 10 seconds
    });

    // 2. "Ábreme" (Open Me) button functionality
    presentBtn.addEventListener('click', function() {
        // Show the note and trigger the confetti
        note.classList.add('show');
        card.classList.add('show-note'); // Add a class to the card to handle z-index and overflow if needed

        // Trigger confetti fall animation
        const confettiPieces = document.querySelectorAll('.confetti');
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];

        confettiPieces.forEach(piece => {
            const size = Math.random() * 10 + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = Math.random() * 3 + 3;
            
            piece.style.width = `${size}px`;
            piece.style.height = `${size}px`;
            piece.style.backgroundColor = color;
            piece.style.left = `${left}vw`;
            piece.style.top = '-20px';
            piece.style.opacity = '1';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            piece.style.animation = `fall ${duration}s linear ${delay}s forwards`;
        });
    });
});