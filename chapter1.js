const scene = document.getElementById("scene");
const dialogueBox = document.getElementById("dialogueBox");
const speaker = document.getElementById("speaker");
const dialogueText = document.getElementById("dialogueText");

const choices = document.getElementById("choices");

const nameScreen = document.getElementById("nameScreen");
const playerNameInput =
    document.getElementById("playerName");

const nameSubmit =
    document.getElementById("nameSubmit");

const flash =
    document.getElementById("flash");


let playerName = "Y/N";

let typing = false;
let fullText = "";
let typingTimer = null;

let continueFunction = null;


/* =========================
AUDIO
========================= */

const sounds = {

    ocean:
        new Audio("waves.mp3"),

    car:
        new Audio("car_drive.mp3"),

    heart:
        new Audio("heartbeat.mp3"),

    hit:
        new Audio("impact.mp3"),

    ring:
        new Audio("ringing.mp3"),

    door:
        new Audio("door_creak.mp3"),

    creak:
        new Audio("wood_creak.mp3"),

    radio:
        new Audio("radio_static.mp3"),

    sting:
        new Audio("horror_sting.mp3"),

    hall:
        new Audio("hall_ambience.mp3"),

    steps:
        new Audio("footsteps.mp3"),

    whisper:
        new Audio("ghostly_whisper.mp3"),

    clatter:
        new Audio("metal_clatter.mp3"),

    ben:
        new Audio("ben_theme.mp3"),

    glitch:
        new Audio("glitch.mp3"),

    pills:
        new Audio("pills.mp3")
};


let currentMusic = null;


/* =========================
AUDIO FUNCTIONS
========================= */

function playSound(name, volume = 1) {

    const sound =
        sounds[name];

    if (!sound) return;

    sound.pause();

    sound.currentTime = 0;

    sound.volume = volume;

    sound.play().catch(() => {});
}


function playMusic(name, volume = .8) {

    const music =
        sounds[name];

    if (!music) return;


    if (currentMusic &&
        currentMusic !== music) {

        currentMusic.pause();

        currentMusic.currentTime = 0;
    }


    currentMusic = music;

    music.loop = true;

    music.volume = volume;

    music.play().catch(() => {});
}


function stopMusic() {

    if (!currentMusic)
        return;

    currentMusic.pause();

    currentMusic.currentTime = 0;

    currentMusic = null;
}


/* =========================
SCENE
========================= */

function changeScene(
    image,
    effect = "normal",
    zoom = false
) {

    scene.style.backgroundImage =
        `url("${image}.png")`;

    scene.classList.remove("zoom");

    void scene.offsetWidth;


    if (zoom) {

        scene.classList.add("zoom");
    }


    if (effect === "shake") {

        scene.classList.add("shake");

        setTimeout(() => {

            scene.classList.remove("shake");

        }, 600);
    }


    if (effect === "flash") {

        flash.classList.remove("active");

        void flash.offsetWidth;

        flash.classList.add("active");
    }
}


/* =========================
DIALOGUE
========================= */

async function say(
    message,
    character = "",
    type = ""
) {

    dialogueBox.className =
        "visible " + type;


    speaker.textContent =
        character;


    dialogueText.textContent =
        "";


    fullText =
        message;


    typing =
        true;


    let index = 0;


    clearInterval(
        typingTimer
    );


    await new Promise(resolve => {

        continueFunction =
            resolve;


        typingTimer =
            setInterval(() => {

                dialogueText.textContent +=
                    message[index];

                index++;


                if (
                    index >=
                    message.length
                ) {

                    clearInterval(
                        typingTimer
                    );

                    typing = false;
                }

            }, 22);

    });
}


/* =========================
CLICK DIALOGUE
========================= */

dialogueBox.addEventListener(
    "click",
    () => {

        if (typing) {

            clearInterval(
                typingTimer
            );

            dialogueText.textContent =
                fullText;

            typing =
                false;

            return;
        }


        if (continueFunction) {

            const next =
                continueFunction;

            continueFunction =
                null;

            next();
        }

    }
);


/* =========================
PAUSE
========================= */

function wait(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );
}


/* =========================
NAME
========================= */

