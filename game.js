/* =========================================================
   THE HOUSE
   Browser Story Engine
========================================================= */


/* =========================================================
   ASSET SYSTEM
========================================================= */

const ASSETS = {

    images: {

        beach: "ben_beach.png",

        bleeding: "ben_bleeding.png",

        dead: "ben_dead.png",

        elias1: "elias_1.png",
        elias2: "elias_2.png",
        elias3: "elias_3.png",

        mina1: "mina_1.png",
        mina2: "mina_2.png",
        mina3: "mina_3.png",
        mina4: "mina_4.png",

        minaEl ias: "mina_elias.png",

        house: "house.png",
        upstairs: "upstairs.png",

        door: "door.png"
    },


    audio: {

        ocean: "ocean.mp3",
        car: "car_drive.mp3",
        heart: "heartbeat.mp3",

        hit: "impact.mp3",
        ring: "ringing.mp3",
        door: "door_creak.mp3",
        creak: "wood_creak.mp3",

        radio: "radio_static.mp3",
        sting: "horror_sting.mp3",

        hall: "hall_ambience.mp3",
        steps: "footsteps.mp3",
        whisper: "ghostly_whisper.mp3",
        clatter: "metal_clatter.mp3",

        benTheme: "ben_theme.mp3",
        glitch: "glitch.mp3",
        pills: "pills.mp3"
    }
};


/*
    Some of your original Ren'Py names use both
    mina1 and mina_1 style naming.

    This helper lets the browser try alternate filenames.
*/

const IMAGE_ALIASES = {

    "mina_1.png": [
        "mina_1.png",
        "mina1.png"
    ],

    "mina_2.png": [
        "mina_2.png",
        "mina2.png"
    ],

    "mina_3.png": [
        "mina_3.png",
        "mina3.png"
    ],

    "mina_4.png": [
        "mina_4.png",
        "mina4.png"
    ],

    "mina_elias.png": [
        "mina_elias.png",
        "minaElias.png",
        "mina_elias.jpg"
    ]
};


/* =========================================================
   DOM
========================================================= */

const screens = {

    start: document.getElementById("start-screen"),

    chapters: document.getElementById("chapter-screen"),

    story: document.getElementById("story-screen"),

    end: document.getElementById("end-screen")
};


const sceneImage = document.getElementById("scene-image");

const dialogueText = document.getElementById("dialogue-text");

const speakerName = document.getElementById("speaker-name");

const choicesContainer = document.getElementById("choices");

const progressBar = document.getElementById("progress-bar");

const music = document.getElementById("music");

const sound = document.getElementById("sound");

const flash = document.getElementById("flash");

const glitch = document.getElementById("glitch-layer");

const storyScreen = document.getElementById("story-screen");

const nameOverlay = document.getElementById("name-overlay");

const pauseMenu = document.getElementById("pause-menu");


/* =========================================================
   GAME STATE
========================================================= */

const state = {

    chapter: 1,

    sceneIndex: 0,

    playerName: "Y/N",

    typing: false,

    waiting: false,

    paused: false,

    audioUnlocked: false,

    saveKey: "the-house-progress"

};


/* =========================================================
   STORY DATA
========================================================= */

