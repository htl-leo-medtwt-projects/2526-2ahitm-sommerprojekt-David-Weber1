const audio = new Audio('./js/audio/mainTheme.mp3');

function startAudio() {
    audio.play();
}

const tutorialContainer = document.getElementById('tutorialContainer');

if (tutorialContainer) {
    tutorialContainer.style.display = 'none';
}

function openTutorial() {
    if (tutorialContainer) {
        tutorialContainer.style.display = 'flex';
    }
}

function closeTutorial() {
    if (tutorialContainer) {
        tutorialContainer.style.display = 'none';
    }
}