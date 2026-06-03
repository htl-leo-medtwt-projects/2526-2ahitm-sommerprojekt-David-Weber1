const level3Container = document.getElementById('level3Container');
const level3StoryText = document.getElementById('level3StoryText');
const level3Decision1 = document.getElementById('level3Decision1');
const level3Decision2 = document.getElementById('level3Decision2');
const level3Decision1Text = document.getElementById('level3Decision1Text');
const level3Decision2Text = document.getElementById('level3Decision2Text');
const level3StoryBoard = document.getElementById('level3StoryBoard');

let megaForestStory = {
    "start": "waldrand",
    "nodes": {
        "waldrand": {
            "image": "./img/Backgrounds/startBgImgForest.png",
            "text": "Du stehst am Rand des Finsterwaldes. Die Äste der uralten Bäume wirken wie knöcherne Finger. Ein dichter Nebel kriecht über den Boden. Am Pfad liegt ein ritueller Opferdolch.",
            "choices": [
                { "text": "Dolch einstecken", "next": "pfad_bewaffnet" },
                { "text": "Ohne Waffe weitergehen", "next": "pfad_unbewaffnet" }
            ]
        },
        "pfad_bewaffnet": {
            "image": "./img/Backgrounds/darkForestBg.jpg",
            "text": "Der Dolch vibriert in deiner Tasche und leuchtet schwach rot. Das Licht enthüllt zwei Wege: Einen Pfad, der zu den Ruinen einer vergessenen Elfenstadt führt, und ein tiefes, dunkles Dickicht, aus dem ein Knurren ertönt.",
            "choices": [
                { "text": "Zu den Ruinen gehen", "next": "elfen_ruinen" },
                { "text": "Ins Dickicht gehen", "next": "wolfsjagd" }
            ]
        },
        "elfen_ruinen": {
            "image": "./img/Backgrounds/woods_Story/elfen_ruinen.png",
            "text": "Zwischen moosbedeckten Säulen brennt ein blaues Feuer. Eine uralte Steinstatue erwacht zum Leben und versperrt den Weg. Der Dolch in deiner Hand beginnt heiß zu werden.",
            "choices": [
                { "text": "Dolch in die Statue rammen", "next": "statue_zerbricht" },
                { "text": "Einen Bogen um die Statue machen", "next": "hexenhuette_entdeckung" }
            ]
        },
        "statue_zerbricht": {
            "text": "Die Statue zerfällt zu Staub. Dahinter formiert sich der Nebel zu einer geisterhaften Brücke, die über einen bodenlosen Abgrund zu einem schwebenden Altar führt.",
            "choices": [
                { "text": "Die Nebelbrücke überqueren", "next": "altarraum_zugang" },
                { "text": "Umkehren und zur Hexe gehen", "next": "hexenhuette_entdeckung" }
            ]
        },
        "hexenhuette_entdeckung": {
            "image": "./img/Backgrounds/woods_Story/hexenhuette_entdeckunhg.png",
            "text": "Du erreichst eine Hütte, die auf riesigen Krähenfüßen steht. Die Tür öffnet sich und eine alte Waldhexe blickt heraus. Sie bietet dir ein leuchtendes Elixier an im Tausch für deine Waffe.",
            "choices": [
                { "text": "Dolch abgeben und Elixier trinken", "next": "baeren_kraft" },
                { "text": "Die Hexe mit dem Dolch bedrohen", "next": "hexen_fluch" }
            ]
        },
        "wolfsjagd": {
            "image": "./img/Backgrounds/woods_Story/wolfsjagd.png",
            "text": "Ein riesiger Schattenwolf springt aus dem Gebüsch! Dank des rituellen Dolches weicht die Bestie jedoch zurück. Sie packt dich am Ärmel und zieht dich sanft zu einem geheimen, unterirdischen Höhleneingang.",
            "choices": [
                { "text": "In die Höhle hinabsteigen", "next": "hoehlen_labyrinth" },
                { "text": "Den Wolf vertreiben", "next": "waldrand" }
            ]
        },
        "hoehlen_labyrinth": {
            "text": "Die Höhle ist voller leuchtender Pilze. Du erreichst eine Weggabelung: Ein Gang riecht nach frischem Quellwasser, der andere nach verbranntem Schwefel.",
            "choices": [
                { "text": "Dem Wassergeruch folgen", "next": "altarraum_zugang" },
                { "text": "Dem Schwefelgeruch folgen", "next": "hoehlen_einsturz" }
            ]
        },
        "pfad_unbewaffnet": {
            "text": "Du läufst ungeschützt durch das Unterholz. Plötzlich bricht der Boden unter dir weg und du stürzt in eine tiefe Grube voller dorniger Ranken, die sich sofort um deine Beine schlingen!",
            "choices": [
                { "text": "Wild um dich schlagen", "next": "sturz_dornen" },
                { "text": "Ruhig bleiben und ein altes Schlaflied singen", "next": "irrlicht_rettung" }
            ]
        },
        "irrlicht_rettung": {
            "text": "Dein Gesang beruhigt die Ranken. Ein kleines Irrlicht erscheint und schneidet dich mit magischem Licht frei. Es führt dich zu einem nebligen Fluss, an dem ein stummer Fährmann wartet.",
            "choices": [
                { "text": "Auf das Boot steigen", "next": "bootsfahrt_nebel" },
                { "text": "Dem Flussufer zu Fuß folgen", "next": "moor_tod" }
            ]
        },
        "bootsfahrt_nebel": {
            "image": "./img/Backgrounds/woods_Story/bootsfahrt_nebel.png",
            "text": "Die Fahrt ist totenstill. Am anderen Ufer angekommen, verlangt der Fährmann einen Tribut: 'Ich zeige dir den Weg zum Herz des Waldes, wenn du mir all deine Erinnerungen schenkst.'",
            "choices": [
                { "text": "Erinnerungen eintauschen", "next": "geheimgang_lichtung" },
                { "text": "Das Angebot ablehnen und wegrennen", "next": "nebel_verirrung" }
            ]
        },
        "geheimgang_lichtung": {
            "text": "Das Irrlicht saugt deine Vergangenheit auf. Geistig völlig leer, aber sicher geführt, kriechst du durch einen hohlen Baumstamm und stehst plötzlich direkt hinter dem Altar des Waldgeistes.",
            "choices": [
                { "text": "Das schlafende Herz des Waldes stehlen", "next": "moos_ende" },
                { "text": "Dich vor dem Waldgeist hinknien", "next": "wald_sieg" }
            ]
        },
        "altarraum_zugang": {
            "text": "Du betrittst den zentralen Steinkreis. Auf einem Altar ruht das pulsierende, grüne Herz des Waldes. Ein riesiger Waldgeist aus Moos und Ranken materialisiert sich und fordert ein echtes Opfer.",
            "choices": [
                { "text": "Den magischen Dolch opfern", "next": "wald_sieg" },
                { "text": "Das Herz mit Gewalt an dich reißen", "next": "waldbrand_tod" }
            ]
        },
        "wald_sieg": {
            "text": "Der Waldgeist nimmt dein Opfer an. Eine Welle von Lebensenergie durchströmt dich. Die Dunkelheit weicht einem sanften, goldenen Frühlingslicht.",
            "ending": "Sieg: Du bist nun der neue Hüter des Finsterwaldes und gebietest über die Natur!"
        },
        "moos_ende": {
            "text": "Du berührst das Herz, doch die Natur rächt sich sofort für den Diebstahl. Wurzeln schießen aus deinen Füßen, deine Haut wird zu Borke. Du verschmelzt mit dem Boden.",
            "ending": "Sieg(?): Du bist nun ein ewiger, stummer Wächter des Waldes – unsterblich, aber festgewurzelt."
        },
        "baeren_kraft": {
            "text": "Das Elixier schmeckt nach Tannennadeln und Blut. Dein Körper wächst, dir wächst ein dichtes Fell und du wirst zu einem mächtigen Ur-Bären. Mit einem Brüllen rennst du durch die Baumgrenze in die Freiheit.",
            "ending": "Sieg: Du hast den Finsterwald als unaufhaltsamer König der Tiere verlassen!"
        },
        "sturz_dornen": {
            "text": "Deine Panik lässt die Dornen nur noch fester zupacken. Sie bohren sich tief in deine Rüstung und Haut, während sie ein lähmendes, schwarzes Gift injizieren.",
            "ending": "Tod: Gefangen und elendig erstickt im dornigen Unterholz."
        },
        "hexen_fluch": {
            "text": "Die Hexe lacht schrill. Sie pustet dir glühenden Staub ins Gesicht. Deine Beine verwandeln sich in Holz und deine Arme in Äste.",
            "ending": "Tod: Du verbringst die Ewigkeit als dekorativer, verdorrter Baum vor ihrer Hütte."
        },
        "waldbrand_tod": {
            "text": "Als deine Hand das Herz berührt, entflammt der Altar in einem Meer aus schwarzem, unlöschbarem Feuer. Der gesamte Hain geht in Flammen auf.",
            "ending": "Tod: Zu Asche verbrannt – der Wald duldet keine gierigen Sterblichen."
        },
        "moor_tod": {
            "text": "Ohne die Führung des Irrlichts gerätst du vom Weg ab. Der Boden wird weich und hungrig. Das Moor zieht dich mit jedem Befreiungsversuch schneller nach unten.",
            "ending": "Tod: Versunken und vergessen im ewigen Schlamm des Moors."
        },
        "hoehlen_einsturz": {
            "text": "Der Schwefelgeruch wird unerträglich. Du trittst auf eine Druckplatte im Boden. Die Decke der Höhle bricht über dir zusammen und Tonnen von Gestein begraben dich.",
            "ending": "Tod: Lebendig begraben in den tiefsten Wurzeln des Waldes."
        },
        "nebel_verirrung": {
            "text": "Du rennst ohne Erinnerung und ohne Führer in den dichten Nebel hinein. Die Stimmen der Toten flüstern deinen Namen, bis du den Verstand verlierst.",
            "ending": "Tod: Als wahnsinniger Geist für immer im Nebel verloren."
        }
    }
};

