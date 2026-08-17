// storage_room.js

export const storageRoomStartNodes = {
  label: "storage_room_start",
  nodes: [
    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "storage_room", transform: "full", transition: "dissolve" },
    { type: "show", background: "storage_room", transform: "zoom_in_slow" },

    { type: "audio", action: "play_music", file: "audio/ambient_horror.mp3", fadein: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "The door sticks." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like it doesn't want to open." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Dust everywhere." },
    { type: "dialogue", speaker: "thoughts", text: "Boxes stacked carelessly." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "This room smells damp. Heavy." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like something stayed buried here. Something important." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "storage_search_loop" }
  ]
};

export const storageSearchLoopNodes = {
  label: "storage_search_loop",
  nodes: [
    { type: "scene", background: "storage_room", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "Maybe I should look around." },
    {
      type: "menu",
      options: [
        {
          text: "Look through old boxes",
          condition: "!state.checked_boxes",
          target: "storage_boxes"
        },
        {
          text: "Inspect folded tarp",
          condition: "!state.checked_tarp",
          target: "storage_tarp"
        },
        {
          text: "Open old cabinet",
          condition: "!state.checked_cabinet",
          target: "storage_cabinet"
        },
        {
          text: "Check inventory",
          target: "storage_inventory"
        },
        {
          text: "Leave",
          target: "storage_leave_locked"
        }
      ]
    }
  ]
};

export const storageInventoryNodes = {
  label: "storage_inventory",
  nodes: [
    {
      type: "condition",
      if: "state.inventory.length === 0",
      then: [
        { type: "dialogue", speaker: "thoughts", text: "Nothing yet." }
      ],
      else: [
        { type: "dialogue", speaker: "thoughts", text: "Things I found..." },
        {
          type: "eval",
          code: `
            let invString = "";
            if (state.inventory.includes("newspaper")) invString += "• A newspaper about a girl's death.\\n";
            if (state.inventory.includes("bloody_tarp")) invString += "• A tarp with strange stains.\\n";
            if (state.inventory.includes("crash_photo")) invString += "• Photos from a car crash.\\n";
            window.tempInvDisplay = invString;
          `
        },
        { type: "dialogue", speaker: "thoughts", text: "$tempInvDisplay" }
      ]
    },
    { type: "jump", target: "storage_search_loop" }
  ]
};

export const storageBoxesNodes = {
  label: "storage_boxes",
  nodes: [
    { type: "set", variable: "checked_boxes", value: true },
    { type: "eval", code: "state.storage_clues = (state.storage_clues || 0) + 1;" },
    { type: "eval", code: "state.inventory.push('newspaper');" },

    { type: "scene", background: "boxes", transform: "full", transition: "dissolve" },
    { type: "show", background: "boxes", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "thoughts", text: "Mostly junk. Broken decorations. Old beach supplies." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "...Wait." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "A newspaper?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "newspaper", transform: "full", transition: "dissolve" },
    { type: "show", background: "newspaper", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "thoughts", text: "'Young Woman Dies In Coastal Crash.'" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Date... Two years ago." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Why was this hidden?" },
    { type: "pause", duration: 1.5 },

    // Flashback Sequence
    { type: "scene", background: "flash_car_crash", transform: "full", transition: "flash" },
    { type: "show", background: "flash_car_crash", transform: "v_zoom" },
    { type: "audio", action: "play_sound", file: "audio/heartbeat.mp3" },

    { type: "dialogue", speaker: "whisper", text: "watch the road—" },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "whisper", text: "ELIAS!" },
    { type: "pause", duration: 0.3 },

    { type: "scene", background: "black", transform: "hpunch" },
    { type: "audio", action: "play_sound", file: "audio/car_crash.mp3" },
    { type: "pause", duration: 0.8 },

    { type: "scene", background: "blurred_hands", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "Blood." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "thoughts", text: "Someone crying." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "whisper", text: "please... don't leave me" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "storage_after_check" }
  ]
};

export const storageTarpNodes = {
  label: "storage_tarp",
  nodes: [
    { type: "set", variable: "checked_tarp", value: true },
    { type: "eval", code: "state.storage_clues = (state.storage_clues || 0) + 1;" },
    { type: "eval", code: "state.inventory.push('bloody_tarp');" },

    { type: "scene", background: "tarp", transform: "full", transition: "dissolve" },
    { type: "show", background: "tarp", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "thoughts", text: "A folded tarp. Too carefully folded." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like someone hid something." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Dark stains. Oil?" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "No. Not oil." },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "black", transform: "hpunch" },
    { type: "dialogue", speaker: "whisper", text: "hold him down" },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "whisper", text: "BEN WAKE UP!" },
    { type: "pause", duration: 0.7 },

    { type: "scene", background: "flash_car_crash", transform: "full", transition: "flash" },
    { type: "show", background: "flash_car_crash", transform: "v_zoom" },
    { type: "dialogue", speaker: "thoughts", text: "Someone unconscious. Ben?" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "storage_after_check" }
  ]
};

