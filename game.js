/* =========================================================
   THE HOUSE
   Browser Visual Novel Engine
========================================================= */


/* =========================================================
   ASSET SYSTEM

   Images are in the ROOT of the GitHub repository.

   Example:

   index.html
   style.css
   script.js

   ben_beach.png
   ben_bleeding.jpeg
   mina1.png
   mina_1.jpeg
   etc.

   The engine automatically tries PNG / JPG / JPEG.
   Your original files are NOT renamed.
========================================================= */

const imageCache = {};

const imageExtensions = [
    ".png",
    ".jpg",
    ".jpeg"
];

function findImage(name, callback) {

    if (imageCache[name]) {
        callback(imageCache[name]);
        return;
    }

    let index = 0;

    function tryNext() {

        if (index >= imageExtensions.length) {

            console.warn(
                "Could not find image:",
                name
            );

            callback("");
            return;
        }

        const src =
            "./" +
            name +
            imageExtensions[index];

        const img =
            new Image();

        img.onload = function () {

            imageCache[name] =
                src;

            callback(src);
        };

        img.onerror = function () {

            index++;

            tryNext();
        };

        img.src = src;
    }

    tryNext();
}


/* =========================================================
   AUDIO
========================================================= */

const AUDIO = {

    ocean:
        "audio/waves.mp3",

    car:
        "audio/car_drive.mp3",

    heart:
        "audio/heartbeat.mp3",

    sfx_hit:
        "audio/impact.mp3",

    sfx_ring:
        "audio/ringing.mp3",

    sfx_door:
        "audio/door_creak.mp3",

    sfx_creak:
        "audio/wood_creak.mp3",

    sfx_radio:
        "audio/radio_static.mp3",

    sfx_sting:
        "audio/horror_sting.mp3",

    hall_amb:
        "audio/hall_ambience.mp3",

    sfx_steps:
        "audio/footsteps.mp3",

    sfx_whisper:
        "audio/ghostly_whisper.mp3",

    sfx_clatter:
        "audio/metal_clatter.mp3",

    ben_theme:
        "audio/ben_theme.mp3",

    memory_glitch:
        "audio/glitch.mp3",

    sfx_pill_bottle:
        "audio/pills.mp3"
};


/* =========================================================
   DOM
========================================================= */

const titleScreen =
    document.getElementById("titleScreen");

