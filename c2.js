/* =========================================================
   CHAPTER 2 — THE HOUSE DOESN'T FORGET
   ========================================================= */

window.chapter2Data = [

    /* =====================================================
       CHAPTER TITLE
       ===================================================== */

    {
        type: "chapterTitle",
        title: "CHAPTER 2",
        subtitle: "THE HOUSE DOESN'T FORGET"
    },

    {
        type: "bg",
        image: "black.jpeg",
        transition: "fade"
    },

    {
        type: "wait",
        duration: 1500
    },

    /* =====================================================
       INTRO
       ===================================================== */

    {
        type: "music",
        src: "ocean.mp3",
        volume: 0.2,
        fade: 4000
    },

    {
        type: "ambient",
        src: "hall_amb.mp3",
        volume: 0.5,
        fade: 3000
    },

    {
        type: "bg",
        image: "door.jpeg",
        transition: "dissolve",
        zoom: true
    },

    {
        speaker: "THOUGHTS",
        text: "The front door is already open."
    },

    {
        speaker: "THOUGHTS",
        text: "They didn't react."
    },

    {
        speaker: "THOUGHTS",
        text: "Like they expected it."
    },

    {
        speaker: "ELIAS",
        text: "...Did one of you leave it unlocked?",
        character: "elias0.jpeg"
    },

    {
        speaker: "MINA",
        text: "You think I'd come back here alone?",
        character: "mina0.jpeg"
    },

    {
        type: "sfx",
        src: "sfx_creak.mp3"
    },

    {
        speaker: "THOUGHTS",
        text: "Nobody laughs."
    },

    {
        speaker: "THOUGHTS",
        text: "Nobody says she's joking."
    },

    {
        speaker: "THOUGHTS",
        text: "The silence feels wrong."
    },

    {
        speaker: "ELIAS",
        text: "Whatever.",
        character: "elias0.jpeg"
    },

    {
        speaker: "ELIAS",
        text: "We're already here."
    },

    {
        speaker: "ELIAS",
        text: "...Let's just get this over with."
    },

    {
        speaker: "MINA",
        text: "You keep saying that.",
        character: "mina0.jpeg"
    },

    {
        speaker: "MINA",
        text: "Like saying it enough makes this normal."
    },

    {
        speaker: "ELIAS",
        text: "Can we not start?",
        character: "elias00.jpeg"
    },

    {
        speaker: "THOUGHTS",
        text: "Something shifts between them."
    },

    {
        speaker: "THOUGHTS",
        text: "A conversation already happening."
    },

    {
        speaker: "THOUGHTS",
        text: "One I missed."
    },

    /* =====================================================
       HALL
       ===================================================== */

    {
        type: "sfx",
        src: "sfx_door.mp3"
    },

    {
        type: "bg",
        image: "hall.jpeg",
        transition: "dissolve",
        zoom: true
    },

    {
        speaker: "THOUGHTS",
        text: "The house looks smaller."
    },

    {
        speaker: "THOUGHTS",
        text: "Or maybe I'm remembering it wrong."
    },

    {
        speaker: "THOUGHTS",
        text: "The windows look darker."
    },

    {
        speaker: "THOUGHTS",
        text: "Like nobody ever lived here."
    },

    {
        speaker: "MINA",
        text: "...Do you ever think about how weird this is?",
        character: "mina01.jpeg"
    },

    {
        speaker: "MINA",
        text: "Coming back."
    },

    {
        speaker: "MINA",
        text: "Like we're pretending none of it happened.",
        character: "mina02.jpeg"
    },

    {
        speaker: "ELIAS",
        text: "Nobody's pretending.",
        character: "elias02.jpeg"
    },

    {
        speaker: "ELIAS",
        text: "We clean."
    },

    {
        speaker: "ELIAS",
        text: "We leave."
    },

    {
        speaker: "ELIAS",
        text: "Done."
    },

    {
        speaker: "THOUGHTS",
        text: "Machine."
    },

    {
        speaker: "THOUGHTS",
        text: "He sounds like a machine again."
    },

    /* =====================================================
       STAIRS
       ===================================================== */

    {
        type: "sfx",
        src: "sfx_sting.mp3",
        volume: 0.7
    },

    {
        type: "bg",
        image: "stairs.jpeg",
        transition: "dissolve",
        zoom: true,
        shake: true
    },

    {
        speaker: "THOUGHTS",
        text: "The stairs are so creepy."
    },

    {
        speaker: "THOUGHTS",
        text: "So dark."
    },

    {
        speaker: "THOUGHTS",
        text: "It's scary."
    },

    {
        type: "sfx",
        src: "sfx_creak.mp3"
    },

    {
        speaker: "THOUGHTS",
        text: "..."
    },

    {
        speaker: "THOUGHTS",
        text: "Let's not."
    },

    {
        speaker: "MINA",
        text: "Can we please not stay too long?",
        character: "mina01.jpeg"
    },

    {
        speaker: "MINA",
        text: "This place..."
    },

    {
        speaker: "MINA",
        text: "...feels worse.",
        character: "mina02.jpeg"
    },

    {
        speaker: "MC",
        text: "Worse than what?"
    },

    {
        speaker: "MINA",
        text: "..."
    },

    {
        speaker: "MINA",
        text: "Forget it.",
        character: "mina03.jpeg"
    },

    {
        speaker: "ELIAS",
        text: "Let's just split up.",
        character: "elias01.jpeg"
    },

    {
        speaker: "ELIAS",
        text: "Check rooms."
    },

    {
        speaker: "ELIAS",
        text: "See if anything's left."
    },

    {
        speaker: "THOUGHTS",
        text: "Anything."
    },

    {
        speaker: "THOUGHTS",
        text: "Not evidence."
    },

    {
        speaker: "THOUGHTS",
        text: "Not blood."
    },

    {
        speaker: "THOUGHTS",
        text: "Anything."
    },

    {
        speaker: "MINA",
        text: "Don't go upstairs alone.",
        character: "mina03.jpeg",
        sfx: "sfx_whisper.mp3"
    },

    {
        speaker: "MC",
        text: "Why?"
    },

    {
        speaker: "MINA",
        text: "...Just don't.",
        character: "mina02.jpeg"
    },

    {
        speaker: "THOUGHTS",
        text: "Nobody explains anything."
    },

    {
        speaker: "THOUGHTS",
        text: "Not anymore."
    },

    /* =====================================================
       EXPLORATION
       ===================================================== */

    {
        type: "bg",
        image: "hall.jpeg",
        transition: "fade",
        zoom: true
    },

    {
        type: "music",
        src: "heart.mp3",
        volume: 0.9,
        fade: 9000
    },

    {
        speaker: "THOUGHTS",
        text: "The hallway feels colder inside."
    },

    {
        speaker: "THOUGHTS",
        text: "The house smells wrong."
    },

    {
        speaker: "THOUGHTS",
        text: "Salt. Rot. Metallic."
    },

    {
        speaker: "THOUGHTS",
        text: "Maybe I should look around."
    },

    {
        type: "exploration",
        rooms: [
            {
                id: "ben",
                name: "Ben's Room",
                image: "ben_room.jpeg"
            },
            {
                id: "bathroom",
                name: "Bathroom",
                image: "bathroom.jpeg"
            },
            {
                id: "kitchen",
                name: "Kitchen",
                image: "kitchen.jpeg"
            },
            {
                id: "storage",
                name: "Storage Room",
                image: "storage_room.jpeg"
            },
            {
                id: "dining",
                name: "Dining Room",
                image: "dining_room.jpeg"
            }
        ]
    }
];


