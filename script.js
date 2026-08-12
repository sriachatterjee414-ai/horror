// ============================================================
// DEAD MAN DON'T TALK
// MAIN GAME ENGINE
// ============================================================

let currentChapter = [];
let currentStepIndex = 0;

let playerName = "Y/N";

let activeMusic = null;

let isTyping = false;
let typeTimer = null;

let fullDialogueText = "";

let dialogueReadyToAdvance = false;


// ============================================================
// DOM
// ============================================================

const bgLayer =
    document.getElementById("bg-layer");

const flashOverlay =
    document.getElementById("flash-overlay");

const dialogueBox =
    document.getElementById("dialogue-box");

const speakerName =
    document.getElementById("speaker-name");

const dialogueText =
    document.getElementById("dialogue-text");

const choiceContainer =
    document.getElementById("choice-container");

const startOverlay =
    document.getElementById("start-overlay");

const chapterMenu =
    document.getElementById("chapter-menu");

const videoContainer =
    document.getElementById("video-container");

const cutscenePlayer =
    document.getElementById("cutscene-player");

const skipIntroBtn =
    document.getElementById("skip-intro-btn");

const nameModal =
    document.getElementById("name-modal");

const playerNameInput =
    document.getElementById("player-name-input");

const confirmNameBtn =
    document.getElementById("confirm-name-btn");


// ============================================================
// START GAME
// ============================================================

document
    .getElementById("start-game-btn")
    .addEventListener("click", () => {

        startOverlay.classList.add("hidden");

        chapterMenu.classList.remove("hidden");

        createAmbientParticles();

    });


// ============================================================
// START CHAPTER
// ============================================================

function startChapter(chNum) {

    chapterMenu.classList.add("hidden");

    if (chNum === 1) {

        currentChapter =
            flattenScript(window.chapter1Data);

    }

    else if (chNum === 2) {

        currentChapter =
            flattenScript(window.chapter2Data);

    }

    else {

        alert("Chapter coming soon!");

        chapterMenu.classList.remove("hidden");

        return;

    }


    currentStepIndex = 0;

    executeStep();

}


// ============================================================
// FLATTEN CHAPTER
// ============================================================

function flattenScript(data) {

    let flat = [];

    data.forEach(item => {

        if (item.nodes) {

            flat.push({
                type: "label",
                name: item.label
            });

            flat =
                flat.concat(item.nodes);

        }

        else {

            flat.push(item);

        }

    });

    return flat;

}


// ============================================================
// EXECUTE STEP
// ============================================================

function executeStep() {

    if (
        currentStepIndex >=
        currentChapter.length
    ) {

        returnToMenu();

        return;

    }


    const step =
        currentChapter[currentStepIndex];


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

            triggerSFXVisual(step.src);

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

    }

}


// ============================================================
// ADVANCE
// ============================================================

function advance() {

    currentStepIndex++;

    executeStep();

}


// ============================================================
// BACKGROUND
// ============================================================

function setBgImage(step) {

    if (step.flash) {

        flashOverlay.classList.add(
            "active"
        );

        setTimeout(() => {

            flashOverlay.classList.remove(
                "active"
            );

        }, 150);

    }


    bgLayer.className =
        "bg-layer";


    bgLayer.classList.add(
        step.transform || "full"
    );


    if (step.transition === "dissolve") {

        bgLayer.classList.add(
            "scene-dissolve"
        );

    }


    if (step.transition === "fade") {

        bgLayer.classList.add(
            "scene-fade"
        );

    }


    if (step.image === "black") {

        bgLayer.style.backgroundImage =
            "none";

        bgLayer.style.backgroundColor =
            "#000";

    }

    else {

        bgLayer.style.backgroundColor =
            "#000";

        bgLayer.style.backgroundImage =
            `url('${step.image}')`;

    }


    if (
        step.transform === "v_jerk" ||
        step.transform === "v_zoom" ||
        step.flash
    ) {

        horrorPulse();

    }


    setTimeout(() => {

        bgLayer.classList.remove(
            "scene-dissolve",
            "scene-fade"
        );

    }, 900);

}


// ============================================================
// AUDIO
// ============================================================

function playSound(src) {

    const audio =
        new Audio(src);

    audio.volume = 0.85;

    audio.play().catch(() => {

        console.log(
            "Audio missing/blocked:",
            src
        );

    });

}


// ============================================================
// MUSIC
// ============================================================

