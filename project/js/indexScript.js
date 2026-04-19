
//Audio settings usw.

const audio = new Audio('./js/audio/mainTheme.mp3');
const audioBox = document.getElementById('audioBox');
audio.loop = true;

function closeAudioBox() {
    if (audioBox) {
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
        return;
    }

    audio.pause();
}




//hier werden die ganzen "unterseiten" geschlossen oder geöffnet, einmal selber gemacht
//dann mit ki für die anderen angepasst
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

const achievementsContainer = document.getElementById('achievementsContainer');

if (achievementsContainer) {
    achievementsContainer.style.display = 'none';
}

function openAchievments() {
    if (achievementsContainer) {
        achievementsContainer.style.display = 'flex';
    }
}

function closeAchievments() {
    if (achievementsContainer) {
        achievementsContainer.style.display = 'none';
    }
}

const levelPickContainer = document.getElementById('levelPickContainer');

if (levelPickContainer) {
    levelPickContainer.style.display = 'none';
}

function openLevelPick() {
    if (levelPickContainer) {
        levelPickContainer.style.display = 'flex';
    }
}

function closeLevelPick() {
    if (levelPickContainer) {
        levelPickContainer.style.display = 'none';
    }
}