const chapterScreen =
    document.getElementById("chapterScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const chapterButton =
    document.getElementById("chapterButton");

const backToTitle =
    document.getElementById("backToTitle");

const gameImage =
    document.getElementById("gameImage");

const backgroundImage =
    document.getElementById("sceneImage");

const dialogueBox =
    document.getElementById("dialogueBox");

const speaker =
    document.getElementById("speaker");

const dialogue =
    document.getElementById("dialogue");

const choices =
    document.getElementById("choices");

const flash =
    document.getElementById("flash");

const music =
    document.getElementById("music");

const sound =
    document.getElementById("sound");

const nameOverlay =
    document.getElementById("nameInputOverlay");

const nameInput =
    document.getElementById("playerNameInput");

const nameConfirm =
    document.getElementById("nameConfirm");

const endingScreen =
    document.getElementById("endingScreen");

const gameMenu =
    document.getElementById("gameMenu");


/* =========================================================
   GAME STATE
========================================================= */

let playerName =
    localStorage.getItem("house_player_name")
    || "Y/N";

let currentChapter = 1;

let currentScene = null;

let typing = false;

let typeTimer = null;

let currentText = "";

let musicName = "";


/* =========================================================
   SCREEN SWITCHING
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(s => {

            s.classList.remove("active");

        });

    screen.classList.add("active");
}


/* =========================================================
   AUDIO
========================================================= */

function playSound(name) {

    if (!AUDIO[name]) {
        console.warn(
            "Missing audio:",
            name
        );

        return;
    }

    sound.pause();

    sound.currentTime = 0;

    sound.src =
        AUDIO[name];

    sound.volume = 0.9;

    sound.play()
        .catch(() => {});
}


function playMusic(
    name,
    volume = 0.7
) {

    if (!AUDIO[name]) {
        return;
    }

    if (
        musicName === name &&
        !music.paused
    ) {
        return;
    }

    music.pause();

    musicName = name;

    music.src =
        AUDIO[name];

    music.loop = true;

    music.volume = 0;

    music.play()
        .catch(() => {});

    fadeMusic(volume);
}


function fadeMusic(target) {

    let current =
        music.volume;

    const difference =
        target - current;

    const steps = 20;

    let count = 0;

    const interval =
        setInterval(() => {

            count++;

            current +=
                difference / steps;

            music.volume =
                Math.max(
                    0,
                    Math.min(
                        1,
                        current
                    )
                );

            if (count >= steps) {
                clearInterval(interval);
            }

        }, 50);
}


function stopMusic() {

    music.pause();

    music.currentTime = 0;

    musicName = "";
}


/* =========================================================
   IMAGE DISPLAY
========================================================= */

function showImage(
    name,
    effect = "normal"
) {

    findImage(
        name,
        src => {

            if (!src) {
                return;
            }

            gameImage.classList.remove(
                "visible"
            );

            setTimeout(() => {

                gameImage.src = src;

                gameImage.classList.remove(
                    "horrorJerk"
                );

                if (
                    effect === "jerk"
                ) {

                    void gameImage.offsetWidth;

                    gameImage.classList.add(
                        "horrorJerk"
                    );
                }

                gameImage.classList.add(
                    "visible"
                );

            }, 120);

        }
    );
}


/* =========================================================
   BACKGROUND
========================================================= */

function setBackground(name) {

    findImage(
        name,
        src => {

            if (!src) return;

            backgroundImage.src =
                src;

        }
    );
}


/* =========================================================
   FLASH
========================================================= */

function flashScreen() {

    flash.classList.remove(
        "flashActive"
    );

    void flash.offsetWidth;

    flash.classList.add(
        "flashActive"
    );
}


/* =========================================================
   TYPEWRITER
========================================================= */

function typeText(
    text,
    callback
) {

    clearTimeout(typeTimer);

    typing = true;

    currentText = text;

    dialogue.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            dialogue.textContent +=
                text.charAt(i);

            i++;

            typeTimer =
                setTimeout(
                    type,
                    18
                );

        } else {

            typing = false;

            if (callback) {
                callback();
            }
        }
    }

    type();
}


/* =========================================================
   DIALOGUE
========================================================= */

function say(
    character,
    text,
    type = "normal"
) {

    speaker.textContent =
        character || "";

    dialogue.className =
        "";

    if (type === "thought") {
        dialogue.classList.add(
            "thought"
        );
    }

    if (type === "whisper") {
        dialogue.classList.add(
            "whisper"
        );
    }

    typeText(text);

    choices.innerHTML =
        "";
}


/* =========================================================
   SCENE STEP
========================================================= */

function step(scene) {

    currentScene =
        scene;

    if (!scene) {
        return;
    }

    if (scene.image) {

        showImage(
            scene.image,
            scene.effect || "normal"
        );

    }

    if (scene.music) {

        playMusic(
            scene.music,
            scene.volume || .7
        );

    }

    if (scene.sound) {
        playSound(scene.sound);
    }

    if (scene.flash) {
        flashScreen();
    }

    if (scene.pause) {

        setTimeout(
            () => {},
            scene.pause
        );
    }

    say(
        scene.character,
        scene.text,
        scene.type
    );
}


/* =========================================================
   NEXT SCENE
========================================================= */

function nextScene() {

    if (typing) {

        clearTimeout(
            typeTimer
        );

        dialogue.textContent =
            currentText;

        typing = false;

        return;
    }

    if (!currentScene) {
        return;
    }

    if (
        currentScene.next
    ) {

        currentScene.next();

    }

}


/* =========================================================
   CLICK DIALOGUE
========================================================= */

dialogueBox.addEventListener(
    "click",
    () => {

        if (
            choices.children.length > 0
        ) {
            return;
        }

        nextScene();

    }
);


/* =========================================================
   CHOICE SYSTEM
========================================================= */