/* =========================================================
   CHAPTER 2 STATE
   ========================================================= */

window.chapter2State = {
    ben: {
        beach: false,
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
        puzzleSolved: false
    },

    dining: {
        puzzleSolved: false
    }
};


/* =========================================================
   LOAD / SAVE
   ========================================================= */

function saveChapter2() {
    localStorage.setItem(
        "aetheria_chapter2_state",
        JSON.stringify(window.chapter2State)
    );
}


function loadChapter2() {

    const saved =
        localStorage.getItem("aetheria_chapter2_state");

    if (!saved) return;

    try {
        window.chapter2State =
            JSON.parse(saved);
    } catch (error) {
        console.warn(
            "Could not load Chapter 2 save.",
            error
        );
    }
}


/* =========================================================
   CHAPTER 2 START
   ========================================================= */

function startChapter2() {

    loadChapter2();

    window.currentChapter = 2;

    if (typeof startDialogue === "function") {
        startDialogue(
            window.chapter2Data
        );
    } else {
        console.error(
            "Chapter 1 dialogue engine was not found."
        );
    }
}


/* =========================================================
   EXPLORATION
   ========================================================= */

function openChapter2Exploration() {

    if (typeof stopAllAudio === "function") {
        stopAllAudio();
    }

    showChapter2RoomMenu();
}


