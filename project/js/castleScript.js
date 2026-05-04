// DOM-Elemente Level 2
const level2Container = document.getElementById('level2Container');
const level2StoryText = document.getElementById('level2StoryText');
const level2Decision1 = document.getElementById('level2Decision1');
const level2Decision2 = document.getElementById('level2Decision2');
const level2Decision1Text = document.getElementById('level2Decision1Text');
const level2Decision2Text = document.getElementById('level2Decision2Text');
const level2StoryBoard = document.getElementById('level2StoryBoard');
const levelPickContainerLvl2 = document.getElementById('levelPickContainer');

// Story-Daten Level 2
let castleStory = {
    "start": "schlosstor",
    "nodes": {
        "schlosstor": {
            "text": "Du stehst vor den massiven Eichenpforten von Schloss Aethelgard. Ein kalter Wind heult durch die leeren Fensterbögen. Am Boden liegt eine verrostete Laterne.",
            "choices": [
                { "text": "Laterne anzünden", "next": "innenhof_licht" },
                { "text": "Im Dunkeln eintreten", "next": "innenhof_dunkel" }
            ]
        },
        "innenhof_licht": {
            "text": "Das warme Licht enthüllt Fußspuren im Staub, die zu einer verborgenen Falltür führen. Plötzlich hörst du ein Kettenrasseln aus dem Westturm.",
            "choices": [
                { "text": "Der Falltür folgen", "next": "kerker_geheim" },
                { "text": "Zum Westturm gehen", "next": "turmaufstieg" }
            ]
        },
        "innenhof_dunkel": {
            "text": "Du tappst im Dunkeln. Plötzlich greift eine knöcherne Hand nach deinem Arm! Ein Skelettwächter hat dich entdeckt.",
            "choices": [
                { "text": "Um dein Leben rennen", "next": "sturz_graben" },
                { "text": "Dich totstellen", "next": "gefangenahme" }
            ]
        },
        "kerker_geheim": {
            "text": "Die Falltür führt in eine alte Schatzkammer. In der Ecke funkelt ein silberner Schlüssel, doch der Raum füllt sich langsam mit Wasser.",
            "choices": [
                { "text": "Schlüssel greifen", "next": "thronsaal_zugang" },
                { "text": "Sofort umkehren", "next": "schlosstor" }
            ]
        },
        "turmaufstieg": {
            "text": "Die Stufen sind brüchig. Oben angekommen siehst du eine Hexe, die über einem Kessel braut. Sie bietet dir einen Trank an.",
            "choices": [
                { "text": "Trank trinken", "next": "verwandlung" },
                { "text": "Hexe schubsen", "next": "hexen_zorn" }
            ]
        },
        "thronsaal_zugang": {
            "text": "Mit dem silbernen Schlüssel öffnest du die Prunkpforte. Auf dem Thron sitzt ein bleicher Geisterkönig. Er fordert ein Rätselduell.",
            "choices": [
                { "text": "Herausforderung annehmen", "next": "raetsel_sieg" },
                { "text": "Den König angreifen", "next": "koenigs_fluch" }
            ]
        },
        "gefangenahme": {
            "text": "Die Skelette werfen dich in eine Zelle. Neben dir flüstert eine Stimme: 'Ich kenne den Ausweg, wenn du mir deine Stiefel gibst.'",
            "choices": [
                { "text": "Stiefel geben", "next": "geheimgang_befreiung" },
                { "text": "Ablehnen", "next": "kerker_tod" }
            ]
        },
        "geheimgang_befreiung": {
            "text": "Der Gefangene zeigt dir ein loses Mauerstück. Du kriechst hindurch und stehst direkt hinter dem Thronsaal.",
            "choices": [
                { "text": "Krone stehlen", "next": "diebes_ende" },
                { "text": "König stürzen", "next": "raetsel_sieg" }
            ]
        },
        "raetsel_sieg": {
            "text": "Du löst das Rätsel des Königs. Er lacht seit Jahrhunderten das erste Mal und schenkt dir sein Königreich.",
            "ending": "Sieg: Du bist der neue Herrscher von Aethelgard!"
        },
        "diebes_ende": {
            "text": "Du greifst nach der Krone, doch sie ist verflucht. Dein Körper wird zu massivem Gold und du wirst zur Statue.",
            "ending": "Sieg(?): Du bist nun Teil der Schlosssammlung – für immer."
        },
        "verwandlung": {
            "text": "Der Trank schmeckt nach Minze. Plötzlich wachsen dir Flügel! Du fliegst aus dem Turm in die Freiheit.",
            "ending": "Sieg: Du hast das Schloss als Adler verlassen!"
        },
        "sturz_graben": {
            "text": "Du übersiehst im Dunkeln die Kante und fällst in den tiefen Schlamm des Burggrabens. Die Rüstung zieht dich nach unten.",
            "ending": "Tod: Ertrunken in der Dunkelheit."
        },
        "hexen_zorn": {
            "text": "Die Hexe lacht nur. Mit einem Fingerschnippen verwandelt sie dich in eine fette Kröte.",
            "ending": "Tod: Du verbringst dein Leben mit Fliegenfangen."
        },
        "koenigs_fluch": {
            "text": "Dein Schwert gleitet durch den Geist. Er hebt die Hand und entzieht dir deine Lebensenergie.",
            "ending": "Tod: Deine Seele nährt nun den Geisterkönig."
        },
        "kerker_tod": {
            "text": "Ohne Hilfe findest du keinen Ausweg. Die Wachen kommen zur Fütterungszeit zurück...",
            "ending": "Tod: Vergessen in den Kerkern."
        }
    }
};