const chapters = {

    1: {

        title: "THE RETURN",

        label: "PART 01",

        scenes: [

            {
                image: "beach",
                effect: "flash",
                music: "ocean",

                dialogue: [
                    {
                        speaker: "",
                        type: "thought",
                        text: "Promise me we won't forget this summer."
                    }
                ]
            },


            {
                image: "bleeding",
                effect: "shake",

                sfx: "hit",

                dialogue: [
                    {
                        speaker: "",
                        type: "thought",
                        text: "..."
                    }
                ]
            },


            {
                image: "dead",
                effect: "fade",

                dialogue: [
                    {
                        speaker: "Ben",
                        text: "You left me there."
                    }
                ]
            },


            {
                image: null,

                music: "car",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "My chest hurts."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "The ringing won't stop."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "I can't remember falling asleep."
                    }

                ]
            },


            {
                image: "elias1",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "Hey."
                    }

                ]
            },


            {
                image: "elias2",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "Hey."
                    }

                ]
            },


            {
                image: "elias3",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "You were screaming again."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "Again?"
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "My throat burns."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "Like I swallowed seawater."
                    }

                ]
            },


            {
                image: "elias1",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "..."
                    },

                    {
                        speaker: "Elias",
                        text: "You still with me?"
                    }

                ]
            },


            {
                image: "elias2",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "What was your name again?"
                    }

                ],

                inputName: true
            },


            {
                image: "elias2",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "{{name}}."
                    },

                    {
                        speaker: "Elias",
                        text: "Right."
                    }

                ]
            },


            {
                image: "mina1",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "Can we just get this over with?"
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "Nobody is the same anymore."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "Not after last year."
                    }

                ]
            },


            {
                image: "bleeding",

                effect: "glitch",

                sfx: "sting",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "A memory flashes behind my eyes."
                    }

                ]
            },


            {
                image: "elias1",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "We're almost there."
                    },

                    {
                        speaker: "Elias",
                        text: "We cut all ties with this place."
                    },

                    {
                        speaker: "Elias",
                        text: "Clean any evidence if there is any left."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "But what evidence?"
                    }

                ]
            },


            {
                image: "elias3",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "Then we leave."
                    }

                ],

                choices: [

                    {
                        text: "Why are you nervous?",

                        action: "nervous"
                    },

                    {
                        text: "We shouldn't have come back here.",

                        action: "back"
                    },

                    {
                        text: "Stay silent.",

                        action: "silent"
                    }

                ]
            },


            /* NERVOUS BRANCH */

            {
                id: "nervous",

                image: "elias1",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "We're driving back to the place I despise."
                    },

                    {
                        speaker: "Elias",
                        text: "How do you want me to act?"
                    }

                ],

                next: "house"
            },


            /* BACK BRANCH */

            {
                id: "back",

                image: "mina3",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "Then why did you agree to come?"
                    },

                    {
                        speaker: "Mina",
                        text: "Regretting it now is useless."
                    }

                ],

                next: "house"
            },


            /* SILENT BRANCH */

            {
                id: "silent",

                image: "mina2",

                sfx: "radio",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "The radio crackles softly."
                    },

                    {
                        speaker: "",
                        type: "whisper",
                        text: "don't leave me"
                    },

                    {
                        speaker: "Mina",
                        text: "I hate this."
                    }

                ],

                next: "house"
            },


            /* HOUSE */

            {
                id: "house",

                image: "house",

                music: "ocean",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "I forgot how quiet this place was."
                    }

                ]
            },


            {
                image: "upstairs",

                sfx: "creak",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "Something moved upstairs."
                    }

                ]
            },


            {
                image: "mina1",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "The air smells different."
                    },

                    {
                        speaker: "",
                        text: "Doesn't it smell weird?"
                    }

                ]
            },


            {
                image: "mina2",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "You mean like a dead body rotten."
                    }

                ]
            },


            {
                image: "mina3",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "Do you ever think about how little he stayed alive?"
                    },

                    {
                        speaker: "",
                        text: "And why would you ask that?"
                    }

                ],

                sfx: "sting"
            },


            {
                image: "mina4",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "No reason."
                    }

                ]
            },


            {
                image: "mina_elias",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "We're standing outside talking like ghosts."
                    },

                    {
                        speaker: "Elias",
                        text: "Ben would've made fun of us for this."
                    },

                    {
                        speaker: "Elias",
                        text: "Ben hated sunsets here."
                    },

                    {
                        speaker: "",
                        text: "Still he should have come, shouldn't he?"
                    }

                ]
            },


            {
                image: "elias1",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "Ben hated this house."
                    },

                    {
                        speaker: "",
                        type: "thought",
                        text: "That isn't true."
                    },

                    {
                        speaker: "Elias",
                        text: "Especially after that incident started staying here."
                    },

                    {
                        speaker: "Elias",
                        text: "He knew if he came we would come too."
                    },

                    {
                        speaker: "Elias",
                        text: "...Let's just get this over with."
                    }

                ]
            },


            {
                image: "upstairs",

                effect: "shake",

                sfx: "sting",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "Someone is watching us."
                    }

                ]
            },


            {
                image: "mina2",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "...Do you think she cleaned it all up?"
                    },

                    {
                        speaker: "",
                        text: "Cleaned what?"
                    }

                ]
            },


            {
                image: "elias2",

                dialogue: [

                    {
                        speaker: "Elias",
                        text: "...There wasn't so much of that, you know."
                    }

                ]
            },


            {
                image: "mina3",

                dialogue: [

                    {
                        speaker: "Mina",
                        text: "Why are you being so cryptic?"
                    }

                ]
            },


            {
                image: "door",

                sfx: "door",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "The front door is already open."
                    }

                ]
            }

        ]

    },


    2: {

        title: "THE HOUSE",

        label: "PART 02",

        scenes: [

            {
                image: "house",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "The second chapter is waiting..."
                    },

                    {
                        speaker: "",
                        text: "Your existing Chapter 2 content can be added here."
                    }

                ]
            }

        ]

    },


    3: {

        title: "THE TRUTH",

        label: "PART 03",

        scenes: [

            {
                image: "upstairs",

                dialogue: [

                    {
                        speaker: "",
                        type: "thought",
                        text: "The third chapter is waiting..."
                    },

                    {
                        speaker: "",
                        text: "Your existing Chapter 3 content can be added here."
                    }

                ]

            }

        ]

    }

};