let currentLvl3Node = "";
let lastLevelBg3 = "";

function renderLevel3Node(nodeId) {
    let node = megaForestStory.nodes[nodeId];
    if (!node) return;
    currentLvl3Node = nodeId;
    if (level3Container) {
        if (node.image) lastLevelBg3 = node.image;
        if (lastLevelBg3) {
            level3Container.style.backgroundImage = `url("${lastLevelBg3}")`;
            level3Container.style.backgroundSize = "cover";
            level3Container.style.backgroundPosition = "center";
        } else {
            level3Container.style.backgroundImage = "";
        }
    }
    let storyImg = level3StoryBoard ? level3StoryBoard.querySelector('img') : null;

    if (node.ending) {
        if (storyImg) {
            if (node.ending.includes('Tod')) {
                storyImg.src = "./img/You-Died-PNG-Photos.png";
            } else {
                storyImg.src = "./img/Buttons/achievmentBtnAndTrophie.png";
            }
        }
        if (level3StoryText) level3StoryText.textContent = node.ending;
        if (node.ending.includes('Sieg')) {
            try { localStorage.setItem('forestWin', 'true'); } catch (e) {}
            window.dispatchEvent(new CustomEvent('achievementUnlocked', { detail: { key: 'forestWin' } }));
        }
        if (node.ending.includes('Tod')) {
            try { localStorage.setItem('forestDeath', 'true'); } catch (e) {}
            window.dispatchEvent(new CustomEvent('achievementUnlocked', { detail: { key: 'forestDeath' } }));
        }
        if (level3Decision1Text) level3Decision1Text.textContent = "Neu starten";
        if (level3Decision1) level3Decision1.style.visibility = "visible";
        if (level3Decision2) level3Decision2.style.visibility = "hidden";
    } else {
        if (level3StoryText) level3StoryText.textContent = node.text;
        if (storyImg) storyImg.src = "./img/Buttons/stone_board-removebg-preview.png";

        if (node.choices && node.choices[0]) {
            if (level3Decision1) level3Decision1.style.visibility = "visible";
            if (level3Decision1Text) level3Decision1Text.textContent = node.choices[0].text;
        } else {
            if (level3Decision1) level3Decision1.style.visibility = "hidden";
        }

        if (node.choices && node.choices[1]) {
            if (level3Decision2) level3Decision2.style.visibility = "visible";
            if (level3Decision2Text) level3Decision2Text.textContent = node.choices[1].text;
        } else {
            if (level3Decision2) level3Decision2.style.visibility = "hidden";
        }
    }

    if (typeof gsap !== 'undefined' && level3StoryBoard) {
        gsap.fromTo(level3StoryBoard, {autoAlpha:0, y:20}, {duration:0.8, autoAlpha:1, y:0, ease: "power2.out"});
    }
}