function showChapter2RoomMenu() {

    const overlay =
        document.getElementById(
            "chapter2-exploration"
        );

    if (!overlay) return;

    overlay.classList.remove("hidden");

    renderChapter2Rooms();
}


function renderChapter2Rooms() {

    const container =
        document.getElementById(
            "chapter2-room-list"
        );

    if (!container) return;

    container.innerHTML = "";

    const rooms = [
        {
            id: "ben",
            name: "Ben's Room",
            image: "ben_room.jpeg"
        },
        {
            id: "bathroom",
            name: "Bathroom",
            image: "bathroom.jpeg"
        },
        {
            id: "kitchen",
            name: "Kitchen",
            image: "kitchen.jpeg"
        },
        {
            id: "storage",
            name: "Storage Room",
            image: "storage_room.jpeg"
        },
        {
            id: "dining",
            name: "Dining Room",
            image: "dining_room.jpeg"
        }
    ];

    rooms.forEach(room => {

        const button =
            document.createElement("button");

        button.className =
            "chapter2-room-button";

        button.innerHTML = `
            <img src="${room.image}" alt="">
            <span>${room.name}</span>
        `;

        button.onclick = () => {
            enterChapter2Room(room.id);
        };

        container.appendChild(button);
    });
}


function enterChapter2Room(room) {

    const overlay =
        document.getElementById(
            "chapter2-exploration"
        );

    if (overlay) {
        overlay.classList.add("hidden");
    }

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
            startStorageRoom();
            break;

        case "dining":
            startDiningRoom();
            break;
    }
}


/* =========================================================
   GENERIC CHAPTER 2 DIALOGUE
   ========================================================= */

function playChapter2Dialogue(lines, callback) {

    if (typeof startDialogue !== "function") {
        console.error("Dialogue engine missing.");
        return;
    }

    const data = [
        ...lines,
        {
            type: "callback",
            action: callback
        }
    ];

    startDialogue(data);
}


/* =========================================================
   BEN'S ROOM
   ========================================================= */

function startBenRoom() {

    const lines = [

        {
            type: "music",
            src: "ben_theme.mp3",
            volume: 0.8,
            fade: 4000
        },

        {
            type: "bg",
            image: "ben_room.jpeg",
            transition: "fade",
            zoom: true
        },

        {
            speaker: "THOUGHTS",
            text: "..."
        },

        {
            speaker: "THOUGHTS",
            text: "Wow. Nothing changed in a year."
        },

        {
            speaker: "THOUGHTS",
            text: "Not even the sheets."
        },

        {
            speaker: "THOUGHTS",
            text: "Did he not come back?"
        },

        {
            type: "sfx",
            src: "sfx_ring.mp3",
            volume: 0.2
        },

        {
            speaker: "THOUGHTS",
            text: "Ughh... my head."
        },

        {
            speaker: "THOUGHTS",
            text: "Maybe someone couldn't accept he wouldn't come back."
        },

        {
            speaker: "THOUGHTS",
            text: "The room still feels like him."
        },

        {
            speaker: "THOUGHTS",
            text: "Messy. Warm. Loud somehow."
        },

        {
            speaker: "THOUGHTS",
            text: "His things are still here."
        },

        {
            speaker: "THOUGHTS",
            text: "Nobody touched anything."
        },

        {
            speaker: "THOUGHTS",
            text: "Like this room became a museum."
        }
    ];

    playChapter2Dialogue(
        lines,
        showBenRoomMenu
    );
}


function showBenRoomMenu() {

    showRoomChoiceMenu(
        "BEN'S ROOM",
        [
            {
                text: "Look at the beach photo",
                disabled:
                    window.chapter2State.ben.beach,
                action: () => {
                    startBeachPhoto();
                }
            },

            {
                text: "Inspect Ben's camera",
                disabled:
                    window.chapter2State.ben.camera,
                action: () => {
                    startBenCamera();
                }
            },

            {
                text: "Open bedside drawer",
                disabled:
                    window.chapter2State.ben.drawer,
                action: () => {
                    startBedsideDrawer();
                }
            },

            {
                text: "Leave room",
                action: leaveChapter2Room
            }
        ]
    );
}


