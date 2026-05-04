// DOM-Elemente Level 1
const level1Container = document.getElementById('level1Container');
const level1StoryText = document.getElementById('level1StoryText');
const level1Decision1 = document.getElementById('level1Decision1');
const level1Decision2 = document.getElementById('level1Decision2');
const level1Decision1Text = document.getElementById('level1Decision1Text');
const level1Decision2Text = document.getElementById('level1Decision2Text');
const level1StoryBoard = document.getElementById('level1StoryBoard');

// Story-Daten Level 1
let volcanoStory = {
    "start": "intro",
    "nodes": {
        "intro": {
            "text": "Der Boden unter deinen Stiefeln ist heiß. Der Vulkan 'Ignis' grollt bedrohlich. Am Horizont siehst du ein verlassenes Dorf, während der Pfad zum Gipfel steil und aschebedeckt ist.",
            "choices": [
                { "text": "Den Gipfel stürmen", "next": "aufstieg" },
                { "text": "Im Dorf Schutz suchen", "next": "dorf" }
            ]
        },
        "dorf": {
            "text": "In den Ruinen triffst du einen Eremiten. Seine Augen leuchten unnatürlich. Er bietet dir ein Obsidian-Amulett an: 'Es flüstert mit dem Feuer, Reisender.'",
            "choices": [
                { "text": "Amulett annehmen", "next": "aufstieg_mit_amulett" },
                { "text": "Misstrauisch gehen", "next": "aufstieg_misstrauisch" }
            ]
        },
        "aufstieg": {
            "text": "Ohne Vorwarnung bricht der Pfad weg! Schwefelgase rauben dir den Atem. Du siehst eine dunkle Spalte und einen rutschigen Hang.",
            "choices": [
                { "text": "In die Spalte springen", "next": "hoehle" },
                { "text": "Den Hang hinabrennen", "next": "sturz" }
            ]
        },
        "aufstieg_misstrauisch": {
            "text": "Du hast das Dorf verlassen, aber das Grollen wird lauter. Ein Lavastrom versperrt den Hauptweg. Du musst klettern.",
            "choices": [
                { "text": "Steilwand klettern", "next": "absturz_klettern" },
                { "text": "Umweg durch Tunnel", "next": "hoehle" }
            ]
        },
        "aufstieg_mit_amulett": {
            "text": "Das Amulett vibriert an deiner Brust. Plötzlich teilt sich der dichte Rauch und offenbart einen geheimen Pfad, der sicher am Lavastrom vorbeiführt.",
            "choices": [
                { "text": "Dem Pfad folgen", "next": "magma_kammer" },
                { "text": "Die Warnung ignorieren", "next": "aufstieg" }
            ]
        },
        "magma_kammer": {
            "text": "Du erreichst das Herz des Vulkans. Die Wände glühen. In der Mitte schwebt ein flammendes Schwert. Das Amulett glüht jetzt hellblau.",
            "choices": [
                { "text": "Schwert greifen", "next": "waechter_kampf" },
                { "text": "Raum untersuchen", "next": "geheimnis_altar" }
            ]
        },
        "geheimnis_altar": {
            "text": "Hinter einem Altar findest du eine alte Inschrift: 'Nur wer das Herz des Vulkans schützt, darf überleben.' Die Lava steigt!",
            "choices": [
                { "text": "Amulett opfern", "next": "vulkan_beruhigt" },
                { "text": "Flüchten", "next": "flucht_einsturz" }
            ]
        },
        "waechter_kampf": {
            "text": "Ein gewaltiger Feuer-Golem bricht aus dem Boden! Er schwingt eine Faust aus flüssigem Gestein.",
            "choices": [
                { "text": "Mit Amulett blocken", "next": "sieg_golem" },
                { "text": "Ausweichen", "next": "kampf_tod" }
            ]
        },
        "hoehle": {
            "text": "Die Höhle ist voller giftiger Dämpfe. Du siehst ein leuchtendes Moos, das Luft zu reinigen scheint, aber es liegt direkt über einem Abgrund.",
            "choices": [
                { "text": "Nach Moos greifen", "next": "sturz" },
                { "text": "Tiefer in die Dunkelheit", "next": "geist_begegnung" }
            ]
        },
        "geist_begegnung": {
            "text": "Ein Geist in antiker Rüstung versperrt den Weg. 'Niemand raubt das Gold der Ahnen!', brüllt er.",
            "choices": [
                { "text": "Um Vergebung bitten", "next": "geist_gnade" },
                { "text": "Angreifen", "next": "geist_tod" }
            ]
        },
        "vulkan_beruhigt": {
            "text": "Als du das Amulett opferst, erstarrt die Lava zu schwarzem Glas. Der Vulkan schläft ein. Ein Portal in deine Heimat öffnet sich.",
            "ending": "Sieg: Du bist der Bezwinger des Ignis!"
        },
        "sieg_golem": {
            "text": "Das Amulett absorbiert die Hitze des Golems. Er zerfällt zu Staub und hinterlässt einen unschätzbaren Diamanten.",
            "ending": "Sieg: Du bist reich und legendär!"
        },
        "geist_gnade": {
            "text": "Der Geist erkennt deine Ehrlichkeit. Er zeigt dir einen Tunnel, der voller alter Münzen ist und sicher nach draußen führt.",
            "ending": "Sieg: Du entkommst mit dem Gold der Ahnen!"
        },
        "sturz": {
            "text": "Der Boden gibt nach. Du fällst in die endlose Tiefe der Magmaschächte.",
            "ending": "Tod: Die Hitze war zu stark."
        },
        "absturz_klettern": {
            "text": "Deine Hände finden keinen Halt am heißen Fels. Du rutschst ab.",
            "ending": "Tod: Der Vulkan hat dich verschlungen."
        },
        "kampf_tod": {
            "text": "Der Golem ist zu schnell. Eine Hitzewelle überrollt dich.",
            "ending": "Tod: Zu Asche verbrannt."
        },
        "geist_tod": {
            "text": "Deine Klinge geht durch den Geist hindurch. Sein eisiger Hauch lässt dein Herz gefrieren.",
            "ending": "Tod: Deine Seele gehört nun dem Vulkan."
        },
        "flucht_einsturz": {
            "text": "Die Kammer bricht zusammen. Du wirst unter Tonnen von Gestein begraben.",
            "ending": "Tod: Die Gier war dein Ende."
        }
    }
};