function showChoices(
    list
) {

    choices.innerHTML =
        "";

    list.forEach(choice => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "choice";

        button.textContent =
            choice.text;

        button.onclick = () => {

            choices.innerHTML =
                "";

            choice.action();

        };

        choices.appendChild(
            button
        );

    });

}


/* =========================================================
   NAME INPUT
========================================================= */

function askName(
    callback
) {

    nameOverlay.classList.remove(
        "hidden"
    );

    nameInput.value =
        playerName === "Y/N"
        ? ""
        : playerName;

    setTimeout(
        () => nameInput.focus(),
        100
    );

    nameConfirm.onclick =
        () => {

            const value =
                nameInput.value
                    .trim();

            playerName =
                value || "Y/N";

            localStorage.setItem(
                "house_player_name",
                playerName
            );

            nameOverlay.classList.add(
                "hidden"
            );

            callback();

        };
}


/* =========================================================
   PART 1
========================================================= */

function startPart1() {

    currentChapter = 1;

    endingScreen.classList.add(
        "hidden"
    );

    showScreen(
        gameScreen
    );

    document
        .getElementById(
            "chapterIndicator"
        )
        .textContent =
        "CHAPTER I — THE RETURN";

    playSound(
        "sfx_ring"
    );

    playMusic(
        "heart",
        .9
    );

    setBackground(
        "ben_beach"
    );

    showImage(
        "ben_beach"
    );

    scene1();
}


/* =========================================================
   MEMORY
========================================================= */

function scene1() {

    say(
        null,
        "..."
    );

    currentScene = {

        next: () => {

            playMusic(
                "ocean",
                .9
            );

            flashScreen();

            showImage(
                "ben_beach"
            );

            setTimeout(
                () => {

                    say(
                        "Ben",
                        "Promise me we won't forget this summer."
                    );

                    currentScene = {
                        next: scene2
                    };

                },
                800
            );
        }

    };
}


function scene2() {

    playSound(
        "sfx_hit"
    );

    playSound(
        "sfx_sting"
    );

    flashScreen();

    showImage(
        "ben_bleeding",
        "jerk"
    );

    say(
        "Ben",
        "..."
    );

    currentScene = {

        next: () => {

            showImage(
                "ben_dead"
            );

            say(
                "Ben",
                "You left me there."
            );

            currentScene = {

                next: wakeUp

            };

        }

    };
}


/* =========================================================
   CAR
========================================================= */

function wakeUp() {

    stopMusic();

    setTimeout(
        () => {

            playSound(
                "sfx_ring"
            );

            playMusic(
                "car",
                .7
            );

            showImage(
                "elias_1"
            );

            say(
                null,
                "My chest hurts.",
                "thought"
            );

            currentScene = {
                next: wakeUp2
            };

        },
        500
    );
}


function wakeUp2() {

    showImage(
        "elias_2"
    );

    say(
        "Elias",
        "Hey."
    );

    currentScene = {

        next: () => {

            showImage(
                "elias_1"
            );

            say(
                "Elias",
                "Hey."
            );

            currentScene = {

                next: () => {

                    showImage(
                        "elias_3"
                    );

                    say(
                        "Elias",
                        "You were screaming again."
                    );

                    currentScene = {
                        next: wakeUp3
                    };

                }

            };

        }

    };
}


function wakeUp3() {

    say(
        null,
        "Again?",
        "thought"
    );

    currentScene = {

        next: () => {

            say(
                null,
                "My throat burns.",
                "thought"
            );

            currentScene = {

                next: () => {

                    say(
                        null,
                        "Like I swallowed seawater.",
                        "thought"
                    );

                    currentScene = {
                        next: wakeUp4
                    };

                }

            };

        }

    };
}


function wakeUp4() {

    showImage(
        "elias_1"
    );

    say(
        "Elias",
        "You still with me?"
    );

    currentScene = {

        next: () => {

            showImage(
                "elias_2"
            );

            say(
                "Elias",
                "What was your name again?"
            );

            currentScene = {

                next: () => {

                    askName(
                        () => {

                            showImage(
                                "elias_1"
                            );

                            say(
                                "Elias",
                                playerName + ". Right."
                            );

                            currentScene = {
                                next:
                                    minaCar
                            };

                        }
                    );

                }

            };

        }

    };
}


