window.chapter1Data = [
    // Intro cutscene triggers
    { type: "cutscene", src: "intro.webm" },
    { type: "bg", image: "black", transition: "fade" },
    { type: "sfx", src: "ringing.mp3" },
    { type: "music", src: "heartbeat.mp3", action: "play", loop: true },
    { type: "pause", duration: 2000 },
    { type: "dialogue", speaker: null, text: "..." },

    // Memory Flash
    { type: "music", src: "waves.mp3", action: "play", loop: true },
    { type: "bg", image: "ben_beach.jpeg", transform: "full", flash: true },
    { type: "dialogue", speaker: "Ben", color: "#5a7fa8", text: "Promise me we won't forget this summer." },

    { type: "sfx", src: "impact.mp3" },
    { type: "sfx", src: "horror_sting.mp3" },
    { type: "bg", image: "ben_bleeding.jpeg", transform: "v_jerk" },
    { type: "pause", duration: 500 },

    { type: "bg", image: "ben_dead.jpeg", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Ben", color: "#5a7fa8", text: "You left me there." },

    { type: "music", action: "stop" },
    { type: "bg", image: "black", transition: "dissolve" },
    { type: "pause", duration: 500 },

    // Waking up in Car
    { type: "sfx", src: "ringing.mp3" },
    { type: "music", src: "car_drive.mp3", action: "play", loop: true },

    { type: "bg", image: "elias_1.jpeg", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "My chest hurts." },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "The ringing won't stop." },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "I can't remember falling asleep." },

    { type: "bg", image: "elias_2.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Hey." },

    { type: "bg", image: "elias_1.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Hey." },

    { type: "bg", image: "elias_3.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "You were screaming again." },

    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Again?" },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "My throat burns." },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Like I swallowed seawater." },

    { type: "bg", image: "elias_1.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "..." },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "You still with me?" },

    { type: "bg", image: "elias_2.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "What was your name again?" },

    // Prompt for player name
    { type: "input_name" },

    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "[player_name]." },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Right." },

    { type: "bg", image: "mina_1.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "Can we just get this over with?" },

    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Nobody is the same anymore." },
    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Not after last year." },

    // Glitch
    { type: "sfx", src: "horror_sting.mp3" },
    { type: "bg", image: "ben_bleeding.jpeg", transform: "v_zoom", flash: true },

    { type: "bg", image: "elias_1.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "We're almost there." },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "We cut all ties with this place." },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Clean any evidence if there is any left." },

    { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "But what evidence." },

    { type: "bg", image: "elias_3.jpeg", transform: "full" },
    { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Then we leave." },

    // Menu choices
    {
        type: "choice",
        options: [
            { label: "Why are you nervous?", target: "nervous_choice" },
            { label: "We shouldn't have come back here.", target: "back_choice" },
            { label: "Stay silent.", target: "silent_choice" }
        ]
    },

    // Branch 1: Nervous
    {
        label: "nervous_choice",
        nodes: [
            { type: "bg", image: "elias_1.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "We're driving back to the place I despise." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "How do you want me to act?" },
            { type: "jump", target: "house_arrival" }
        ]
    },

    // Branch 2: Back
    {
        label: "back_choice",
        nodes: [
            { type: "bg", image: "mina_3.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "Then why did you agree to come?" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "Regretting it now is useless." },
            { type: "jump", target: "house_arrival" }
        ]
    },

    // Branch 3: Silent
    {
        label: "silent_choice",
        nodes: [
            { type: "sfx", src: "radio_static.mp3" },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "The radio crackles softly." },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8da3bd", text: "don't leave me" },
            { type: "bg", image: "mina_2.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "I hate this." },
            { type: "jump", target: "house_arrival" }
        ]
    },

    // Shared Node: House Arrival
    {
        label: "house_arrival",
        nodes: [
            { type: "music", action: "stop" },
            { type: "pause", duration: 1000 },
            { type: "music", src: "waves.mp3", action: "play", loop: true },
            { type: "bg", image: "house.jpeg", transform: "zoom_in_slow", transition: "dissolve" },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "I forgot how quiet this place was." },

            { type: "sfx", src: "wood_creak.mp3" },
            { type: "bg", image: "upstairs.jpeg", transform: "zoom_in_slow", transition: "dissolve" },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Something moved upstairs." },

            { type: "bg", image: "mina1.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "The air smells different." },
            { type: "dialogue", speaker: "[player_name]", color: "#ffffff", text: "Doesn't it smell weird?" },

            { type: "bg", image: "mina2.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "You mean like a dead body rotten." },

            { type: "bg", image: "mina3.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "Do you ever think about how little he stayed alive?" },

            { type: "sfx", src: "horror_sting.mp3" },
            { type: "dialogue", speaker: "[player_name]", color: "#ffffff", text: "And why would you ask that?" },

            { type: "bg", image: "mina4.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "No reason." },

            { type: "bg", image: "mina_elias.jpeg", transform: "full", transition: "dissolve" },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "We're standing outside talking like ghosts." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Ben would've made fun of us for this." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Ben hated sunsets here." },
            { type: "dialogue", speaker: "[player_name]", color: "#ffffff", text: "Still he should have come shouldn't he" },

            { type: "bg", image: "elias1.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Ben hated this house." },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "That isn't true." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "Especially after that incident started staying here." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "He knew if he came we would come too." },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "...Let's just get this over with." },

            { type: "sfx", src: "wood_creak.mp3" },
            { type: "sfx", src: "horror_sting.mp3" },
            { type: "bg", image: "upstairs.jpeg", transform: "v_jerk" },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "Someone is watching us." },

            { type: "bg", image: "mina2.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "...Do you think she cleaned it all up?" },
            { type: "dialogue", speaker: "[player_name]", color: "#ffffff", text: "cleaned what" },

            { type: "bg", image: "elias2.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Elias", color: "#a0a0a0", bold: true, text: "...There wasn't so much of that you know." },

            { type: "bg", image: "mina3.jpeg", transform: "full" },
            { type: "dialogue", speaker: "Mina", color: "#c7b2ff", text: "why are you  being so cryptic?" },

            { type: "sfx", src: "door_creak.mp3" },
            { type: "bg", image: "door.jpeg", transform: "full", transition: "dissolve" },
            { type: "dialogue", speaker: null, italic: true, text_color: "#8fbcd1", text: "The front door is already open." },

            { type: "dialogue", speaker: null, text: "End of Part 1." },
            { type: "return_to_menu" }
        ]
    }
];
                
