// State Variables
let currentChapter = [];
let currentStepIndex = 0;
let playerName = "Y/N";
let activeMusic = null;

// DOM Elements
const bgLayer = document.getElementById('bg-layer');
const flashOverlay = document.getElementById('flash-overlay');
const dialogueBox = document.getElementById('dialogue-box');
const speakerName = document.getElementById('speaker-name');
const dialogueText = document.getElementById('dialogue-text');
const choiceContainer = document.getElementById('choice-container');
const startOverlay = document.getElementById('start-overlay');
const chapterMenu = document.getElementById('chapter-menu');
const videoContainer = document.getElementById('video-container');
const cutscenePlayer = document.getElementById('cutscene-player');
const skipIntroBtn = document.getElementById('skip-intro-btn');
const nameModal = document.getElementById('name-modal');
const playerNameInput = document.getElementById('player-name-input');
const confirmNameBtn = document.getElementById('confirm-name-btn');

// Start Application
document.getElementById('start-game-btn').addEventListener('click', () => {
    startOverlay.classList.add('hidden');
    chapterMenu.classList.remove('hidden');
});

function startChapter(chNum) {
    chapterMenu.classList.add('hidden');
    
    if (chNum === 1) {
        currentChapter = flattenScript(window.chapter1Data);
    } else if (chNum === 2) {
        currentChapter = flattenScript(window.chapter2Data);
    } else {
        alert("Chapter coming soon!");
        chapterMenu.classList.remove('hidden');
        return;
    }

    currentStepIndex = 0;
    executeStep();
}

// Convert Nested Ren'Py Jump/Branch Structures into Linear Stream
function flattenScript(data) {
    let flat = [];
    data.forEach(item => {
        if (item.nodes) {
            flat.push({ type: "label", name: item.label });
            flat = flat.concat(item.nodes);
        } else {
            flat.push(item);
        }
    });
    return flat;
}

// Main Execution Loop
function executeStep() {
    if (currentStepIndex >= currentChapter.length) {
        returnToMenu();
        return;
    }

    const step = currentChapter[currentStepIndex];

    switch (step.type) {
        case "cutscene":
            playCutscene(step.src);
            break;

        case "bg":
            setBgImage(step);
            advance();
            break;

        case "sfx":
            playSound(step.src);
            advance();
            break;

        case "music":
            handleMusic(step);
            advance();
            break;

        case "pause":
            setTimeout(() => {
                advance();
            }, step.duration);
            break;

        case "dialogue":
            showDialogue(step);
            break;

        case "input_name":
            showNameInput();
            break;

        case "choice":
            showChoices(step.options);
            break;

        case "jump":
            jumpToLabel(step.target);
            break;

        case "label":
            advance();
            break;

        case "return_to_menu":
            returnToMenu();
            break;

        default:
            advance();
            break;
    }
}

function advance() {
    currentStepIndex++;
    executeStep();
}

// Visual Background Manager
function setBgImage(step) {
    if (step.flash) {
        flashOverlay.classList.add('active');
        setTimeout(() => flashOverlay.classList.remove('active'), 150);
    }

    bgLayer.className = "bg-layer " + (step.transform || "full");

    if (step.image === "black") {
        bgLayer.style.backgroundImage = "none";
        bgLayer.style.backgroundColor = "#000000";
    } else {
        bgLayer.style.backgroundImage = `url('${step.image}')`;
    }
}

// Audio Engine
function playSound(src) {
    const audio = new Audio(src);
    audio.play().catch(() => console.log("Audio file missing/blocked: " + src));
}

function handleMusic(step) {
    if (step.action === "play") {
        if (activeMusic) {
            activeMusic.pause();
        }
        activeMusic = new Audio(step.src);
        activeMusic.loop = !!step.loop;
        activeMusic.play().catch(() => console.log("Music blocked or missing: " + step.src));
    } else if (step.action === "stop") {
        if (activeMusic) {
            activeMusic.pause();
            activeMusic = null;
        }
    }
}

// Cutscene Player
function playCutscene(src) {
    videoContainer.classList.remove('hidden');
    cutscenePlayer.src = src;
    cutscenePlayer.play().catch(() => {
        closeCutscene();
    });

    cutscenePlayer.onended = closeCutscene;
    skipIntroBtn.onclick = closeCutscene;
}

function closeCutscene() {
    cutscenePlayer.pause();
    videoContainer.classList.add('hidden');
    advance();
}

// Dialogue Display
function showDialogue(step) {
    dialogueBox.classList.remove('hidden');

    if (step.speaker) {
        let nameTag = step.speaker;
        if (nameTag === "MC" || nameTag === "[player_name]") {
            nameTag = playerName;
        }
        speakerName.textContent = nameTag;
        speakerName.style.color = step.color || "#ffffff";
        speakerName.style.fontWeight = step.bold ? "bold" : "normal";
    } else {
        speakerName.textContent = "";
    }

    let processedText = step.text.replace(/\[player_name\]/g, playerName);
    dialogueText.textContent = processedText;

    if (step.italic) {
        dialogueText.classList.add('italic');
    } else {
        dialogueText.classList.remove('italic');
    }

    if (step.text_color) {
        dialogueText.style.color = step.text_color;
    } else {
        dialogueText.style.color = "#ffffff";
    }
}

// Click to advance dialogue
dialogueBox.addEventListener('click', () => {
    if (currentChapter[currentStepIndex] && currentChapter[currentStepIndex].type === "dialogue") {
        advance();
    }
});

// Name Input Logic
function showNameInput() {
    dialogueBox.classList.add('hidden');
    nameModal.classList.remove('hidden');

    confirmNameBtn.onclick = () => {
        let val = playerNameInput.value.trim();
        playerName = val !== "" ? val : "Y/N";
        nameModal.classList.add('hidden');
        advance();
    };
}

// Choice Menu Logic
function showChoices(options) {
    dialogueBox.classList.add('hidden');
    choiceContainer.innerHTML = "";
    choiceContainer.classList.remove('hidden');

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "choice-btn";
        btn.textContent = opt.label;
        btn.onclick = () => {
            choiceContainer.classList.add('hidden');
            jumpToLabel(opt.target);
        };
        choiceContainer.appendChild(btn);
    });
}

// Label Routing
function jumpToLabel(targetLabel) {
    for (let i = 0; i < currentChapter.length; i++) {
        if (currentChapter[i].type === "label" && currentChapter[i].name === targetLabel) {
            currentStepIndex = i + 1;
            executeStep();
            return;
        }
    }
    advance();
}

function returnToMenu() {
    dialogueBox.classList.add('hidden');
    if (activeMusic) activeMusic.pause();
    chapterMenu.classList.remove('hidden');
}
