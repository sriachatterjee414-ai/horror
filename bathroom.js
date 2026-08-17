// bathroom.js

export const bathroomStartNodes = {
  label: "bathroom_start",
  nodes: [
    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "bathroom", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The bathroom feels so cold." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Too cold." },
    { type: "dialogue", speaker: "thoughts", text: "Like the window has been open for year but they are closed." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "someone cleaned in here." },
    { type: "dialogue", speaker: "thoughts", text: "Or maybe they tried." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "The smell is so  strange." },
    { type: "dialogue", speaker: "thoughts", text: "so much dust and..." },
    { type: "dialogue", speaker: "thoughts", text: "Bleach." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "and blood......" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const bathroomMenuNodes = {
  label: "bathroom_menu",
  nodes: [
    {
      type: "choice",
      options: [
        {
          text: "Check the mirror",
          condition: "!state.mirror_checked",
          target: "mirror_choice"
        },
        {
          text: "Check the sink",
          condition: "!state.sink_checked",
          target: "sink_choice"
        },
        {
          text: "Check medicine cabinet",
          condition: "!state.cabinet_checked",
          target: "cabinet_choice"
        },
        {
          text: "Leave bathroom",
          target: "bathroom_leave"
        }
      ]
    }
  ]
};

export const mirrorChoiceNodes = {
  label: "mirror_choice",
  nodes: [
    { type: "set", variable: "mirror_checked", value: true },
    { type: "set", variable: "search_time", value: 8 },
    { type: "set", variable: "mirror_memory_found", value: false },

    { type: "scene", background: "mirror", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "i can't see anything in the mirror" },
    { type: "dialogue", speaker: "thoughts", text: "Why is it like this?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something feels off." },
    { type: "dialogue", speaker: "thoughts", text: "Like someone is there." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "I'm imagining things." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something feels wrong." },
    { type: "dialogue", speaker: "thoughts", text: "Find it." },

    // Interactive Minigame Node
    {
      type: "search_minigame",
      id: "mirror_search",
      timeLimit: 8,
      background: "mirror.jpg",
      overlayColor: "#00000025",
      promptText: "Find what feels wrong",
      clue: {
        image: "mirror_clue.png",
        xpos: 760,
        ypos: 230
      },
      onSuccess: { set: { mirror_memory_found: true }, target: "mirror_memory" },
      onTimeout: { target: "mirror_fail" }
    }
  ]
};

export const mirrorMemoryNodes = {
  label: "mirror_memory",
  nodes: [
    { type: "scene", background: "bloody_mirror", transform: "v_zoom", transition: "flash" },
    { type: "pause", duration: 0.2 },

    { type: "dialogue", speaker: "whisper", text: "you knew" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mirror", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "—" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "What?" },
    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "No, I heard that." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "My chest feels tight." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "That voice sounded familiar." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Ben?" },
    { type: "pause", duration: 1.5 },

    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "Ben is dead." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const mirrorFailNodes = {
  label: "mirror_fail",
  nodes: [
    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Whatever felt strange..." },
    { type: "dialogue", speaker: "thoughts", text: "It's gone now." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Maybe I imagined it." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const sinkChoiceNodes = {
  label: "sink_choice",
  nodes: [
    { type: "set", variable: "sink_checked", value: true },
    { type: "set", variable: "search_time", value: 8 },
    { type: "set", variable: "sink_memory_found", value: false },

    { type: "scene", background: "sink", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The sink looks newer." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "Cleaner." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Too clean." },
    { type: "dialogue", speaker: "thoughts", text: "Like someone scrubbed it." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Over." },
    { type: "dialogue", speaker: "thoughts", text: "And over." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something feels hidden." },
    { type: "dialogue", speaker: "thoughts", text: "Find it." },

    // Interactive Minigame Node
    {
      type: "search_minigame",
      id: "sink_search",
      timeLimit: 8,
      background: "sink.jpg",
      overlayColor: "#00000025",
      promptText: "Find what feels wrong",
      clue: {
        image: "sink_clue.png",
        xpos: 690,
        ypos: 520
      },
      onSuccess: { set: { sink_memory_found: true }, target: "sink_memory" },
      onTimeout: { target: "sink_fail" }
    }
  ]
};

export const sinkMemoryNodes = {
  label: "sink_memory",
  nodes: [
    { type: "scene", background: "bloody_sink", transform: "v_zoom", transition: "flash" },
    { type: "pause", duration: 0.2 },

    { type: "scene", background: "bloody_girl", transform: "v_zoom", transition: "flash" },

    { type: "dialogue", speaker: "whisper", text: "don't leave me" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "sink", transform: "v_zoom", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "What the hell was that?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Blood." },
    { type: "dialogue", speaker: "thoughts", text: "There was blood." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "There wasn't." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "I'm remembering things wrong." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Right?" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const sinkFailNodes = {
  label: "sink_fail",
  nodes: [
    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something felt important." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "But it's gone now." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const cabinetChoiceNodes = {
  label: "cabinet_choice",
  nodes: [
    { type: "set", variable: "cabinet_checked", value: true },

    { type: "scene", background: "cabinet", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "Medicine." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Painkillers." },
    { type: "dialogue", speaker: "thoughts", text: "Sleeping pills." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: " something feels missing." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "how do i even know ?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: " but it feels important." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "bathroom_menu" }
  ]
};

export const bathroomLeaveNodes = {
  label: "bathroom_leave",
  nodes: [
    { type: "scene", background: "bathroom", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "I should leave." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Being alone in here feels wrong." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "my head hurts too and i dont really wanna remember anything bad." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: " I really don't want to." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "chapter2_explore" }
  ]
};