/* =========================================================
   BEN — BEACH PHOTO
   ========================================================= */

function startBeachPhoto() {

    window.chapter2State.ben.beach = true;
    saveChapter2();

    playChapter2Dialogue([

        {
            type: "bg",
            image: "beach_photo.jpeg",
            transition: "dissolve",
            zoom: true
        },

        {
            speaker: "THOUGHTS",
            text: "Why is the photo like that?"
        },

        {
            type: "sfx",
            src: "sfx_ring.mp3",
            volume: 0.3
        },

        {
            speaker: "THOUGHTS",
            text: "Ughhh... my head."
        },

        {
            speaker: "THOUGHTS",
            text: "That summer..."
        },

        {
            speaker: "THOUGHTS",
            text: "Everything got ruined."
        },

        {
            speaker: "THOUGHTS",
            text: "Ben loved taking pictures."
        },

        {
            speaker: "THOUGHTS",
            text: "He said he would always capture every memory."
        },

        {
            type: "sfx",
            src: "memory_glitch.mp3"
        },

        {
            type: "bg",
            image: "ben_beach.jpeg",
            transition: "flash",
            zoom: true
        },

        {
            speaker: "BEN",
            text: "Promise me we won't become weird adults."
        },

        {
            speaker: "BEN",
            text: "Like the depressing kind."
        },

        {
            speaker: "BEN",
            text: "If any of us become boring..."
        },

        {
            type: "sfx",
            src: "sfx_whisper.mp3"
        },

        {
            speaker: "BEN",
            text: "I'm haunting everyone."
        },

        {
            type: "sfx",
            src: "memory_glitch.mp3"
        },

        {
            type: "bg",
            image: "ben_room.jpeg",
            transition: "dissolve"
        },

        {
            speaker: "THOUGHTS",
            text: "..."
        },

        {
            speaker: "THOUGHTS",
            text: "You really committed to the bit."
        },

        {
            type: "music",
            src: "heart.mp3",
            volume: 0.5
        },

        {
            speaker: "THOUGHTS",
            text: "My chest hurts."
        },

        {
            speaker: "THOUGHTS",
            text: "Like remembering something painful."
        }

    ], showBenRoomMenu);
}


/* =========================================================
   BEN — CAMERA
   ========================================================= */

function startBenCamera() {

    window.chapter2State.ben.camera = true;
    saveChapter2();

    playChapter2Dialogue([

        {
            type: "bg",
            image: "camera.jpeg",
            transition: "dissolve",
            zoom: true
        },

        {
            speaker: "THOUGHTS",
            text: "His camera."
        },

        {
            speaker: "THOUGHTS",
            text: "Still here."
        },

        {
            speaker: "THOUGHTS",
            text: "Dead battery."
        },

        {
            type: "sfx",
            src: "memory_glitch.mp3"
        },

        {
            type: "bg",
            image: "ben_camera.jpeg",
            transition: "flash"
        },

        {
            speaker: "THOUGHTS",
            text: "Ben recorded everything."
        },

        {
            speaker: "THOUGHTS",
            text: "Even stupid things."
        },

        {
            speaker: "THOUGHTS",
            text: "Especially stupid things."
        },

        {
            speaker: "THOUGHTS",
            text: "He liked memories."
        },

        {
            speaker: "THOUGHTS",
            text: "Said people forgot too easily."
        },

        {
            type: "sfx",
            src: "memory_glitch.mp3"
        },

        {
            type: "bg",
            image: "ben_memory_camera.jpeg",
            transition: "flash",
            zoom: true
        },

        {
            speaker: "BEN",
            text: "Say something dramatic for future us!"
        },

        {
            speaker: "BEN",
            text: "Like—"
        },

        {
            speaker: "BEN",
            text: "'I peaked at nineteen.'"
        },

        {
            speaker: "BEN",
            text: "That'd be hilarious."
        },

        {
            type: "bg",
            image: "ben_room.jpeg",
            transition: "dissolve"
        },

        {
            speaker: "THOUGHTS",
            text: "Future us."
        },

        {
            speaker: "THOUGHTS",
            text: "Sorry."
        },

        {
            speaker: "THOUGHTS",
            text: "We turned out worse."
        }

    ], showBenRoomMenu);
}


/* =================================================
