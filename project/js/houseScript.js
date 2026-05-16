// DOM-Elemente Level 4
const level4Container = document.getElementById('level4Container');
const level4StoryText = document.getElementById('level4StoryText');
const level4Decision1 = document.getElementById('level4Decision1');
const level4Decision2 = document.getElementById('level4Decision2');
const level4Decision1Text = document.getElementById('level4Decision1Text');
const level4Decision2Text = document.getElementById('level4Decision2Text');
const level4StoryBoard = document.getElementById('level4StoryBoard');

// Story-Daten Level 4 (house)
let megaHouseStory = {
    "start": "vorgarten",
    "nodes": {
        "vorgarten": {
            "text": "Du stehst im verwilderten Vorgarten eines riesigen, baufälligen Herrenhauses. Ringsherum gibt es nur gähnende Leere. Die Haustür knarrt im Wind. Auf den zerbrochenen Stufen liegt ein rostiges Brecheisen.",
            "choices": [
                { "text": "Brecheisen einstecken", "next": "eingang_bewaffnet" },
                { "text": "Ohne Werkzeug eintreten", "next": "eingang_unbewaffnet" }
            ]
        },
        "eingang_bewaffnet": {
            "text": "Das Brecheisen liegt schwer in deiner Hand. Das Knarren des Hauses klingt fast wie ein Flüstern. Vor dir teilen sich die Wege: Eine morsche Treppe führt hinauf in die staubige Bibliothek, und eine schwere Holztür führt direkt in die finstere Küche.",
            "choices": [
                { "text": "Zur Bibliothek hochgehen", "next": "bibliothek_ruine" },
                { "text": "In die Küche gehen", "next": "kuechen_erkundung" }
            ]
        },
        "bibliothek_ruine": {
            "text": "Zwischen umgestürzten Regalen brennt ein unnatürliches, grünes Feuer in einem Kamin. Eine rasselnde Standuhr beginnt plötzlich wild zu schlagen und blockiert den Ausgang. Das Brecheisen in deiner Hand vibriert.",
            "choices": [
                { "text": "Die Standuhr mit dem Brecheisen zertrümmern", "next": "uhr_zerbricht" },
                { "text": "Einen anderen Ausweg zwischen den Regalen suchen", "next": "kellerluke_entdeckung" }
            ]
        },
        "uhr_zerbricht": {
            "text": "Die Uhr zersplittert. Dahinter bricht die Wand auf und legt einen geheimen, staubigen Korridor frei, der steil nach unten in das Fundament des Hauses führt.",
            "choices": [
                { "text": "Den geheimen Korridor hinabsteigen", "next": "ritualraum_zugang" },
                { "text": "Umkehren und zur Küche gehen", "next": "kellerluke_entdeckung" }
            ]
        },
        "kellerluke_entdeckung": {
            "text": "Du erreichst die Küche. Der Gestank von Verfall liegt in der Luft. Eine Gestalt, die komplett in staubige Laken gehüllt ist, dreht sich zu dir um. Sie bietet dir eine goldene Medizin an im Tausch für dein Werkzeug.",
            "choices": [
                { "text": "Brecheisen abgeben und Medizin trinken", "next": "phanthom_kraft" },
                { "text": "Die Gestalt mit dem Brecheisen bedrohen", "next": "haus_fluch" }
            ]
        },
        "kuechen_erkundung": {
            "text": "Ein tollwütiger, halb verhungerter Wachhund springt hinter der Küchentheke hervor! Dank des schweren Brecheisens in deiner Hand zieht das Tier jedoch winselnd den Schwanz ein. Er stupst eine lose Bodenplatte im Speisekammerboden an.",
            "choices": [
                { "text": "Die Bodenplatte anheben", "next": "keller_labyrinth" },
                { "text": "Aus der Küche zurück in den Vorgarten rennen", "next": "vorgarten" }
            ]
        },
        "keller_labyrinth": {
            "text": "Unter dem Boden liegt ein Labyrinth aus alten Backsteingängen. Du erreichst eine Weggabelung: Ein Gang riecht nach altem Wein und Kerzenwachs, der andere nach beißendem Gas.",
            "choices": [
                { "text": "Dem Geruch nach Kerzenwachs folgen", "next": "ritualraum_zugang" },
                { "text": "Dem Gasgeruch folgen", "next": "keller_einsturz" }
            ]
        },
        "eingang_unbewaffnet": {
            "text": "Du betrittst das Haus ohne Schutz. Plötzlich brechen die morschen Dielen unter deinen Füßen weg und du stürzt tief hinab in eine Grube voller rostiger Armierungseisen und Schutt, die dich gefangen halten!",
            "choices": [
                { "text": "Wild um dich schlagen und versuchen freizukommen", "next": "sturz_schutt" },
                { "text": "Ruhig bleiben und ein trauriges Schlaflied summen", "next": "geist_rettung" }
            ]
        },
        "geist_rettung": {
            "text": "Dein Summen hallt durch die Leere. Der Geist eines kleinen Mädchens erscheint und befreit dich mit telekinetischer Kraft aus dem Schutt. Sie schwebt voran zu einem tiefen Brunnen im Innenhof.",
            "choices": [
                { "text": "In den dunklen Brunnen steigen", "next": "brunnen_abstieg" },
                { "text": "Dem Geist misstrauen und im Korridor bleiben", "next": "leere_tod" }
            ]
        },
        "brunnen_abstieg": {
            "text": "Der Abstieg ist nass und kalt. Unten angekommen wartet der Geist wieder und verlangt einen schrecklichen Tribut: 'Ich öffne das Tor zum Herz des Hauses, wenn du mir all deine Erinnerungen schenkst.'",
            "choices": [
                { "text": "Erinnerungen eintauschen", "next": "geheimgang_herz" },
                { "text": "Das Angebot ablehnen und weglaufen", "next": "wahnsinn_verirrung" }
            ]
        },
        "geheimgang_herz": {
            "text": "Der Geist entzieht dir deine Vergangenheit. Völlig orientierungslos, aber magisch geführt, kriechst du durch ein enges Abflussrohr und stehst plötzlich direkt hinter dem Altar im geheimen Kellerfundament.",
            "choices": [
                { "text": "Das pulsierende Haus-Amulett vom Altar stehlen", "next": "stein_ende" },
                { "text": "Dich dem zentralen Ur-Geist des Hauses unterwerfen", "next": "haus_sieg" }
            ]
        },
        "ritualraum_zugang": {
            "text": "Du betrittst ein riesiges, unterirdisches Gewölbe. Auf einem Altar schwebt ein rot glühendes Amulett – das Herz des Hauses. Der Raum verdunkelt sich, als sich ein riesiger Schatten aus Staub und Hass manifestiert und ein Opfer fordert.",
            "choices": [
                { "text": "Das eiserne Werkzeug opfern", "next": "haus_sieg" },
                { "text": "Das Amulett mit Gewalt an dich reißen", "next": "feuer_tod" }
            ]
        },
        "haus_sieg": {
            "text": "Der Schatten akzeptiert dein Opfer. Die erdrückende Präsenz verwandelt sich in pure Macht, die in deinen Körper fließt. Das Haus gehorcht nun deinem Willen.",
            "ending": "Sieg: Du bist der neue Lord des Anwesens und beherrschst die Geister des Hauses!"
        },
        "stein_ende": {
            "text": "Du reißt das Amulett an dich, doch die Rache des Hauses folgt sofort. Deine Haut wird grau, deine Glieder erstarren. Du wirst zu einer steinernen Wasserspeier-Statue.",
            "ending": "Sieg(?): Du bist nun ein ewiger, stummer Teil der Hausfassade – unsterblich, aber starr."
        },
        "phanthom_kraft": {
            "text": "Die goldene Medizin schmeckt nach Staub und purem Leben. Deine Muskeln spannen sich an, du wirst unsichtbar und kannst durch Wände gehen. Mühelos schwebst du durch die Mauern in die Freiheit.",
            "ending": "Sieg: Du hast das Haus als mächtiges Phantom verlassen!"
        },
        "sturz_schutt": {
            "text": "Deine Panik sorgt nur dafür, dass sich die scharfen Metallstangen tiefer in deinen Körper bohren. Der morsche Boden über dir bricht nach und begräbt dich endgültig.",
            "ending": "Tod: Gefangen und elendig erstickt unter den Trümmern des Hauses."
        },
        "haus_fluch": {
            "text": "Die verhüllte Gestalt lacht hohl. Sie deutet auf dich und deine Glieder verwandeln sich in morsche Holzbretter. Du wirst Teil des Küchenbodens.",
            "ending": "Tod: Du verbringst die Ewigkeit als knarrende Diele, auf die andere treten."
        },
        "feuer_tod": {
            "text": "Als deine Finger das Amulett berühren, explodiert der Altar in einer Welle aus unlöschbarem, schwarzem Feuer. Das gesamte Herrenhaus brennt innerhalb von Sekunden nieder.",
            "ending": "Tod: Zu Asche verbrannt – das Haus duldet keine gierigen Eindringlinge."
        },
        "leere_tod": {
            "text": "Ohne die Führung des Geistes verirrst du dich in den stockfinsteren Korridoren. Der Boden gibt nach und du stürzt in einen tiefen, unkartierten Brunnenschacht.",
            "ending": "Tod: Versunken und vergessen im eisigen Wasser tief unter dem Haus."
        },
        "keller_einsturz": {
            "text": "Das Gas entzündet sich an einem Funken deiner Schuhe. Eine gewaltige Explosion erschüttert das Fundament, die Decke bricht ein und begräbt dich unter Tonnen von Stein.",
            "ending": "Tod: Lebendig begraben im tiefsten Keller des Anwesens."
        },
        "wahnsinn_verirrung": {
            "text": "Du rennst ohne Erinnerung und ohne Licht durch die endlose Dunkelheit. Die Wände scheinen näher zu kommen, bis du völlig den Verstand verlierst.",
            "ending": "Tod: Als wahnsinnige Seele für immer in den leeren Räumen gefangen."
        }
    }
};