/* =========================================================
   MINA IN CAR
========================================================= */

function minaCar() {

    showImage(
        "mina_1"
    );

    say(
        "Mina",
        "Can we just get this over with?"
    );

    currentScene = {

        next: () => {

            say(
                null,
                "Nobody is the same anymore.",
                "thought"
            );

            currentScene = {

                next: () => {

                    say(
                        null,
                        "Not after last year.",
                        "thought"
                    );

                    currentScene = {
                        next:
                            flashback
                    };

                }

            };

        }

    };
}


/* =========================================================
   FLASHBACK
========================================================= */

function flashback() {

    playSound(
        "sfx_sting"
    );

    flashScreen();

    showImage(
        "ben_bleeding"
    );

    setTimeout(
        () => {

            playSound(
                "memory_glitch"
            );

            showImage(
                "elias_1"
            );

            say(
                "Elias",
                "We're almost there."
            );

            currentScene = {

                next: () => {

                    say(
                        "Elias",
                        "We cut all ties with this place."
                    );

                    currentScene = {

                        next: () => {

                            say(
                                "Elias",
                                "Clean any evidence if there is any left."
                            );

                            currentScene = {

                                next: () => {

                                    say(
                                        null,
                                        "But what evidence.",
                                        "thought"
                                    );

                                    currentScene = {

                                        next:
                                            flashback2

                                    };

                                }

                            };

                        }

                    };

                }

            };

        },
        250
    );
}


function flashback2() {

    showImage(
        "elias_3"
    );

    say(
        "Elias",
        "Then we leave."
    );

    currentScene = {

        next: () => {

            showChoices([

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

            ]);

        }

    };
}


/* =========================================================
   CHOICES
========================================================= */

function nervousChoice() {

    showImage(
        "elias_1"
    );

    say(
        "Elias",
        "We're driving back to the place I despise."
    );

    currentScene = {

        next: () => {

            say(
                "Elias",
                "How do you want me to act?"
            );

            currentScene = {
                next:
                    houseArrival
            };

        }

    };
}


function backChoice() {

    showImage(
        "mina_3"
    );

    say(
        "Mina",
        "Then why did you agree to come?"
    );

    currentScene = {

        next: () => {

            say(
                "Mina",
                "Regretting it now is useless."
            );

            currentScene = {
                next:
                    houseArrival
            };

        }

    };
}


function silentChoice() {

    playSound(
        "sfx_radio"
    );

    say(
        null,
        "The radio crackles softly.",
        "thought"
    );

    currentScene = {

        next: () => {

            playSound(
                "sfx_whisper"
            );

            say(
                null,
                "don't leave me",
                "whisper"
            );

            currentScene = {

                next: () => {

                    showImage(
                        "mina_2"
                    );

                    say(
                        "Mina",
                        "I hate this."
                    );

                    currentScene = {
                        next:
                            houseArrival
                    };

                }

            };

        }

    };
}


/* =========================================================
   HOUSE ARRIVAL
========================================================= */

function houseArrival() {

    stopMusic();

    setTimeout(
        () => {

            playMusic(
                "ocean",
                .6
            );

            showImage(
                "house"
            );

            say(
                null,
                "I forgot how quiet this place was.",
                "thought"
            );

            currentScene = {

                next:
                    upstairs

            };

        },
        800
    );
}


function upstairs() {

    playSound(
        "sfx_creak"
    );

    showImage(
        "upstairs"
    );

    say(
        null,
        "Something moved upstairs.",
        "thought"
    );

    currentScene = {

        next: houseMina1

    };
}


/* =========================================================
   IMPORTANT:
   mina1 AND mina_1 ARE DIFFERENT.
========================================================= */

function houseMina1() {

    showImage(
        "mina1"
    );

    say(
        "Mina",
        "The air smells different."
    );

    currentScene = {

        next: () => {

            say(
                "Elias",
                "Doesn't it smell weird?"
            );

            currentScene = {
                next:
                    houseMina2
            };

        }

    };
}