/* =========================================================
   IMAGE LOADER
========================================================= */

function resolveImage(key) {

    if (!key) {
        return null;
    }

    const filename = ASSETS.images[key];

    if (!filename) {
        return key;
    }

    return filename;
}


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screen) {

    Object.values(screens).forEach(s => {

        s.classList.remove("active");

    });

    screen.classList.add("active");
}


/* =========================================================
   AUDIO
========================================================= */

function unlockAudio() {

    state.audioUnlocked = true;

    /*
        Browser autoplay protection is bypassed after
        the user clicks the ENTER button.
    */

    music.volume = 0;

    music.play().catch(() => {});

    music.pause();

}


function playMusic(file, volume = .65) {

    if (!file) {
        return;
    }

    const path = ASSETS.audio[file] || file;

    if (music.src.endsWith(path)) {

        music.volume = volume;

        if (music.paused) {
            music.play().catch(() => {});
        }

        return;
    }

    music.pause();

    music.src = path;

    music.volume = 0;

    music.play().catch(() => {});


    let current = 0;

    const fade = setInterval(() => {

        current += .04;

        music.volume = Math.min(
            volume,
            current
        );

        if (current >= volume) {
            clearInterval(fade);
        }

    }, 50);

}


function stopMusic() {

    music.pause();

}


function playSFX(file) {

    if (!file) {
        return;
    }

    const path = ASSETS.audio[file] || file;

    sound.src = path;

    sound.currentTime = 0;

    sound.volume = .9;

    sound.play().catch(() => {});

}


/* =========================================================
   VISUAL EFFECTS
========================================================= */

function triggerFlash() {

    flash.classList.remove("flash-active");

    void flash.offsetWidth;

    flash.classList.add("flash-active");
}


function triggerGlitch() {

    glitch.classList.remove("glitch-active");

    void glitch.offsetWidth;

    glitch.classList.add("glitch-active");
}


function triggerShake() {

    storyScreen.classList.remove("shake");

    void storyScreen.offsetWidth;

    storyScreen.classList.add("shake");
}


/* =========================================================
   SCENE IMAGE
========================================================= */

function setScene(imageKey, effect) {

    if (!imageKey) {

        sceneImage.style.opacity = "0";

        return;
    }

    const image = resolveImage(imageKey);

    sceneImage.classList.remove("scene-enter");

    sceneImage.style.opacity = "0";

    setTimeout(() => {

        sceneImage.src = image;

        sceneImage.onload = () => {

            sceneImage.style.opacity = "1";

            sceneImage.classList.add("scene-enter");

        };

    }, 150);


    if (effect === "flash") {

        setTimeout(triggerFlash, 100);
    }


    if (effect === "glitch") {

        setTimeout(triggerGlitch, 100);
    }


    if (effect === "shake") {

        setTimeout(triggerShake, 100);
    }

}


