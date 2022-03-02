const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
    text.textContent = 'Inhale';

    container.classList.replace('shrink', 'grow');
    setTimeout(() => {
        text.textContent = 'HOLD';
        setTimeout(() => {
            container.classList.replace('grow', 'shrink');
            text.textContent = 'Exhale';
        }, holdTime);
    }, breatheTime);
};

breathAnimation();

setInterval(breathAnimation, totalTime);