function houseMina2() {

    showImage(
        "mina2"
    );

    say(
        "Mina",
        "You mean like a dead body rotten."
    );

    currentScene = {

        next: () => {

            showImage(
                "mina3"
            );

            say(
                "Mina",
                "Do you ever think about how little he stayed alive?"
            );

            currentScene = {
                next:
                    houseQuestion
            };

        }

    };
}


function houseQuestion() {

    playSound(
        "sfx_sting"
    );

    say(
        "Elias",
        "And why would you ask that?"
    );

    currentScene = {

        next: () => {

            showImage(
                "mina4"
            );

            say(
                "Mina",
                "No reason."
            );

            currentScene = {
                next:
                    houseOutside
            };

        }

    };
}


function houseOutside() {

    showImage(
        "mina_elias"
    );

    say(
        "Elias",
        "We're standing outside talking like ghosts."
    );

    currentScene = {

        next: () => {

            say(
                "Elias",
                "Ben would've made fun of us for this."
            );

            currentScene = {

                next: () => {

                    say(
                        "Elias",
                        "Ben hated sunsets here."
                    );

                    currentScene = {

                        next: () => {

                            say(
                                "Elias",
                                "Still, he should have come, shouldn't he?"
                            );

                            currentScene = {

                                next:
                                    benHouse

                            };

                        }

                    };

                }

            };

        }

    };
}


function benHouse() {

    showImage(
        "elias1"
    );

    say(
        "Elias",
        "Ben hated this house."
    );

    currentScene = {

        next: () => {

            say(
                null,
                "That isn't true.",
                "thought"
            );

            currentScene = {

                next: () => {

                    say(
                        "Elias",
                        "Especially after that incident started staying here."
                    );

                    currentScene = {

                        next: () => {

                            say(
                                "Elias",
                                "He knew if he came we would come too."
                            );

                            currentScene = {

                                next: () => {

                                    say(
                                        "Elias",
                                        "...Let's just get this over with."
                                    );

                                    currentScene = {
                                        next:
                                            watcher
                                    };

                                }

                            };

                        }

                    };

                }

            };

        }

    };
}


/* =========================================================
   SOMETHING WATCHING
========================================================= */

function watcher() {

    playSound(
        "sfx_creak"
    );

    playSound(
        "sfx_sting"
    );

    showImage(
        "upstairs",
        "jerk"
    );

    say(
        null,
        "Someone is watching us.",
        "thought"
    );

    currentScene = {

        next: () => {

            showImage(
                "mina2"
            );

            say(
                "Mina",
                "...Do you think she cleaned it all up?"
            );

            currentScene = {

                next: () => {

                    say(
                        "Elias",
                        "Cleaned what?"
                    );

                    currentScene = {

                        next:
                            cryptic

                    };

                }

            };

        }

    };
}


function cryptic() {

    showImage(
        "elias2"
    );

    say(
        "Elias",
        "...There wasn't so much of that, you know."
    );

    currentScene = {

        next: () => {

            showImage(
                "mina3"
            );

            say(
                "Mina",
                "Why are you being so cryptic?"
            );

            currentScene = {

                next:
                    doorScene

            };

        }

    };
}


/* =========================================================
   DOOR
========================================================= */

function doorScene() {

    playSound(
        "sfx_door"
    );

    showImage(
        "door"
    );

    say(
        null,
        "The front door is already open.",
        "thought"
    );

    currentScene = {

        next:
            endPart1

    };
}


/* =========================================================
   END PART 1
========================================================= */

function endPart1() {

    stopMusic();

    dialogueBox.style.opacity =
        "0";

    setTimeout(
        () => {

            endingScreen.classList.remove(
                "hidden"
            );

        },
        1000
    );
}


/* =========================================================
   CHAPTER 2
========================================================= */

function startChapter2() {

    currentChapter = 2;

    document
        .getElementById(
            "chapterIndicator"
        )
        .textContent =
        "CHAPTER II";

    showScreen(
        gameScreen
    );

    /*
       Put your existing Chapter 2
       scenes here.

       Example:

       showImage("your_chapter_2_image");

       say(
           "Elias",
           "Your Chapter 2 dialogue."
       );
    */

    showImage(
        "house"
    );

    say(
        null,
        "Chapter II begins...",
        "thought"
    );

    currentScene = {

        next: () => {

            say(
                null,
                "Your existing Chapter 2 content can be connected here.",
                "thought"
            );

        }

    };
}


