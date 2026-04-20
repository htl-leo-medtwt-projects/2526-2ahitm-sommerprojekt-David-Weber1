const level1Container = document.getElementById('level1Container');
const level1StoryText = document.getElementById('level1StoryText');
const level1Decision1 = document.getElementById('level1Decision1');
const level1Decision2 = document.getElementById('level1Decision2');
const level1Decision1Text = document.getElementById('level1Decision1Text');
const level1Decision2Text = document.getElementById('level1Decision2Text');
const level1StoryBoard = document.getElementById('level1StoryBoard');
const level1StoryBoardImage = level1StoryBoard ? level1StoryBoard.querySelector('img') : null;

let volcanoStory = {
    title: 'Der Fluch des Vulkans',
    start: 'intro',
    nodes: {
        intro: {
            text: 'Du bist ein Abenteurer, der einen mysteriösen Vulkan erforschen will. Einheimische warnen dich vor einem Fluch. Rauch steigt aus dem Krater auf.',
            choices: [
                { text: 'Den Vulkan besteigen', next: 'aufstieg' },
                { text: 'Im Dorf nach Informationen suchen', next: 'dorf' }
            ]
        },
        dorf: {
            text: "Ein alter Mann erzählt dir von einem Geist im Vulkan. 'Nimm diese Amulette', sagt er.",
            choices: [
                { text: 'Amulett annehmen und zum Vulkan gehen', next: 'aufstieg_mit_amulett' },
                { text: 'Ignorieren und direkt gehen', next: 'aufstieg' }
            ]
        },
        aufstieg: {
            text: 'Der Aufstieg ist gefährlich. Der Boden bebt leicht.',
            choices: [
                { text: 'Schnell weiterlaufen', next: 'sturz' },
                { text: 'Vorsichtig gehen', next: 'hoehle' }
            ]
        },
        aufstieg_mit_amulett: {
            text: 'Mit dem Amulett fühlst du dich sicherer. Der Boden bebt.',
            choices: [
                { text: 'Weitergehen', next: 'hoehle_mit_amulett' }
            ]
        },
        sturz: {
            text: 'Du rennst zu schnell, stolperst und fällst in eine Felsspalte.',
            ending: 'Du bist gestorben.'
        },
        hoehle: {
            text: 'Du findest eine Höhle mit zwei Wegen.',
            choices: [
                { text: 'Linker Tunnel', next: 'lavafluss' },
                { text: 'Rechter Tunnel', next: 'geist' }
            ]
        },
        hoehle_mit_amulett: {
            text: 'Die Höhle scheint ruhiger zu sein. Das Amulett leuchtet leicht.',
            choices: [
                { text: 'Dem Licht folgen', next: 'schatz' },
                { text: 'In die Dunkelheit gehen', next: 'geist' }
            ]
        },
        lavafluss: {
            text: 'Du erreichst einen Lavastrom, der plötzlich stärker wird.',
            choices: [
                { text: 'Springen', next: 'lava_tot' },
                { text: 'Umkehren', next: 'geist' }
            ]
        },
        lava_tot: {
            text: 'Du versuchst zu springen, aber die Hitze überwältigt dich.',
            ending: 'Du bist in der Lava verbrannt.'
        },
        geist: {
            text: 'Ein feuriger Geist erscheint vor dir.',
            choices: [
                { text: 'Kämpfen', next: 'kampf' },
                { text: 'Fliehen', next: 'flucht' }
            ]
        },
        kampf: {
            text: 'Du kämpfst tapfer, aber ohne Schutz bist du unterlegen.',
            ending: 'Der Geist besiegt dich. Du bist tot.'
        },
        flucht: {
            text: 'Du rennst weg, aber der Vulkan beginnt auszubrechen.',
            choices: [
                { text: 'Zum Ausgang sprinten', next: 'rettung' },
                { text: 'Verstecken', next: 'asche_tot' }
            ]
        },
        asche_tot: {
            text: 'Du versteckst dich, aber Asche füllt die Höhle.',
            ending: 'Du erstickst.'
        },
        rettung: {
            text: 'Du erreichst knapp den Ausgang und entkommst.',
            ending: 'Du hast überlebt!'
        },
        schatz: {
            text: 'Das Amulett führt dich zu einem geheimen Raum mit einem Schatz.',
            choices: [
                { text: 'Schatz nehmen', next: 'fluch' },
                { text: 'Schatz ignorieren und gehen', next: 'rettung' }
            ]
        },
        fluch: {
            text: 'Der Schatz ist verflucht. Der Geist erscheint erneut.',
            ending: 'Du wirst vom Fluch verschlungen.'
        }
    }
};

let hasLoadedVolcanoStoryFromJson = false;

function isValidVolcanoStory(data) {
    if (!data || typeof data !== 'object') {
        return false;
    }

    if (typeof data.start !== 'string') {
        return false;
    }

    if (!data.nodes || typeof data.nodes !== 'object') {
        return false;
    }

    return true;
}