// Aktueller Knoten Level 2
let currentLvl2Node = "";

// Render-Funktion Level 2
function renderLevel2Node(nodeId) {
    let node = castleStory.nodes[nodeId];
    
    if (!node) return;
    
    currentLvl2Node = nodeId;
    let storyImg = level2StoryBoard ? level2StoryBoard.querySelector('img') : null;

    if (node.ending) {
        if (storyImg) {
            if (node.ending.includes('Tod')) {
                storyImg.src = "./img/You-Died-PNG-Photos.png";
            } else {
                storyImg.src = "./img/Buttons/achievmentBtnAndTrophie.png";
            }
        }
        if (level2StoryText) level2StoryText.textContent = node.ending;
        if (level2Decision1Text) level2Decision1Text.textContent = "Neu starten";
        if (level2Decision1) level2Decision1.style.visibility = "visible";
        if (level2Decision2) level2Decision2.style.visibility = "hidden";
    } else {
        if (level2StoryText) level2StoryText.textContent = node.text;
        if (storyImg) storyImg.src = "./img/Buttons/stone_board-removebg-preview.png";

        // Choice 1
        if (node.choices && node.choices[0]) {
            if (level2Decision1) level2Decision1.style.visibility = "visible";
            if (level2Decision1Text) level2Decision1Text.textContent = node.choices[0].text;
        } else {
            if (level2Decision1) level2Decision1.style.visibility = "hidden";
        }

        // Choice 2
        if (node.choices && node.choices[1]) {
            if (level2Decision2) level2Decision2.style.visibility = "visible";
            if (level2Decision2Text) level2Decision2Text.textContent = node.choices[1].text;
        } else {
            if (level2Decision2) level2Decision2.style.visibility = "hidden";
        }
    }
}

// Level 2 öffnen
function openLevel2() {
    if (levelPickContainerLvl2) levelPickContainerLvl2.style.display = "none";
    if (level2Container) level2Container.style.display = "flex";
    renderLevel2Node(castleStory.start);
}

// Level 2 schließen
function closeLevel2() {
    if (level2Container) level2Container.style.display = "none";
    if (levelPickContainerLvl2) levelPickContainerLvl2.style.display = "flex";
}

if (level2Decision1) {
    level2Decision1.addEventListener("click", () => {
        if (level2Container && level2Container.style.display === "flex" && currentLvl2Node !== "") {
            let node = castleStory.nodes[currentLvl2Node];
            if (node) {
                if (node.ending) {
                    renderLevel2Node(castleStory.start);
                } else if (node.choices && node.choices[0]) {
                    renderLevel2Node(node.choices[0].next);
                }
            }
        }
    });
}

if (level2Decision2) {
    level2Decision2.addEventListener("click", () => {
        if (level2Container && level2Container.style.display === "flex" && currentLvl2Node !== "") {
            let node = castleStory.nodes[currentLvl2Node];
            if (node && node.choices && node.choices[1]) {
                renderLevel2Node(node.choices[1].next);
            }
        }
    });
}