let currentLvl4Node = "";

function renderLevel4Node(nodeId) {
    let node = megaHouseStory.nodes[nodeId];
    if (!node) return;
    currentLvl4Node = nodeId;
    let storyImg = level4StoryBoard ? level4StoryBoard.querySelector('img') : null;

    if (node.ending) {
        if (storyImg) {
            if (node.ending.includes('Tod')) {
                storyImg.src = "./img/You-Died-PNG-Photos.png";
            } else {
                storyImg.src = "./img/Buttons/achievmentBtnAndTrophie.png";
            }
        }
        if (level4StoryText) level4StoryText.textContent = node.ending;
        if (level4Decision1Text) level4Decision1Text.textContent = "Neu starten";
        if (level4Decision1) level4Decision1.style.visibility = "visible";
        if (level4Decision2) level4Decision2.style.visibility = "hidden";
    } else {
        if (level4StoryText) level4StoryText.textContent = node.text;
        if (storyImg) storyImg.src = "./img/Buttons/stone_board-removebg-preview.png";

        if (node.choices && node.choices[0]) {
            if (level4Decision1) level4Decision1.style.visibility = "visible";
            if (level4Decision1Text) level4Decision1Text.textContent = node.choices[0].text;
        } else {
            if (level4Decision1) level4Decision1.style.visibility = "hidden";
        }

        if (node.choices && node.choices[1]) {
            if (level4Decision2) level4Decision2.style.visibility = "visible";
            if (level4Decision2Text) level4Decision2Text.textContent = node.choices[1].text;
        } else {
            if (level4Decision2) level4Decision2.style.visibility = "hidden";
        }
    }

    if (typeof gsap !== 'undefined' && level4StoryBoard) {
        gsap.fromTo(level4StoryBoard, {autoAlpha:0, y:20}, {duration:0.8, autoAlpha:1, y:0, ease: "power2.out"});
    }
}

function openLevel4() {
    const levelPick = document.getElementById('levelPickContainer');
    if (levelPick) levelPick.style.display = "none";
    if (level4Container) level4Container.style.display = "flex";
    renderLevel4Node(megaHouseStory.start);
}

function closeLevel4() {
    if (level4Container) level4Container.style.display = "none";
    const levelPick = document.getElementById('levelPickContainer');
    if (levelPick) levelPick.style.display = "flex";
}

if (level4Decision1) {
    level4Decision1.addEventListener("click", () => {
        if (level4Container && level4Container.style.display === "flex" && currentLvl4Node !== "") {
            let node = megaHouseStory.nodes[currentLvl4Node];
            if (node) {
                if (node.ending) {
                    renderLevel4Node(megaHouseStory.start);
                } else if (node.choices && node.choices[0]) {
                    renderLevel4Node(node.choices[0].next);
                }
            }
        }
    });
}

if (level4Decision2) {
    level4Decision2.addEventListener("click", () => {
        if (level4Container && level4Container.style.display === "flex" && currentLvl4Node !== "") {
            let node = megaHouseStory.nodes[currentLvl4Node];
            if (node && node.choices && node.choices[1]) {
                renderLevel4Node(node.choices[1].next);
            }
        }
    });
}