export const storageCabinetNodes = {
  label: "storage_cabinet",
  nodes: [
    { type: "set", variable: "checked_cabinet", value: true },
    { type: "eval", code: "state.storage_clues = (state.storage_clues || 0) + 1;" },
    { type: "eval", code: "state.inventory.push('crash_photo');" },

    { type: "scene", background: "cabinet", transform: "full", transition: "dissolve" },
    { type: "show", background: "cabinet", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "thoughts", text: "Locked... No. Broken." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Inside..." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "crash_photos", transform: "full", transition: "dissolve" },
    { type: "show", background: "crash_photos", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "thoughts", text: "Photos. A car crash. Police tape." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "...Wait. Elias?" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Why is Elias there? Why does he look scared?" },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "flash_car_crash", transform: "full", transition: "flash" },
    { type: "show", background: "flash_car_crash", transform: "v_zoom" },
    { type: "dialogue", speaker: "whisper", text: "she's still breathing" },
    { type: "pause", duration: 0.7 },
    { type: "dialogue", speaker: "whisper", text: "we have to help" },
    { type: "pause", duration: 0.7 },
    { type: "dialogue", speaker: "whisper", text: "ELIAS STOP—" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "storage_after_check" }
  ]
};

export const storageAfterCheckNodes = {
  label: "storage_after_check",
  nodes: [
    { type: "scene", background: "storage_room", transform: "full", transition: "dissolve" },
    {
      type: "condition",
      if: "state.storage_clues >= 3",
      then: [{ type: "jump", target: "storage_memory_unlock" }],
      else: [{ type: "jump", target: "storage_search_loop" }]
    }
  ]
};

export const storageLeaveLockedNodes = {
  label: "storage_leave_locked",
  nodes: [
    {
      type: "condition",
      if: "state.storage_clues < 3",
      then: [
        { type: "dialogue", speaker: "thoughts", text: "No. Something feels wrong. I should keep looking." },
        { type: "jump", target: "storage_search_loop" }
      ],
      else: [{ type: "jump", target: "storage_leave" }]
    }
  ]
};

export const storageMemoryUnlockNodes = {
  label: "storage_memory_unlock",
  nodes: [
    { type: "scene", background: "black", transition: "fade" },
    { type: "audio", action: "stop_music", fadeout: 2.0 },
    { type: "audio", action: "play_sound", file: "audio/heartbeat_fast.mp3" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something isn't right. These pieces..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Why do they feel connected? I need to remember." },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "distorted_room", transform: "full", transition: "dissolve", transitionDuration: 1.0 },
    { type: "show", background: "distorted_room", transform: "zoom_in_slow" },

    { type: "dialogue", speaker: "whisper", text: "remember" },
    { type: "pause", duration: 0.8 },
    { type: "dialogue", speaker: "whisper", text: "remember what happened" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Think. What connects these?" },

    { type: "jump", target: "memory_minigame_1" }
  ]
};

export const memoryMinigame1Nodes = {
  label: "memory_minigame_1",
  nodes: [
    {
      type: "menu",
      options: [
        { text: "The newspaper", target: "wrong_memory_choice" },
        { text: "The tarp", target: "wrong_memory_choice" },
        { text: "The crash photos", target: "correct_memory_1" }
      ]
    }
  ]
};

export const wrongMemoryChoiceNodes = {
  label: "wrong_memory_choice",
  nodes: [
    { type: "audio", action: "play_sound", file: "audio/static.mp3" },
    { type: "scene", background: "black", transform: "hpunch" },
    { type: "screen_effect", type: "tint", color: "#ff6666" },
    { type: "dialogue", speaker: "whisper", text: "wrong" },
    { type: "pause", duration: 0.5 },
    { type: "screen_effect", type: "tint", color: "#ffffff" },
    { type: "dialogue", speaker: "thoughts", text: "No. That's not it." },
    { type: "jump", target: "memory_minigame_1" }
  ]
};

export const correctMemory1Nodes = {
  label: "correct_memory_1",
  nodes: [
    { type: "audio", action: "play_sound", file: "audio/ringing.mp3" },
    { type: "scene", background: "flash_car_crash", transform: "full", transition: "flash" },
    { type: "show", background: "flash_car_crash", transform: "v_zoom" },

    { type: "dialogue", speaker: "thoughts", text: "Rain. Screaming. Glass." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "whisper", text: "BEN! wake up!" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Ben was unconscious. Someone else was standing outside." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "memory_minigame_2" }
  ]
};

export const memoryMinigame2Nodes = {
  label: "memory_minigame_2",
  nodes: [
    { type: "scene", background: "black", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "Who was there?" },
    {
      type: "menu",
      options: [
        { text: "Ben caused it", target: "wrong_memory_choice_2" },
        { text: "Elias was involved", target: "correct_memory_2" },
        { text: "Nobody was there", target: "wrong_memory_choice_2" }
      ]
    }
  ]
};

export const wrongMemoryChoice2Nodes = {
  label: "wrong_memory_choice_2",
  nodes: [
    { type: "audio", action: "play_sound", file: "audio/static.mp3" },
    { type: "scene", background: "black", transform: "hpunch" },
    { type: "dialogue", speaker: "whisper", text: "NO" },
    { type: "pause", duration: 0.7 },
    { type: "dialogue", speaker: "thoughts", text: "That feels wrong." },
    { type: "jump", target: "memory_minigame_2" }
  ]
};

export const correctMemory2Nodes = {
  label: "correct_memory_2",
  nodes: [
    { type: "audio", action: "play_sound", file: "audio/heartbeat.mp3" },
    { type: "scene", background: "flash_car_crash", transform: "full", transition: "flash" },
    { type: "show", background: "flash_car_crash", transform: "v_zoom" },

    { type: "dialogue", speaker: "whisper", text: "she's still breathing... we have to help her..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "whisper", text: "ELIAS STOP!" },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "black", transform: "hpunch" },
    { type: "audio", action: "play_sound", file: "audio/high_pitch_ring.mp3" },

    { type: "dialogue", speaker: "thoughts", text: "I can't remember. Why can't I remember?" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "whisper", text: "because you forgot" },
    { type: "pause", duration: 1.5 },

    { type: "jump", target: "housekeeper_foreshadow" }
  ]
};

export const housekeeperForeshadowNodes = {
  label: "housekeeper_foreshadow",
  nodes: [
    { type: "scene", background: "hallway_dark", transform: "full", transition: "dissolve" },
    { type: "audio", action: "play_music", file: "audio/creepy_ambient.mp3", fadein: 2.0 },

    { type: "show", sprite: "twin_shadow", align: "left", transition: "dissolve", duration: 0.2 },
    { type: "pause", duration: 0.3 },
    { type: "hide", sprite: "twin_shadow", transition: "dissolve", duration: 0.1 },

    { type: "dialogue", speaker: "thoughts", text: "I should leave. This place feels wrong.It feels like someone is watching me." },
    { type: "pause", duration: 1.0 },

    { type: "show", sprite: "housekeeper_shadow", align: "left", transition: "dissolve", duration: 0.2 },
    { type: "pause", duration: 0.3 },
    { type: "hide", sprite: "housekeeper_shadow", transition: "dissolve", duration: 0.1 },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Someone was standing there. Right there. Watching me." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "No. Nobody's there." },
    { type: "pause", duration: 1.0 },

    { type: "audio", action: "play_sound", file: "audio/thunder.mp3" },
    { type: "scene", background: "black", transform: "hpunch" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "The storm sounds closer. The house feels smaller. Darker." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "something changed." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "storage_leave" }
  ]
};

export const storageLeaveNodes = {
  label: "storage_leave",
  nodes: [
    { type: "scene", background: "storage_room", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "I should go. I don't want to stay here anymore." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.5 },

    { type: "jump", target: "housekeeper_second_scene" }
  ]
};

export const housekeeperSecondSceneNodes = {
  label: "housekeeper_second_scene",
  nodes: [
    { type: "scene", background: "kitchen_dark", transform: "full", transition: "fade" },
    { type: "audio", action: "play_music", file: "audio/tension_ambient.mp3", fadein: 3.0 },

    { type: "dialogue", speaker: "thoughts", text: "My heart is hammering against my ribs." },
    { type: "dialogue", speaker: "thoughts", text: "The things I found in the storage room... they don't make sense. They can't." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_2", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "housekeeper", text: "You look like you're about to have a mental breakdown." },

    { type: "dialogue", speaker: "MC", text: "...Who died in that crash?" },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "housekeeper_1", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "housekeeper", text: "Someone who shouldn't have died and not get justice. Someone innocent." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "Elias was there. I saw the photos." },

    { type: "scene", background: "housekeeper_3", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "housekeeper", text: "Elias was always good at being 'there.' But he was never good at staying." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "housekeeper", text: "Don't look so horrified. You've known this for a long time." },
    { type: "dialogue", speaker: "housekeeper", text: "I'm the one who cleaned the blood off your shoes the first time, remember?" },
    { type: "pause", duration: 1.0 },

    { type: "audio", action: "play_sound", file: "audio/static.mp3" },

    { type: "dialogue", speaker: "thoughts", text: "The blood... my shoes..." },
    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "pause", duration: 0.5 },

    { type: "dialogue", speaker: "MC", text: "No!" },

    // The Escape
    { type: "scene", background: "black", transform: "hpunch" },
    { type: "audio", action: "play_sound", file: "audio/footsteps_run.mp3" },

    { type: "dialogue", speaker: "thoughts", text: "I can't stay here. I can't listen to this." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "I run." },
    { type: "dialogue", speaker: "thoughts", text: "I can't look back." },
    { type: "pause", duration: 2.0 },

    { type: "jump", target: "chapter2_explore_return" }
  ]
};

export const chapter2ExploreReturnNodes = {
  label: "chapter2_explore_return",
  nodes: [
    { type: "scene", background: "hall", transform: "full", transition: "dissolve" },
    { type: "audio", action: "play_music", file: "audio/ambient_horror.mp3", fadein: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "I stop in the hallway, gasping for air." },
    { type: "dialogue", speaker: "thoughts", text: "The kitchen is silent now. Too silent." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "I need to focus. I need to find Mina. I need to get out." },
    {
      type: "menu",
      options: [
        {
          text: "Go to the Dining Room",
          target: "dining_room_start"
        },
        {
          text: "Go back to the Storage Room",
          condition: "state.storage_clues < 3",
          target: "storage_room_start"
        }
      ]
    }
  ]
};
