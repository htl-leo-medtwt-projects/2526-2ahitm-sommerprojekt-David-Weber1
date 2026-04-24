const level1Container = document.getElementById('level1Container');
const level1StoryText = document.getElementById('level1StoryText');
const level1Decision1 = document.getElementById('level1Decision1');
const level1Decision2 = document.getElementById('level1Decision2');
const level1Decision1Text = document.getElementById('level1Decision1Text');
const level1Decision2Text = document.getElementById('level1Decision2Text');

let level1StoryBoard = document.getElementById('level1StoryBoard');
let level1StoryBoardImage = null;

if (level1StoryBoard) {
    level1StoryBoardImage = level1StoryBoard.querySelector('img');
}

let volcanoStory = {
    start: "intro",
    nodes: {
        intro: {
            text: "Story konnte nicht geladen werden.",
            choices: [
                { text: "Nochmal versuchen", next: "intro" }
            ]
        }
    }
};

let currentLevel1NodeId = "";

function isValidVolcanoStory(data) {
    if (data && data.start && data.nodes) {
        return true;
    }

    return false;
}

async function loadVolcanoStoryFromJson() {
    try {
        let response = await fetch("./data/volcano.json");

        if (!response.ok) {
            throw new Error("Fehler beim Laden");
        }

        let jsonStory = await response.json();

        if (isValidVolcanoStory(jsonStory)) {
            volcanoStory = jsonStory;
        }

    } catch (error) {
        console.log(error);
    }
}

function setChoice(button, textElement, choice) {
    if (!choice) {
        button.style.display = "none";
        return;
    }

    button.style.display = "inline-block";
    textElement.textContent = choice.text;
}

function renderLevel1Node(nodeId) {
    let node = volcanoStory.nodes[nodeId];

    if (!node) {
        return;
    }

    currentLevel1NodeId = nodeId;
    level1StoryText.textContent = node.text;

    if (level1StoryBoardImage) {
        if (node.ending) {
            level1StoryBoardImage.src = "./img/You-Died-PNG-Photos.png";
        } else {
            level1StoryBoardImage.src = "./img/Buttons/stone_board-removebg-preview.png";
        }
    }

    setChoice(level1Decision1, level1Decision1Text, node.choices[0]);
    setChoice(level1Decision2, level1Decision2Text, node.choices[1]);

    if (node.ending) {
        level1Decision1Text.textContent = "Nochmal spielen";
        level1Decision2.style.display = "none";
    }
}

function startLevel1Story() {
    renderLevel1Node(volcanoStory.start);
}

function advanceLevel1Story(index) {
    let node = volcanoStory.nodes[currentLevel1NodeId];

    if (node && node.choices[index]) {
        renderLevel1Node(node.choices[index].next);
    }
}

level1Decision1.addEventListener("click", function () {
    let node = volcanoStory.nodes[currentLevel1NodeId];

    if (node.ending) {
        startLevel1Story();
    } else {
        advanceLevel1Story(0);
    }
});

level1Decision2.addEventListener("click", function () {
    advanceLevel1Story(1);
});

level1Container.style.display = "none";

async function openLevel1() {
    if (levelPickContainer) {
        levelPickContainer.style.display = "none";
    }

    level1Container.style.display = "flex";

    await loadVolcanoStoryFromJson();
    startLevel1Story();
}

function closeLevel1() {
    level1Container.style.display = "none";
}

loadVolcanoStoryFromJson();