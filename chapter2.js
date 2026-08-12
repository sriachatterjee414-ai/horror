/* =========================================================
   DEAD MAN DON'T TALK
   CHAPTER 2
   THE HOUSE DOESN'T FORGET
========================================================= */

window.chapter2Data = [

    /* =====================================================
       CHAPTER 2 TITLE
    ===================================================== */

    {
        type: "chapterTitle",
        title: "CHAPTER 2",
        subtitle: "THE HOUSE DOESN'T FORGET"
    },


    /* =====================================================
       INTRO
    ===================================================== */

    {
        type: "bg",
        image: "black.jpeg",
        transition: "fade"
    },

    {
        type: "wait",
        duration: 1500
    },

    {
        type: "music",
        src: "ocean.mp3",
        volume: 0.2,
        fadeIn: 4000
    },

    {
        type: "ambient",
        src: "hall_amb.mp3",
        volume: 0.5,
        fadeIn: 3000
    },

    {
        type: "bg",
        image: "door.jpeg",
        transition: "dissolve",
        effect: "zoom"
    },

    {
        type: "thought",
        text: "The front door is already open."
    },

    {
        type: "wait",
        duration: 1000
    },

    {
        type: "thought",
        text: "They didn't react."
    },

    {
        type: "thought",
        text: "Like they expected it."
    },

    {
        type: "wait",
        duration: 1000
    },


    /* =====================================================
       ELIAS / MINA
    ===================================================== */

    {
        type: "character",
        image: "elias0.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "...Did one of you leave it unlocked?"
    },

    {
        type: "wait",
        duration: 800
    },

    {
        type: "character",
        image: "mina0.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "You think I'd come back here alone?"
    },

    {
        type: "sound",
        src: "sfx_creak.mp3"
    },

    {
        type: "thought",
        text: "Nobody laughs."
    },

    {
        type: "thought",
        text: "Nobody says she's joking."
    },

    {
        type: "thought",
        text: "The silence feels wrong."
    },

    {
        type: "character",
        image: "elias0.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Whatever."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "We're already here."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "...Let's just get this over with."
    },

    {
        type: "character",
        image: "mina0.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "You keep saying that."
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Like saying it enough makes this normal."
    },

    {
        type: "character",
        image: "elias00.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Can we not start?"
    },


    /* =====================================================
       HALL
    ===================================================== */

    {
        type: "sound",
        src: "sfx_door.mp3"
    },

    {
        type: "bg",
        image: "hall.jpeg",
        transition: "dissolve",
        effect: "zoom"
    },

    {
        type: "thought",
        text: "Something shifts between them."
    },

    {
        type: "thought",
        text: "A conversation already happening."
    },

    {
        type: "thought",
        text: "One I missed."
    },

    {
        type: "wait",
        duration: 1000
    },

    {
        type: "thought",
        text: "The house looks smaller."
    },

    {
        type: "thought",
        text: "Or maybe I'm remembering it wrong."
    },

    {
        type: "thought",
        text: "The windows look darker."
    },

    {
        type: "thought",
        text: "Like nobody ever lived here."
    },

    {
        type: "character",
        image: "mina01.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "...Do you ever think about how weird this is?"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Coming back."
    },

    {
        type: "character",
        image: "mina02.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Like we're pretending none of it happened."
    },

    {
        type: "character",
        image: "elias02.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Nobody's pretending."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "We clean."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "We leave."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Done."
    },

    {
        type: "thought",
        text: "Machine."
    },

    {
        type: "thought",
        text: "He sounds like a machine again."
    },


    /* =====================================================
       STAIRS
    ===================================================== */

    {
        type: "sound",
        src: "sfx_sting.mp3",
        volume: 0.7
    },

    {
        type: "bg",
        image: "stairs.jpeg",
        transition: "dissolve",
        effect: "zoom"
    },

    {
        type: "thought",
        text: "The stairs are so creepy."
    },

    {
        type: "thought",
        text: "So dark."
    },

    {
        type: "thought",
        text: "It's scary."
    },

    {
        type: "effect",
        name: "jerk"
    },

    {
        type: "sound",
        src: "sfx_creak.mp3"
    },

    {
        type: "thought",
        text: "..."
    },

    {
        type: "thought",
        text: "Let's not."
    },

    {
        type: "character",
        image: "mina01.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Can we please not stay too long?"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "This place..."
    },

    {
        type: "character",
        image: "mina02.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "...feels worse."
    },

    {
        type: "dialogue",
        speaker: "MC",
        text: "Worse than what?"
    },

    {
        type: "character",
        image: "mina03.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "..."
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Forget it."
    },

    {
        type: "character",
        image: "elias01.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Let's just split up."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "Check rooms."
    },

    {
        type: "dialogue",
        speaker: "Elias",
        text: "See if anything's left."
    },

    {
        type: "thought",
        text: "Anything."
    },

    {
        type: "thought",
        text: "Not evidence."
    },

    {
        type: "thought",
        text: "Not blood."
    },

    {
        type: "thought",
        text: "Anything."
    },

    {
        type: "character",
        image: "mina03.jpeg",
        transition: "dissolve"
    },

    {
        type: "sound",
        src: "sfx_whisper.mp3",
        volume: 0.8
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "Don't go upstairs alone."
    },

    {
        type: "dialogue",
        speaker: "MC",
        text: "Why?"
    },

    {
        type: "character",
        image: "mina02.jpeg",
        transition: "dissolve"
    },

    {
        type: "dialogue",
        speaker: "Mina",
        text: "...Just don't."
    },

    {
        type: "thought",
        text: "Nobody explains anything."
    },

    {
        type: "thought",
        text: "Not anymore."
    },


    /* =====================================================
       EXPLORATION
    ===================================================== */

    {
        type: "bg",
        image: "hall.jpeg",
        transition: "fade",
        effect: "zoom"
    },

    {
        type: "music",
        src: "heart.mp3",
        volume: 0.9,
        fadeIn: 9000
    },

    {
        type: "thought",
        text: "The hallway feels colder inside."
    },

    {
        type: "thought",
        text: "The house smells wrong."
    },

    {
        type: "thought",
        text: "Salt. Rot. Metallic."
    },

    {
        type: "thought",
        text: "Maybe I should look around."
    },

    {
        type: "exploration",
        id: "chapter2_explore",

        background: "hall.jpeg",

        rooms: [

            {
                id: "ben",
                name: "Ben's Room",
                image: "hall.jpeg",
                action: "startChapter2Room('ben')"
            },

            {
                id: "bathroom",
                name: "Bathroom",
                image: "hall.jpeg",
                action: "startChapter2Room('bathroom')"
            },

            {
                id: "kitchen",
                name: "Kitchen",
                image: "hall.jpeg",
                action: "startChapter2Room('kitchen')"
            },

            {
                id: "storage",
                name: "Storage Room",
                image: "hall.jpeg",
                action: "startChapter2Room('storage')"
            },

            {
                id: "dining",
                name: "Dining Room",
                image: "hall.jpeg",
                action: "startChapter2Room('dining')"
            }
        ]
    }

];