function handleMusic(step) {

    if (step.action === "play") {

        if (activeMusic) {

            activeMusic.pause();

        }


        activeMusic =
            new Audio(step.src);

        activeMusic.loop =
            !!step.loop;

        activeMusic.volume =
            0.45;

        activeMusic.play().catch(() => {

            console.log(
                "Music blocked:",
                step.src
            );

        });

    }


    else if (
        step.action === "stop"
    ) {

        if (activeMusic) {

            activeMusic.pause();

            activeMusic = null;

        }

    }

}


// ============================================================
// CUTSCENE
// ============================================================

function playCutscene(src) {

    videoContainer.classList.remove(
        "hidden"
    );

    cutscenePlayer.src =
        src;

    cutscenePlayer.currentTime =
        0;


    cutscenePlayer.play().catch(() => {

        closeCutscene();

    });


    cutscenePlayer.onended =
        closeCutscene;


    skipIntroBtn.onclick =
        closeCutscene;

}


function closeCutscene() {

    cutscenePlayer.pause();

    videoContainer.classList.add(
        "hidden"
    );

    advance();

}


// ============================================================
// DIALOGUE
// ============================================================

function showDialogue(step) {

    dialogueBox.classList.remove(
        "hidden"
    );


    dialogueReadyToAdvance =
        false;


    clearInterval(typeTimer);


    // Speaker

    if (step.speaker) {

        let name =
            step.speaker;


        if (
            name === "MC" ||
            name === "[player_name]"
        ) {

            name =
                playerName;

        }


        speakerName.textContent =
            name;


        speakerName.style.color =
            step.color ||
            "#ffffff";


        speakerName.style.fontWeight =
            step.bold
                ? "700"
                : "500";


        speakerName.style.textShadow =
            `0 0 12px ${
                step.color ||
                "#ffffff"
            }`;

    }

    else {

        speakerName.textContent =
            "";

        speakerName.style.textShadow =
            "none";

    }


    // Text

    fullDialogueText =
        step.text.replace(
            /\[player_name\]/g,
            playerName
        );


    dialogueText.classList.remove(
        "italic",
        "thought-text",
        "whisper-text"
    );


    if (step.italic) {

        dialogueText.classList.add(
            "italic",
            "thought-text"
        );

    }


    if (
        fullDialogueText
            .toLowerCase()
            .includes("don't leave me")
    ) {

        dialogueText.classList.add(
            "whisper-text"
        );

    }


    dialogueText.style.color =
        step.text_color ||
        "#ffffff";


    dialogueText.textContent =
        "";


    // Restart animation

    dialogueText.classList.remove(
        "dialogue-pop"
    );

    void dialogueText.offsetWidth;

    dialogueText.classList.add(
        "dialogue-pop"
    );


    typeDialogue(
        fullDialogueText
    );


    createDialogueDoodles();

}


// ============================================================
// TYPEWRITER
// ============================================================

function typeDialogue(text) {

    isTyping = true;

    dialogueReadyToAdvance =
        false;


    dialogueText.textContent =
        "";


    let index = 0;


    const typingSpeed = 25;


    typeTimer =
        setInterval(() => {

            dialogueText.textContent +=
                text.charAt(index);


            index++;


            if (
                index >=
                text.length
            ) {

                clearInterval(
                    typeTimer
                );

                isTyping = false;

                dialogueReadyToAdvance =
                    true;

                showContinueIndicator();

            }

        }, typingSpeed);

}


// ============================================================
// CLICK DIALOGUE
// ============================================================

dialogueBox.addEventListener(
    "click",
    () => {

        const currentStep =
            currentChapter[
                currentStepIndex
            ];


        if (
            !currentStep ||
            currentStep.type !==
                "dialogue"
        ) {

            return;

        }


        // -----------------------------------------
        // FIRST CLICK:
        // Finish typewriter
        // -----------------------------------------

        if (isTyping) {

            clearInterval(
                typeTimer
            );


            dialogueText.textContent =
                fullDialogueText;


            isTyping = false;

            dialogueReadyToAdvance =
                true;


            showContinueIndicator();


            return;

        }


        // -----------------------------------------
        // SECOND CLICK:
        // Next dialogue
        // -----------------------------------------

        if (
            dialogueReadyToAdvance
        ) {

            dialogueReadyToAdvance =
                false;


            hideContinueIndicator();


            advance();

        }

    }
);


// ============================================================
// INDICATOR
// ============================================================

function showContinueIndicator() {

    const indicator =
        document.querySelector(
            ".click-indicator"
        );


    if (indicator) {

        indicator.classList.add(
            "indicator-visible"
        );

    }

}


function hideContinueIndicator() {

    const indicator =
        document.querySelector(
            ".click-indicator"
        );


    if (indicator) {

        indicator.classList.remove(
            "indicator-visible"
        );

    }

}


