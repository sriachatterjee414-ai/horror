// ============================================================
// CHAPTER 2 — THE HOUSE DOESN'T FORGET
// ============================================================

window.chapter2Data = [

    // ========================================================
    // CHAPTER 2 INTRO
    // ========================================================

    {
        label: "chapter2_start",
        nodes: [

            {
                type: "bg",
                image: "black",
                transition: "fade"
            },

            {
                type: "pause",
                duration: 2000
            },

            {
                type: "dialogue",
                speaker: "",
                text: "CHAPTER 2",
                centered: true
            },

            {
                type: "pause",
                duration: 1000
            },

            {
                type: "dialogue",
                speaker: "",
                text: "THE HOUSE DOESN'T FORGET",
                centered: true
            },

            {
                type: "pause",
                duration: 2000
            },

            {
                type: "bg",
                image: "black",
                transition: "dissolve"
            },

            {
                type: "pause",
                duration: 1500
            },

            // ---------------- HOUSE ARRIVAL ----------------

            {
                type: "music",
                src: "ocean.mp3",
                loop: true,
                volume: 0.2
            },

            {
                type: "bg",
                image: "door.jpeg",
                transition: "dissolve",
                effect: "zoom_in_slow"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The front door is already open."
            },

            {
                type: "pause",
                duration: 500
            },

            {
                type: "dialogue",
                speaker: "",
                text: "They didn't react."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Like they expected it."
            },

            {
                type: "pause",
                duration: 800
            },

            {
                type: "dialogue",
                speaker: "Elias",
                text: "...Did one of you leave it unlocked?"
            },

            {
                type: "bg",
                image: "mina0.jpeg",
                transition: "dissolve"
            },

            {
                type: "dialogue",
                speaker: "Mina",
                text: "You think I'd come back here alone?"
            },

            {
                type: "sfx",
                src: "sfx_creak.mp3"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Nobody laughs."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Nobody says she's joking."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The silence feels wrong."
            },

            {
                type: "bg",
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
                type: "bg",
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
                type: "bg",
                image: "elias00.jpeg",
                transition: "dissolve"
            },

            {
                type: "dialogue",
                speaker: "Elias",
                text: "Can we not start?"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Something shifts between them."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "A conversation already happening."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "One I missed."
            },

            // ---------------- HALL ----------------

            {
                type: "sfx",
                src: "sfx_door.mp3"
            },

            {
                type: "bg",
                image: "hall.jpeg",
                transition: "dissolve",
                effect: "zoom_in_slow"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The house looks smaller."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Or maybe I'm remembering it wrong."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The windows look darker."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Like nobody ever lived here."
            },

            {
                type: "bg",
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
                type: "bg",
                image: "mina02.jpeg",
                transition: "dissolve"
            },

            {
                type: "dialogue",
                speaker: "Mina",
                text: "Like we're pretending none of it happened."
            },

            {
                type: "bg",
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
                type: "dialogue",
                speaker: "",
                text: "Machine."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "He sounds like a machine again."
            },

            // ---------------- STAIRS ----------------

            {
                type: "sfx",
                src: "sfx_sting.mp3"
            },

            {
                type: "bg",
                image: "stairs.jpeg",
                transition: "dissolve",
                effect: "zoom_in_slow"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The stairs are so creepy."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "So dark."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "It's scary."
            },

            {
                type: "sfx",
                src: "sfx_creak.mp3"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "..."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Let's not."
            },

            {
                type: "bg",
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
                type: "bg",
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
                type: "bg",
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
                type: "bg",
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
                type: "dialogue",
                speaker: "",
                text: "Anything."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Not evidence."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Not blood."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Anything."
            },

            {
                type: "bg",
                image: "mina03.jpeg",
                transition: "dissolve"
            },

            {
                type: "sfx",
                src: "sfx_whisper.mp3"
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
                type: "bg",
                image: "mina02.jpeg",
                transition: "dissolve"
            },

            {
                type: "dialogue",
                speaker: "Mina",
                text: "...Just don't."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Nobody explains anything."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Not anymore."
            },

            {
                type: "bg",
                image: "black",
                transition: "fade"
            },

            {
                type: "pause",
                duration: 1000
            },

            {
                type: "music",
                src: "heart.mp3",
                loop: true,
                volume: 0.8
            },

            {
                type: "bg",
                image: "hall.jpeg",
                transition: "dissolve",
                effect: "zoom_in_slow"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The hallway feels colder inside."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The house smells wrong."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Salt. Rot. Metallic."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Maybe I should look around."
            },

            {
                type: "jump",
                target: "chapter2_explore"
            }
        ]
    },


    // ========================================================
    // EXPLORATION HUB
    // ========================================================

    {
        label: "chapter2_explore",
        nodes: [

            {
                type: "bg",
                image: "hall.jpeg",
                transition: "dissolve"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Where should I look?"
            },

            {
                type: "choice",
                choices: [
                    {
                        text: "Ben's Room",
                        target: "ben_room_start"
                    },
                    {
                        text: "Bathroom",
                        target: "bathroom_start"
                    },
                    {
                        text: "Kitchen",
                        target: "kitchen_start"
                    },
                    {
                        text: "Storage Room",
                        target: "storage_room_start"
                    },
                    {
                        text: "Dining Room",
                        target: "dining_room_start"
                    }
                ]
            }
        ]
    },


    // ========================================================
    // BEN'S ROOM
    // ========================================================

    {
        label: "ben_room_start",
        nodes: [

            {
                type: "bg",
                image: "ben_room.jpeg",
                transition: "fade",
                effect: "zoom_in_slow"
            },

            {
                type: "music",
                src: "ben_theme.mp3",
                loop: true,
                volume: 0.7
            },

            {
                type: "dialogue",
                speaker: "",
                text: "..."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Wow. Nothing changed in a year."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Not even the sheets."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Did he not come back?"
            },

            {
                type: "sfx",
                src: "sfx_ring.mp3"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Ughh... my head. Maybe someone couldn't accept he wouldn't come back."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "The room still feels like him."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Messy. Warm. Loud somehow."
            },

            {
                type: "music_stop",
                fade: 2000
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Too quiet now."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "His things are still here."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Nobody touched anything."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Like this room became a museum."
            },

            {
                type: "choice",
                choices: [
                    {
                        text: "Look at the beach photo",
                        target: "beach_photo_scene"
                    },
                    {
                        text: "Inspect Ben's camera",
                        target: "ben_camera_scene"
                    },
                    {
                        text: "Open bedside drawer",
                        target: "bedside_drawer_scene"
                    },
                    {
                        text: "Leave room",
                        target: "chapter2_explore"
                    }
                ]
            }
        ]
    },


    // ========================================================
    // BEACH PHOTO
    // ========================================================

    {
        label: "beach_photo_scene",
        nodes: [

            {
                type: "bg",
                image: "beach_photo.jpeg",
                transition: "dissolve",
                effect: "zoom_in_slow"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Why is the photo like that?"
            },

            {
                type: "sfx",
                src: "sfx_ring.mp3"
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Ughhh... my head. That summer. Everything got ruined."
            },

            {
                type: "dialogue",
                speaker: "",
                text: "Ben loved taking pictures."
            },

            {
                type: "dialogue",
                speaker: "",
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
                effect: "v_zoom"
            },

            {
                type: "dialogue",
                speaker: "Ben",
                text: "Promise me we won't become weird adults."
            },

            {
                type: "dialogue",
                speaker: "Ben",
                text: "Like the depressing kind."
            },

            {
                type: "dialogue",
                speaker: "Ben",
                text: "If any of us become boring..."
            },

            {
                type: "sfx",
                src: "sfx_whisper.mp3"
            },

            {
                type: "dialogue",
                speaker: "Ben",
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
                type: "dialogue",
                speaker: "",
                tex