function openLevel3() {
    const levelPick = document.getElementById('levelPickContainer');
    if (levelPick) levelPick.style.display = "none";
    if (level3Container) level3Container.style.display = "flex";
    renderLevel3Node(megaForestStory.start);
    if (typeof playLevelAudio === 'function') playLevelAudio('./js/audio/forest.mp3');
}

function closeLevel3() {
    if (level3Container) level3Container.style.display = "none";
    const levelPick = document.getElementById('levelPickContainer');
    if (levelPick) levelPick.style.display = "flex";
    if (typeof stopLevelAudio === 'function') stopLevelAudio();
}

if (level3Decision1) {
    level3Decision1.addEventListener("click", () => {
        if (level3Container && level3Container.style.display === "flex" && currentLvl3Node !== "") {
            let node = megaForestStory.nodes[currentLvl3Node];
            if (node) {
                if (node.ending) {
                    renderLevel3Node(megaForestStory.start);
                } else if (node.choices && node.choices[0]) {
                    renderLevel3Node(node.choices[0].next);
                }
            }
        }
    });
}

if (level3Decision2) {
    level3Decision2.addEventListener("click", () => {
        if (level3Container && level3Container.style.display === "flex" && currentLvl3Node !== "") {
            let node = megaForestStory.nodes[currentLvl3Node];
            if (node && node.choices && node.choices[1]) {
                renderLevel3Node(node.choices[1].next);
            }
        }
    });
}