/* =========================================================
   CHAPTER 2 STATE
========================================================= */

window.chapter2State = {

    visited: {
        ben: false,
        bathroom: false,
        kitchen: false,
        storage: false,
        dining: false
    },

    ben: {
        photo: false,
        camera: false,
        drawer: false
    },

    bathroom: {
        mirror: false,
        sink: false,
        cabinet: false
    },

    kitchen: {
        puzzleSolved: false
    },

    storage: {
        box: false,
        photograph: false
    },

    dining: {
        table: false,
        chair: false
    }
};


/* =========================================================
   SAFE HELPERS
========================================================= */

function ch2PlaySound(src, volume = 1) {

    if (typeof window.playSound === "function") {
        window.playSound(src, volume);
        return;
    }

    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
}


function ch2PlayMusic(src, volume = 1) {

    if (typeof window.playMusic === "function") {
        window.playMusic(src, volume);
        return;
    }

    if (window.chapter2Music) {
        window.chapter2Music.pause();
    }

    window.chapter2Music = new Audio(src);
    window.chapter2Music.loop = true;
    window.chapter2Music.volume = volume;

    window.chapter2Music.play().catch(() => {});
}


function ch2StopMusic() {

    if (typeof window.stopMusic === "function") {
        window.stopMusic();
    }

    if (window.chapter2Music) {
        window.chapter2Music.pause();
        window.chapter2Music.currentTime = 0;
    }
}


/* =========================================================
   ROOM STARTER
========================================================= */

function startChapter2Room(room) {

    window.chapter2State.visited[room] = true;

    switch (room) {

        case "ben":
            startBenRoom();
            break;

        case "bathroom":
            startBathroom();
            break;

        case "kitchen":
            startKitchen();
            break;

        case "storage":
            startStorage();
            break;

        case "dining":
            startDining();
            break;
    }
}


/* =========================================================
   ROOM UTILITY
========================================================= */

function ch2SetBackground(image, effect = "zoom") {

    const bg = document.getElementById("bg-layer");

    if (!bg) return;

    bg.style.backgroundImage = `url("${image}")`;

    bg.classList.remove(
        "full",
        "zoom_in_slow",
        "v_zoom",
        "v_jerk"
    );

    void bg.offsetWidth;

    if (effect) {
        bg.classList.add(effect);
    }
}


function ch2Dialogue(speaker, text, callback) {

    if (typeof window.showDialogue === "function") {

        window.showDialogue(
            speaker,
            text,
            callback
        );

        return;
    }

    const box =
        document.getElementById("dialogue-box");

    const speakerBox =
        document.getElementById("speaker-name");

    const textBox =
        document.getElementById("dialogue-text");

    if (!box || !speakerBox || !textBox) {
        if (callback) callback();
        return;
    }

    box.classList.remove("hidden");

    speakerBox.textContent = speaker || "";

    textBox.textContent = text;

    box.onclick = () => {

        box.classList.add("hidden");

        if (callback) callback();
    };
}