// ============================================================
// NAME INPUT
// ============================================================

function showNameInput() {

    dialogueBox.classList.add(
        "hidden"
    );


    nameModal.classList.remove(
        "hidden"
    );


    playerNameInput.value =
        "";


    setTimeout(() => {

        playerNameInput.focus();

    }, 100);


    confirmNameBtn.onclick =
        confirmName;


    playerNameInput.onkeydown =
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                confirmName();

            }

        };

}


function confirmName() {

    const value =
        playerNameInput.value.trim();


    playerName =
        value !== ""
            ? value
            : "Y/N";


    nameModal.classList.add(
        "hidden"
    );


    advance();

}


// ============================================================
// CHOICES
// ============================================================

function showChoices(options) {

    dialogueBox.classList.add(
        "hidden"
    );


    choiceContainer.innerHTML =
        "";


    choiceContainer.classList.remove(
        "hidden"
    );


    options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice-btn";


            button.style.animationDelay =
                `${index * 0.08}s`;


            button.innerHTML = `

                <span class="choice-symbol">
                    ✦
                </span>

                <span>
                    ${option.label}
                </span>

                <span class="choice-arrow">
                    →
                </span>

            `;


            button.onclick =
                () => {

                    choiceContainer.classList.add(
                        "hidden"
                    );


                    jumpToLabel(
                        option.target
                    );

                };


            choiceContainer.appendChild(
                button
            );

        }
    );

}


// ============================================================
// JUMP
// ============================================================

function jumpToLabel(
    targetLabel
) {

    for (
        let i = 0;
        i < currentChapter.length;
        i++
    ) {

        if (
            currentChapter[i].type ===
                "label" &&
            currentChapter[i].name ===
                targetLabel
        ) {

            currentStepIndex =
                i + 1;

            executeStep();

            return;

        }

    }


    advance();

}


// ============================================================
// RETURN MENU
// ============================================================

function returnToMenu() {

    clearInterval(
        typeTimer
    );


    dialogueBox.classList.add(
        "hidden"
    );


    choiceContainer.classList.add(
        "hidden"
    );


    if (activeMusic) {

        activeMusic.pause();

        activeMusic = null;

    }


    chapterMenu.classList.remove(
        "hidden"
    );

}


// ============================================================
// HORROR
// ============================================================

function horrorPulse() {

    const game =
        document.getElementById(
            "game-container"
        );


    game.classList.remove(
        "horror-hit"
    );


    void game.offsetWidth;


    game.classList.add(
        "horror-hit"
    );


    setTimeout(() => {

        game.classList.remove(
            "horror-hit"
        );

    }, 500);

}


function triggerSFXVisual(src) {

    if (!src) return;


    if (
        src.includes("horror") ||
        src.includes("impact") ||
        src.includes("door")
    ) {

        horrorPulse();

    }


    if (
        src.includes("radio")
    ) {

        const game =
            document.getElementById(
                "game-container"
            );


        game.classList.add(
            "radio-glitch"
        );


        setTimeout(() => {

            game.classList.remove(
                "radio-glitch"
            );

        }, 700);

    }

}


// ============================================================
// DOODLES
// ============================================================

function createDialogueDoodles() {

    const game =
        document.getElementById(
            "game-container"
        );


    const old =
        document.querySelector(
            ".active-dialogue-doodles"
        );


    if (old) {

        old.remove();

    }


    const wrapper =
        document.createElement(
            "div"
        );


    wrapper.className =
        "active-dialogue-doodles";


    const symbols = [
        "✦",
        "✧",
        "·",
        "⋆"
    ];


    symbols.forEach(
        (symbol, index) => {

            const doodle =
                document.createElement(
                    "span"
                );


            doodle.textContent =
                symbol;


            doodle.style.animationDelay =
                `${index * 0.15}s`;


            wrapper.appendChild(
                doodle
            );

        }
    );


    game.appendChild(
        wrapper
    );


    setTimeout(() => {

        wrapper.remove();

    }, 1600);

}


// ============================================================
// AMBIENT PARTICLES
// ============================================================

function createAmbientParticles() {

    const game =
        document.getElementById(
            "game-container"
        );


    if (
        document.querySelector(
            ".ambient-particles"
        )
    ) {

        return;

    }


    const container =
        document.createElement(
            "div"
        );


    container.className =
        "ambient-particles";


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.animationDelay =
            `${Math.random() * 8}s`;


        particle.style.animationDuration =
            `${5 + Math.random() * 8}s`;


        container.appendChild(
            particle
        );

    }


    game.appendChild(
        container
    );

}