function askName() {

    nameScreen.style.display =
        "flex";

    playerNameInput.focus();
}


nameSubmit.onclick =
    () => {

        playerName =
            playerNameInput.value
                .trim() ||
            "Y/N";


        nameScreen.style.display =
            "none";


        continueAfterName();
    };


playerNameInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            nameSubmit.click();
        }
    }
);


/* =========================
CHOICES
========================= */

function showChoices() {

    dialogueBox.classList.remove(
        "visible"
    );


    choices.innerHTML =
        "";


    const options = [

        {
            text:
                "Why are you nervous?",

            action:
                nervousChoice
        },

        {
            text:
                "We shouldn't have come back here.",

            action:
                backChoice
        },

        {
            text:
                "Stay silent.",

            action:
                silentChoice
        }

    ];


    options.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.textContent =
                option.text;


            button.onclick =
                () => {

                    choices.innerHTML =
                        "";

                    option.action();

                };


            choices.appendChild(
                button
            );

        }
    );
}


/* =========================
START
========================= */

async function startChapter() {

    await wait(2500);


    changeScene(
        "black"
    );


    playSound(
        "ring"
    );


    playMusic(
        "heart",
        .9
    );


    await wait(2000);


    await say(
        "..."
    );


    /* MEMORY */

    playMusic(
        "ocean",
        .9
    );


    changeScene(
        "ben_beach",
        "flash"
    );


    await wait(800);


    await say(
        "Promise me we won't forget this summer.",
        "Ben"
    );


    playSound(
        "hit"
    );


    playSound(
        "sting"
    );


    changeScene(
        "ben_bleeding",
        "shake"
    );


    await wait(500);


    changeScene(
        "ben_dead"
    );


    await say(
        "You left me there.",
        "Ben",
        "horror"
    );


    stopMusic();


    changeScene(
        "black"
    );


    await wait(500);


    /* CAR */

    playSound(
        "ring"
    );


    playMusic(
        "car",
        .7
    );


    changeScene(
        "elias_1"
    );


    await say(
        "My chest hurts.",
        "",
        "thought"
    );


    await say(
        "The ringing won't stop.",
        "",
        "thought"
    );


    await say(
        "I can't remember falling asleep.",
        "",
        "thought"
    );


    changeScene(
        "elias_2"
    );


    await say(
        "Hey.",
        "Elias"
    );


    changeScene(
        "elias_1"
    );


    await say(
        "Hey.",
        "Elias"
    );


    changeScene(
        "elias_3"
    );


    await say(
        "You were screaming again.",
        "Elias"
    );


    await say(
        "Again?",
        "",
        "thought"
    );


    await say(
        "My throat burns.",
        "",
        "thought"
    );


    await say(
        "Like I swallowed seawater.",
        "",
        "thought"
    );


    changeScene(
        "elias_1"
    );


    await say(
        "...",
        "Elias"
    );


    await say(
        "You still with me?",
        "Elias"
    );


    changeScene(
        "elias_2"
    );


    await say(
        "What was your name again?",
        "Elias"
    );


    askName();
}


/* =========================
AFTER NAME
========================= */

async function continueAfterName() {

    await say(
        playerName + ".",
        "Elias"
    );


    await say(
        "Right.",
        "Elias"
    );


    changeScene(
        "mina_1"
    );


    await say(
        "Can we just get this over with?",
        "Mina"
    );


    await say(
        "Nobody is the same anymore.",
        "",
        "thought"
    );


    await say(
        "Not after last year.",
        "",
        "thought"
    );


    /* FLASHBACK */

    playSound(
        "sting"
    );


    changeScene(
        "ben_bleeding",
        "flash"
    );


    await wait(200);


    changeScene(
        "elias_1"
    );


    await say(
        "We're almost there.",
        "Elias"
    );


    await say(
        "We cut all ties with this place.",
        "Elias"
    );


    await say(
        "Clean any evidence if there is any left.",
        "Elias"
    );


    await say(
        "But what evidence.",
        "",
        "thought"
    );


    changeScene(
        "elias_3"
    );


    await say(
        "Then we leave.",
        "Elias"
    );


    await wait(500);


    showChoices();
}


