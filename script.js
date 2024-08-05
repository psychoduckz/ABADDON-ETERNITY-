document.addEventListener('DOMContentLoaded', function() {
    const countdownButton = document.getElementById('countdownButton');
    const discordButton = document.getElementById('discordButton');

    let countdown = 5;
    const countdownInterval = setInterval(() => {
        countdownButton.textContent = countdown;
        if (countdown === 1) {
            clearInterval(countdownInterval);
            countdownButton.classList.add('fade-out');
            setTimeout(() => {
                countdownButton.textContent = 'DOWNLOAD';
                countdownButton.classList.remove('fade-out');
                countdownButton.classList.add('fade-in');
                countdownButton.onclick = function() {
                    window.location.href = 'https://t.me/+Q7xVVxVLT74zYmIx';
                };
            }, 1000); // Tempo da animação
        }
        countdown--;
    }, 1000);

    discordButton.onclick = function() {
        window.location.href = 'https://discord.com/invite/NNUgMw3WUW';
    };
});