async function loadVolcanoStoryFromJson() {
    if (hasLoadedVolcanoStoryFromJson) {
        return true;
    }

    try {
        const response = await fetch('./data/volcano.json', { cache: 'no-cache' });

        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        const jsonStory = await response.json();

        if (!isValidVolcanoStory(jsonStory)) {
            throw new Error('Invalid volcano story JSON structure.');
        }

        volcanoStory = jsonStory;
        hasLoadedVolcanoStoryFromJson = true;
        return true;
    } catch (error) {
        console.error('Could not load ./data/volcano.json. Using built-in fallback story.', error);
        return false;
    }
}


// Speichert den aktuellen Story-Abschnitt
let currentLevel1NodeId = null;


// Holt einen Node (Story-Teil)
function getLevel1Node(nodeId) {
    if (volcanoStory.nodes) {
        return volcanoStory.nodes[nodeId];
    } else {
        return null;
    }
}


// Zeigt einen Node an
function renderLevel1Node(nodeId) {
    const node = getLevel1Node(nodeId);

    // Wenn kein Node gefunden → abbrechen
    if (!node) {
        return;
    }

    currentLevel1NodeId = nodeId;

    // TEXT anzeigen
    if (level1StoryText) {
        if (node.text) {
            level1StoryText.textContent = node.text;
        } else {
            level1StoryText.textContent = '';
        }
    }

    // BILD setzen
    if (level1StoryBoardImage) {
        if (node.ending) {
            level1StoryBoardImage.src = './img/You-Died-PNG-Photos.png';
            level1StoryBoardImage.alt = 'You Died';
        } else {
            level1StoryBoardImage.src = './img/Buttons/stone_board-removebg-preview.png';
            level1StoryBoardImage.alt = 'STONEBOARD';
        }
    }

    // Entscheidungen vorbereiten
    let choices;
    if (Array.isArray(node.choices)) {
        choices = node.choices;
    } else {
        choices = [];
    }

    let firstChoice;
    if (choices[0]) {
        firstChoice = choices[0];
    } else {
        firstChoice = null;
    }

    let secondChoice;
    if (choices[1]) {
        secondChoice = choices[1];
    } else {
        secondChoice = null;
    }

    // BUTTON 1
    if (level1Decision1) {
        if (firstChoice) {
            level1Decision1.style.display = 'inline-block';
            level1Decision1.dataset.next = firstChoice.next;
        } else {
            level1Decision1.style.display = 'none';
            level1Decision1.dataset.next = '';
        }
    }

    if (level1Decision1Text) {
        if (firstChoice) {
            level1Decision1Text.textContent = firstChoice.text;
        } else {
            level1Decision1Text.textContent = '';
        }
    }

    // BUTTON 2
    if (level1Decision2) {
        if (secondChoice) {
            level1Decision2.style.display = 'inline-block';
            level1Decision2.dataset.next = secondChoice.next;
        } else {
            level1Decision2.style.display = 'none';
            level1Decision2.dataset.next = '';
        }
    }

    if (level1Decision2Text) {
        if (secondChoice) {
            level1Decision2Text.textContent = secondChoice.text;
        } else {
            level1Decision2Text.textContent = '';
        }
    }

    // Wenn Ende erreicht
    if (node.ending) {

        if (level1Decision1Text) {
            level1Decision1Text.textContent = 'Nochmal spielen';
        }

        if (level1Decision1) {
            level1Decision1.style.display = 'inline-block';
            level1Decision1.dataset.next = volcanoStory.start;
        }

        if (level1Decision2) {
            level1Decision2.style.display = 'none';
            level1Decision2.dataset.next = '';
        }
    }
}


// Story starten
function startLevel1Story() {
    renderLevel1Node(volcanoStory.start);
}


// Nächsten Schritt gehen
function advanceLevel1Story(choiceIndex) {
    const node = getLevel1Node(currentLevel1NodeId);

    if (!node) {
        return;
    }

    if (!Array.isArray(node.choices)) {
        return;
    }

    const choice = node.choices[choiceIndex];

    if (!choice) {
        return;
    }

    if (!choice.next) {
        return;
    }

    renderLevel1Node(choice.next);
}


// BUTTON 1 Klick
if (level1Decision1) {
    level1Decision1.addEventListener('click', function () {

        if (currentLevel1NodeId) {

            const currentNode = getLevel1Node(currentLevel1NodeId);

            if (currentNode) {
                if (currentNode.ending) {
                    startLevel1Story();
                    return;
                }
            }
        }

        advanceLevel1Story(0);
    });
}


// BUTTON 2 Klick
if (level1Decision2) {
    level1Decision2.addEventListener('click', function () {
        advanceLevel1Story(1);
    });
}


// Am Anfang verstecken
if (level1Container) {
    level1Container.style.display = 'none';
}


// Level öffnen
async function openLevel1() {

    if (levelPickContainer) {
        levelPickContainer.style.display = 'none';
    }

    if (level1Container) {
        level1Container.style.display = 'flex';
    }

    await loadVolcanoStoryFromJson();
    startLevel1Story();
}


// Level schließen
function closeLevel1() {
    if (level1Container) {
        level1Container.style.display = 'none';
    }
}

loadVolcanoStoryFromJson();