/* =========================
CHOICE 1
========================= */

async function nervousChoice() {

    changeScene(
        "elias_1"
    );


    await say(
        "We're driving back to the place I despise.",
        "Elias"
    );


    await say(
        "How do you want me to act?",
        "Elias"
    );


    houseArrival();
}


/* =========================
CHOICE 2
========================= */

async function backChoice() {

    changeScene(
        "mina_3"
    );


    await say(
        "Then why did you agree to come?",
        "Mina"
    );


    await say(
        "Regretting it now is useless.",
        "Mina"
    );


    houseArrival();
}


/* =========================
CHOICE 3
========================= */

async function silentChoice() {

    await wait(1000);


    playSound(
        "radio"
    );


    await say(
        "The radio crackles softly.",
        "",
        "thought"
    );


    playSound(
        "whisper"
    );


    await say(
        "don't leave me",
        "",
        "whisper"
    );


    changeScene(
        "mina_2"
    );


    await say(
        "I hate this.",
        "Mina"
    );


    houseArrival();
}


/* =========================
HOUSE
========================= */

async function houseArrival() {

    stopMusic();


    await wait(1500);


    playMusic(
        "ocean",
        .6
    );


    changeScene(
        "house",
        "normal",
        true
    );


    await say(
        "I forgot how quiet this place was.",
        "",
        "thought"
    );


    playSound(
        "creak"
    );


    changeScene(
        "upstairs",
        "normal",
        true
    );


    await say(
        "Something moved upstairs.",
        "",
        "thought"
    );


    changeScene(
        "mina1"
    );


    await say(
        "The air smells different.",
        "Mina"
    );


    await say(
        "Doesn't it smell weird?",
        "",
        "mc"
    );


    changeScene(
        "mina2"
    );


    await say(
        "You mean like a dead body rotten.",
        "Mina"
    );


    await wait(500);


    changeScene(
        "mina3"
    );


    await say(
        "Do you ever think about how little he stayed alive?",
        "Mina"
    );


    playSound(
        "sting"
    );


    await say(
        "And why would you ask that?",
        "",
        "mc"
    );


    changeScene(
        "mina4"
    );


    await say(
        "No reason.",
        "Mina"
    );


    changeScene(
        "mina_elias"
    );


    await say(
        "We're standing outside talking like ghosts.",
        "Elias"
    );


    await say(
        "Ben would've made fun of us for this.",
        "Elias"
    );


    await say(
        "Ben hated sunsets here.",
        "Elias"
    );


    await say(
        "Still he should have come shouldn't he",
        "",
        "mc"
    );


    changeScene(
        "elias1"
    );


    await say(
        "Ben hated this house.",
        "Elias"
    );


    await wait(800);


    await say(
        "That isn't true.",
        "",
        "thought"
    );


    await say(
        "Especially after that incident started staying here.",
        "Elias"
    );


    await say(
        "He knew if he came we would come too.",
        "Elias"
    );


    await say(
        "...Let's just get this over with.",
        "Elias"
    );


    playSound(
        "creak"
    );


    playSound(
        "sting"
    );


    changeScene(
        "upstairs",
        "shake"
    );


    await say(
        "Someone is watching us.",
        "",
        "thought"
    );


    changeScene(
        "mina2"
    );


    await say(
        "...Do you think she cleaned it all up?",
        "Mina"
    );


    await say(
        "cleaned what",
        "",
        "mc"
    );


    changeScene(
        "elias2"
    );


    await wait(700);


    await say(
        "...There wasn't so much of that you know.",
        "Elias"
    );


    await wait(700);


    changeScene(
        "mina3"
    );


    await say(
        "why are you being so cryptic?",
        "Mina"
    );


    playSound(
        "door"
    );


    changeScene(
        "door"
    );


    await say(
        "The front door is already open.",
        "",
        "thought"
    );


    await wait(1000);


    /* END */

    dialogueBox.classList.remove(
        "visible"
    );


    stopMusic();


    setTimeout(() => {

        window.location.href =
            "index.html";

    }, 2500);
}


/* =========================
START CHAPTER
========================= */

startChapter();