function ch2Thought(text, callback) {

    ch2Dialogue("", text, callback);
}


function ch2Sequence(lines, callback) {

    let index = 0;

    function next() {

        if (index >= lines.length) {

            if (callback) callback();

            return;
        }

        const line = lines[index++];

        if (line.type === "thought") {

            ch2Thought(
                line.text,
                next
            );

        } else {

            ch2Dialogue(
                line.speaker,
                line.text,
                next
            );
        }
    }

    next();
}


/* =========================================================
   RETURN TO EXPLORATION
========================================================= */

function returnToChapter2Explore() {

    ch2SetBackground("hall.jpeg", "zoom_in_slow");

    if (typeof window.showExplorationMenu === "function") {

        window.showExplorationMenu(
            window.chapter2Data.find(
                x => x.id === "chapter2_explore"
            )
        );

        return;
    }

    showChapter2RoomMenu();
}


/* =========================================================
   FALLBACK EXPLORATION MENU
========================================================= */

function showChapter2RoomMenu() {

    const choice =
        document.getElementById("choice-container");

    if (!choice) return;

    choice.innerHTML = "";

    choice.classList.remove("hidden");

    const title =
        document.createElement("div");

    title.className = "exploration-title";

    title.textContent =
        "WHERE SHOULD I LOOK?";

    choice.appendChild(title);


    const rooms = [
        ["ben", "Ben's Room"],
        ["bathroom", "Bathroom"],
        ["kitchen", "Kitchen"],
        ["storage", "Storage Room"],
        ["dining", "Dining Room"]
    ];


    rooms.forEach(([id, name]) => {

        const button =
            document.createElement("button");

        button.className =
            "exploration-choice";

        button.textContent = name;

        button.onclick = () => {

            choice.classList.add("hidden");

            startChapter2Room(id);
        };

        choice.appendChild(button);
    });
}


/* =========================================================
   BEN'S ROOM
========================================================= */

function startBenRoom() {

    ch2SetBackground(
        "ben_room.jpeg",
        "zoom_in_slow"
    );

    ch2PlayMusic(
        "ben_theme.mp3",
        0.7
    );

    const lines = [

        {
            type: "thought",
            text: "..."
        },

        {
            type: "thought",
            text: "Wow. Nothing changed in a year."
        },

        {
            type: "thought",
            text: "Not even the sheets."
        },

        {
            type: "thought",
            text: "Did he not come back?"
        },

        {
            type: "thought",
            text: "The room still feels like him."
        },

        {
            type: "thought",
            text: "Messy. Warm. Loud somehow."
        },

        {
            type: "thought",
            text: "His things are still here."
        },

        {
            type: "thought",
            text: "Nobody touched anything."
        },

        {
            type: "thought",
            text: "Like this room became a museum."
        }
    ];

    ch2Sequence(
        lines,
        showBenMenu
    );
}


function showBenMenu() {

    showRoomChoices(
        "BEN'S ROOM",
        [
            {
                text: "Look at the beach photo",
                disabled:
                    window.chapter2State.ben.photo,
                action: benBeachPhoto
            },

            {
                text: "Inspect Ben's camera",
                disabled:
                    window.chapter2State.ben.camera,
                action: benCamera
            },

            {
                text: "Open bedside drawer",
                disabled:
                    window.chapter2State.ben.drawer,
                action: benDrawer
            },

            {
                text: "Leave room",
                action: returnFromBen
            }
        ]
    );
}


/* =========================================================
   BEN PHOTO
========================================================= */

function benBeachPhoto() {

    window.chapter2State.ben.photo = true;

    ch2SetBackground(
        "beach_photo.jpeg",
        "zoom_in_slow"
    );

    ch2Sequence(
        [

            {
                type: "thought",
                text: "Why is the photo like that?"
            },

            {
                type: "thought",
                text: "Ben loved taking pictures."
            },

            {
                type: "thought",
                text:
                    "He said he would always capture every memory."
            },

            {
                type: "thought",
                text:
                    "That summer... everything got ruined."
            }
        ],

        () => {

            ch2PlaySound(
                "memory_glitch.mp3"
            );

            ch2SetBackground(
                "ben_beach.jpeg",
                "v_zoom"
            );

            ch2Sequence(
                [

                    {
                        speaker: "Ben",
                        type: "dialogue",
                        text:
                            "Promise me we won't become weird adults."
                    },

                    {
                        speaker: "Ben",
                        type: "dialogue",
                        text:
                            "Like the depressing kind."
                    },

                    {
                        speaker: "Ben",
                        type: "dialogue",
                        text:
                            "If any of us become boring..."
                    },

                    {
                        speaker: "Ben",
              