/* =========================================================
   CHAPTER 3
========================================================= */

function startChapter3() {

    currentChapter = 3;

    document
        .getElementById(
            "chapterIndicator"
        )
        .textContent =
        "CHAPTER III";

    showScreen(
        gameScreen
    );

    /*
       Put your existing Chapter 3
       scenes here.
    */

    showImage(
        "upstairs"
    );

    say(
        null,
        "Chapter III begins...",
        "thought"
    );

    currentScene = {

        next: () => {

            say(
                null,
                "Your existing Chapter 3 content can be connected here.",
                "thought"
            );

        }

    };
}


/* =========================================================
   START BUTTON
========================================================= */

startButton.addEventListener(
    "click",
    () => {

        startPart1();

    }
);


/* =========================================================
   CHAPTER SELECT BUTTON
========================================================= */

chapterButton.addEventListener(
    "click",
    () => {

        showScreen(
            chapterScreen
        );

    }
);


/* =========================================================
   BACK
========================================================= */

backToTitle.addEventListener(
    "click",
    () => {

        showScreen(
            titleScreen
        );

    }
);


/* =========================================================
   CHAPTER CARDS
========================================================= */

document
    .querySelectorAll(
        ".chapterCard"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const chapter =
                    card.dataset.chapter;

                if (chapter === "1") {

                    startPart1();

                }

                else if (
                    chapter === "2"
                ) {

                    startChapter2();

                }

                else if (
                    chapter === "3"
                ) {

                    startChapter3();

                }

            }
        );

    });


/* =========================================================
   GAME MENU
========================================================= */

document
    .getElementById(
        "gameMenuButton"
    )
    .addEventListener(
        "click",
        () => {

            gameMenu.classList.toggle(
                "hidden"
            );

        }
    );


document
    .getElementById(
        "menuClose"
    )
    .addEventListener(
        "click",
        () => {

            gameMenu.classList.add(
                "hidden"
            );

        }
    );


document
    .getElementById(
        "menuRestart"
    )
    .addEventListener(
        "click",
        () => {

            gameMenu.classList.add(
                "hidden"
            );

            if (
                currentChapter === 1
            ) {
                startPart1();
            }

            if (
                currentChapter === 2
            ) {
                startChapter2();
            }

            if (
                currentChapter === 3
            ) {
                startChapter3();
            }

        }
    );


document
    .getElementById(
        "menuChapters"
    )
    .addEventListener(
        "click",
        () => {

            gameMenu.classList.add(
                "hidden"
            );

            stopMusic();

            showScreen(
                chapterScreen
            );

        }
    );


/* =========================================================
   ENDING BUTTON
========================================================= */

document
    .getElementById(
        "endingChapters"
    )
    .addEventListener(
        "click",
        () => {

            endingScreen.classList.add(
                "hidden"
            );

            dialogueBox.style.opacity =
                "1";

            showScreen(
                chapterScreen
            );

        }
    );


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.code === "Space" ||
            event.code === "Enter"
        ) {

            if (
                gameScreen.classList.contains(
                    "active"
                )
            ) {

                if (
                    !nameOverlay.classList.contains(
                        "hidden"
                    )
                ) {
                    return;
                }

                nextScene();

            }

        }

        if (
            event.code === "Escape"
        ) {

            gameMenu.classList.toggle(
                "hidden"
            );

        }

    }
);


/* =========================================================
   PRELOAD IMPORTANT IMAGES
========================================================= */

const preloadImages = [

    "ben_beach",
    "ben_bleeding",
    "ben_dead",

    "elias_1",
    "elias_2",
    "elias_3",

    "mina_1",
    "mina_2",
    "mina_3",

    "house",
    "upstairs",

    "mina1",
    "mina2",
    "mina3",
    "mina4",

    "mina_elias",

    "elias1",
    "elias2",

    "door"
];

preloadImages.forEach(
    name => {

        findImage(
            name,
            () => {}
        );

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

showScreen(
    titleScreen
);