/* =========================================================
   TYPEWRITER
========================================================= */

function typeText(text, element, speed = 28) {

    return new Promise(resolve => {

        state.typing = true;

        element.textContent = "";

        let index = 0;


        const interval = setInterval(() => {

            element.textContent += text[index];

            index++;


            if (index >= text.length) {

                clearInterval(interval);

                state.typing = false;

                resolve();

            }

        }, speed);

    });

}


/* =========================================================
   FORMAT TEXT
========================================================= */

function formatText(text) {

    return text.replace(
        "{{name}}",
        state.playerName
    );

}


/* =========================================================
   DISPLAY DIALOGUE
========================================================= */

async function displayDialogue(line) {

    state.waiting = true;

    choicesContainer.classList.add("hidden");

    const text = formatText(line.text || "");

    speakerName.textContent = line.speaker || "";


    dialogueText.className = "";


    if (line.type === "thought") {

        dialogueText.classList.add("thought");

    }


    if (line.type === "whisper") {

        dialogueText.classList.add("whisper");

    }


    await typeText(
        text,
        dialogueText,
        line.type === "thought" ? 24 : 28
    );


    state.waiting = false;

}


/* =========================================================
   NAME INPUT
========================================================= */

function requestName() {

    return new Promise(resolve => {

        nameOverlay.classList.remove("hidden");

        const input =
            document.getElementById("name-input");

        input.value = "";

        setTimeout(() => {

            input.focus();

        }, 200);


        const confirm = () => {

            state.playerName =
                input.value.trim() || "Y/N";

            nameOverlay.classList.add("hidden");

            input.removeEventListener(
                "keydown",
                keyHandler
            );

            resolve();

        };


        const keyHandler = event => {

            if (event.key === "Enter") {

                confirm();

            }

        };


        document
            .getElementById("name-confirm")
            .onclick = confirm;


        input.addEventListener(
            "keydown",
            keyHandler
        );

    });

}


/* =========================================================
   CHOICE SYSTEM
========================================================= */

function showChoices(choices) {

    return new Promise(resolve => {

        choicesContainer.innerHTML = "";

        choicesContainer.classList.remove("hidden");


        choices.forEach(choice => {

            const button =
                document.createElement("button");

            button.className = "choice-button";

            button.textContent = choice.text;


            button.onclick = () => {

                choicesContainer.classList.add("hidden");

                resolve(choice.action);

            };


            choicesContainer.appendChild(button);

        });

    });

}


/* =========================================================
   FIND SCENE
========================================================= */

function findSceneById(id) {

    return chapters[state.chapter]
        .scenes
        .findIndex(scene => scene.id === id);

}


/* =========================================================
   PLAY CHAPTER
========================================================= */

async function playChapter(number) {

    state.chapter = number;

    state.sceneIndex = 0;

    state.playerName =
        localStorage.getItem("the-house-name") ||
        "Y/N";


    showScreen(screens.story);


    const chapter = chapters[number];


    document.getElementById(
        "chapter-label"
    ).textContent = chapter.label;


    await playScene();


}


/* =========================================================
   PLAY SCENE
========================================================= */

async function playScene() {

    const chapter = chapters[state.chapter];

    const scenes = chapter.scenes;


    if (state.sceneIndex >= scenes.length) {

        finishChapter();

        return;

    }


    const scene = scenes[state.sceneIndex];


    progressBar.style.width =
        `${(state.sceneIndex / scenes.length) * 100}%`;


    /* Image */

    setScene(
        scene.image,
        scene.effect
    );


    /* Audio */

    if (scene.music) {

        playMusic(
            scene.music,
            scene.music === "car" ? .7 : .55
        );

    }


    if (scene.sfx) {

        playSFX(scene.sfx);

    }


    /* Special name input */

    if (scene.inputName) {

        await wait(500);

        await requestName();

        localStorage.setItem(
            "the-house-name",
            state.playerName
        );

    }


    /* Dialogue */

    for (const line of scene.dialogue || []) {

        await displayDialogue(line);

        await waitForContinue();

    }


    /* Choices */

    if (scene.choices) {

        const action =
            await showChoices(scene.choices);

        const branchIndex =
            findSceneById(action);

        if (branchIndex !== -1) {

            state.sceneIndex = branchIndex;

            await playScene();

            return;

        }

    }


    /* Explicit next */

    if (scene.next) {

        const nextIndex =
            findSceneById(scene.next);

        if (nextIndex !== -1) {

            state.sceneIndex = nextIndex;

            await playScene();

            return;

        }

    }


    state.sceneIndex++;

    await wait(250);

    await playScene();

}


