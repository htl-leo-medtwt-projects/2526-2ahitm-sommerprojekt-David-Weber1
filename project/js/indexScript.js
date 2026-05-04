const audio = new Audio('./js/audio/mainTheme.mp3');
const audioBox = document.getElementById('audioBox');
audio.loop = true;

function closeAudioBox() {
    if (!audioBox) return;
    if (typeof gsap !== 'undefined') {
        gsap.to(audioBox, {duration: 0.6, autoAlpha: 0, y: -20, ease: "power2.in", onComplete: () => {
            audioBox.style.display = 'none';
        }});
    } else {
        audioBox.style.display = 'none';
    }
}
function startAudio() {
    audio.play();
    closeAudioBox();
}
function declineAudio() {
    audio.pause();
    closeAudioBox();
}
function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// animate audioBox on load
document.addEventListener('DOMContentLoaded', () => {
    if (!audioBox) return;
    if (typeof gsap !== 'undefined') {
        audioBox.style.display = 'block';
        gsap.fromTo(audioBox, {autoAlpha: 0, y: -20}, {duration: 0.8, autoAlpha: 1, y: 0, ease: "power2.out"});
    }
});

const tutorialContainer = document.getElementById('tutorialContainer');
const achievementsContainer = document.getElementById('achievementsContainer');
const levelPickContainer = document.getElementById('levelPickContainer');

function openTutorial() {
    if (tutorialContainer) tutorialContainer.style.display = 'flex';
}
function closeTutorial() {
    if (tutorialContainer) tutorialContainer.style.display = 'none';
}

function openAchievments() {
    if (achievementsContainer) achievementsContainer.style.display = 'flex';
}
function closeAchievments() {
    if (achievementsContainer) achievementsContainer.style.display = 'none';
}

function openLevelPick() {
    if (levelPickContainer) levelPickContainer.style.display = 'flex';
}
function closeLevelPick() {
    if (levelPickContainer) levelPickContainer.style.display = 'none';
}