// Aktueller Knoten
let currentLvl1Node = "";

// Render-Funktion für Level 1
function renderLevel1Node(nodeId) {
    let node = volcanoStory.nodes[nodeId];
    
    if (!node) {
        return;
    }
    
    currentLvl1Node = nodeId;
    let storyImg = level1StoryBoard.querySelector('img');

    if (node.ending) {
        if (storyImg) {
            if (node.ending.includes('Tod')) {
                storyImg.src = "./img/You-Died-PNG-Photos.png";
            } else {
                storyImg.src = "./img/Buttons/achievmentBtnAndTrophie.png";
            }
        }
        level1StoryText.textContent = node.ending;
        if (typeof gsap !== 'undefined' && level1StoryBoard) {
            gsap.fromTo(level1StoryBoard, {autoAlpha:0, y:20}, {duration:0.8, autoAlpha:1, y:0, ease: "power2.out"});
        }
        level1Decision1Text.textContent = "Neu starten";
        level1Decision1.style.visibility = "visible";
        level1Decision2.style.visibility = "hidden";
    } else {
        level1StoryText.textContent = node.text;
        if (storyImg) {
            storyImg.src = "./img/Buttons/stone_board-removebg-preview.png";
        }
        
        // Choice 1
        if (node.choices[0]) {
            level1Decision1.style.visibility = "visible";
            level1Decision1Text.textContent = node.choices[0].text;
        } else {
            level1Decision1.style.visibility = "hidden";
        }
        
        // Choice 2
        if (node.choices[1]) {
            level1Decision2.style.visibility = "visible";
            level1Decision2Text.textContent = node.choices[1].text;
        } else {
            level1Decision2.style.visibility = "hidden";
        }
        if (typeof gsap !== 'undefined' && level1StoryBoard) {
            gsap.fromTo(level1StoryBoard, {autoAlpha:0, y:20}, {duration:0.8, autoAlpha:1, y:0, ease: "power2.out"});
        }
    }
}

// Level 1 öffnen
function openLevel1() {
    document.getElementById('levelPickContainer').style.display = "none";
    level1Container.style.display = "flex";
    renderLevel1Node(volcanoStory.start);
}

// Level 1 schließen
function closeLevel1() {
    level1Container.style.display = "none";
    document.getElementById('levelPickContainer').style.display = "flex";
}

// Entscheidungs-Handler
level1Decision1.addEventListener("click", () => {
    let node = volcanoStory.nodes[currentLvl1Node];
    if (node && node.ending) {
        renderLevel1Node(volcanoStory.start);
    } else if (node && node.choices && node.choices[0]) {
        renderLevel1Node(node.choices[0].next);
    }
});

level1Decision2.addEventListener("click", () => {
    let node = volcanoStory.nodes[currentLvl1Node];
    if (node && node.choices && node.choices[1]) {
        renderLevel1Node(node.choices[1].next);
    }
});