/* =========================================================
   WAIT FOR PLAYER
========================================================= */

function waitForContinue() {

    return new Promise(resolve => {

        state.waiting = false;

        const handler = () => {

            document.removeEventListener(
                "click",
                handler
            );

            document.removeEventListener(
                "keydown",
                keyHandler
            );

            resolve();

        };


        const keyHandler = event => {

            if (
                event.key === " " ||
                event.key === "Enter"
            ) {

                handler();

            }

        };


        document.addEventListener(
            "click",
            handler,
            { once: true }
        );


        document.addEventListener(
            "keydown",
            keyHandler
        );

    });

}


/* =========================================================
   FINISH CHAPTER
========================================================= */

function finishChapter() {

    stopMusic();

    progressBar.style.width = "100%";


    if (state.chapter === 1) {

        showScreen(screens.end);

        saveProgress();

    } else {

        showScreen(screens.chapters);

    }

}


/* =========================================================
   SAVE
========================================================= */

function saveProgress() {

    localStorage.setItem(
        state.saveKey,
        JSON.stringify({

            chapter: state.chapter,

            playerName: state.playerName

        })
    );

}


/* =========================================================
   LOAD
========================================================= */

function loadProgress() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    state.saveKey
                )
            );


        if (!saved) {
            return false;
        }


        state.chapter =
            saved.chapter || 1;


        state.playerName =
            saved.playerName || "Y/N";


        return true;

    } catch {

        return false;

    }

}


/* =========================================================
   UTILITY
========================================================= */

function wait(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

document
    .getElementById("start-button")
    .addEventListener("click", () => {

        unlockAudio();

        showScreen(screens.chapters);

    });


document
    .getElementById("continue-button")
    .addEventListener("click", () => {

        unlockAudio();

        showScreen(screens.chapters);

    });


document
    .getElementById("back-to-title")
    .addEventListener("click", () => {

        showScreen(screens.start);

    });


document
    .getElementById("end-chapters")
    .addEventListener("click", () => {

        showScreen(screens.chapters);

    });


/* =========================================================
   CHAPTER CARDS
========================================================= */

document
    .querySelectorAll(".chapter-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const chapter =
                    Number(
                        card.dataset.chapter
                    );


                unlockAudio();

                playChapter(chapter);

            }
        );

    });


/* =========================================================
   PAUSE
========================================================= */

document
    .getElementById("story-menu")
    .addEventListener("click", () => {

        state.paused = true;

        music.pause();

        pauseMenu.classList.remove("hidden");

    });


document
    .getElementById("resume-button")
    .addEventListener("click", () => {

        state.paused = false;

        pauseMenu.classList.add("hidden");

        music.play().catch(() => {});

    });


document
    .getElementById("menu-button")
    .addEventListener("click", () => {

        state.paused = false;

        pauseMenu.classList.add("hidden");

        stopMusic();

        showScreen(screens.chapters);

    });


/* =========================================================
   GLOBAL CONTINUE INPUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            screens.story.classList.contains("active")
        ) {

            state.paused = !state.paused;

            pauseMenu.classList.toggle(
                "hidden",
                !state.paused
            );

        }

    }
);


/* =========================================================
   STARTUP
========================================================= */

window.addEventListener(
    "load",
    () => {

        const hasSave =
            loadProgress();


        if (hasSave) {

            document
                .getElementById("continue-button")
                .classList.remove("hidden");

        }

    }
);
