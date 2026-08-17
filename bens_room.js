// bens_room.js

export const benRoomStartNodes = {
  label: "ben_room_start",
  nodes: [
    { type: "ambient", action: "stop", fadeout: 2.0 },
    { type: "music", action: "play", src: "ben_theme", fadein: 4.0, volume: 2.4 },

    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "ben_room", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "wow Nothing changed in a year." },
    { type: "dialogue", speaker: "thoughts", text: "Not even the sheets." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "did he not come back." },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "sfx_ring", volume: 0.2 },
    { type: "dialogue", speaker: "thoughts", text: "ughh my head maybe someone couldn't accept he wouldn't come back." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "The room still feels like him." },
    { type: "dialogue", speaker: "thoughts", text: "Messy. Warm. Loud somehow." },
    { type: "pause", duration: 1.0 },

    { type: "music", action: "stop", fadeout: 4.0 },
    { type: "dialogue", speaker: "thoughts", text: "Too quiet now." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "ben_room", transform: "full", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "His things are still here." },
    { type: "dialogue", speaker: "thoughts", text: "Nobody touched anything." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like this room became a museum." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "ben_start" }
  ]
};

export const benStartNodes = {
  label: "ben_start",
  nodes: [
    { type: "conditional_music", action: "play_if_silent", src: "ben_theme", fadein: 4.0, volume: 2.0 },
    {
      type: "choice",
      options: [
        { text: "Look at the beach photo", target: "beach_photo_scene" },
        { text: "Inspect Ben's camera", target: "ben_camera_scene" },
        { text: "Open bedside drawer", target: "bedside_drawer_scene" },
        { text: "Leave room", target: "ben_room_leave" }
      ]
    }
  ]
};

export const beachPhotoSceneNodes = {
  label: "beach_photo_scene",
  nodes: [
    { type: "scene", background: "beach_photo", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "why is the photo like that." },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "sfx_ring", volume: 0.3 },
    { type: "dialogue", speaker: "thoughts", text: "ughhh my head that summer everything got ruined." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Ben loved taking pictures." },
    { type: "dialogue", speaker: "thoughts", text: "He said he would always capture every memory." },
    { type: "pause", duration: 1.0 },

    // Flashback Sequence
    { type: "sound", src: "memory_glitch", volume: 1.0 },
    { type: "scene", background: "ben_beach", transform: "v_zoom", transition: "flash" },

    { type: "dialogue", speaker: "Ben", text: "Promise me we won't become weird adults." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Ben", text: "Like the depressing kind." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Ben", text: "If any of us become boring..." },
    { type: "pause", duration: 0.5 },

    { type: "sound", src: "sfx_whisper", volume: 0.9 },
    { type: "dialogue", speaker: "Ben", text: "I'm haunting everyone." },
    { type: "pause", duration: 1.5 },

    // Return to reality
    { type: "sound", src: "memory_glitch", volume: 1.0 },
    { type: "scene", background: "ben_room", transform: "full", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "dialogue", speaker: "thoughts", text: "You really committed to the bit." },
    { type: "pause", duration: 1.0 },

    { type: "music", action: "play", src: "heart", volume: 0.8 },
    { type: "dialogue", speaker: "thoughts", text: "My chest hurts." },
    { type: "dialogue", speaker: "thoughts", text: "Like remembering something painful." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "ben_start" }
  ]
};

export const benCameraSceneNodes = {
  label: "ben_camera_scene",
  nodes: [
    { type: "scene", background: "camera", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "His camera." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Still here." },
    { type: "dialogue", speaker: "thoughts", text: "Dead battery." },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "memory_glitch", volume: 1.0 },
    { type: "scene", background: "ben_camera", transform: "full", transition: "flash" },

    { type: "dialogue", speaker: "thoughts", text: "Ben recorded everything." },
    { type: "dialogue", speaker: "thoughts", text: "Even stupid things." },
    { type: "dialogue", speaker: "thoughts", text: "Especially stupid things." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "He liked memories." },
    { type: "dialogue", speaker: "thoughts", text: "Said people forgot too easily." },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "memory_glitch", volume: 1.0 },
    { type: "scene", background: "ben_memory_camera", transform: "v_zoom", transition: "flash" },

    { type: "dialogue", speaker: "Ben", text: "Say something dramatic for future us!" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Ben", text: "Like—" },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Ben", text: "'I peaked at nineteen.'" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Ben", text: "That'd be hilarious." },
    { type: "pause", duration: 1.5 },

    { type: "scene", background: "ben_room", transform: "full", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "Future us." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Sorry." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "We turned out worse." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "ben_start" }
  ]
};

export const bedsideDrawerSceneNodes = {
  label: "bedside_drawer_scene",
  nodes: [
    { type: "scene", background: "drawer", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "sound", src: "sfx_pill_bottle", volume: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Medicine?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Sleeping pills." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "That doesn't make sense." },
    { type: "pause", duration: 0.5 },

    { type: "dialogue", speaker: "thoughts", text: "Ben hated medicine." },
    { type: "dialogue", speaker: "thoughts", text: "Even painkillers." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "He used to complain for hours." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "So why are these here?" },
    { type: "pause", duration: 1.5 },

    // Sudden Horror Shift
    { type: "music", action: "stop" },
    { type: "sound", src: "sfx_sting", volume: 1.0 },
    { type: "scene", background: "ben_bleeding", transform: "v_zoom", transition: "flash" },

    { type: "sound", src: "sfx_whisper", volume: 3.0 },
    { type: "dialogue", speaker: "whisper", text: "I felt tired." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "whisper", text: "Didn't you notice?" },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "whisper", text: "Why didn't you stop them?" },
    { type: "pause", duration: 1.5 },

    // Return to tension
    { type: "music", action: "play", src: "heart", volume: 2.0 },
    { type: "scene", background: "ben_room", transform: "full", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "—" },
    { type: "dialogue", speaker: "thoughts", text: "What was that?" },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "sfx_ring", volume: 0.4 },
    { type: "dialogue", speaker: "thoughts", text: "My head hurts." },
    { type: "dialogue", speaker: "thoughts", text: "Like something is trying to surface." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "I don't remember this." },
    { type: "dialogue", speaker: "thoughts", text: "Do I?" },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "ben_start" }
  ]
};

export const benRoomLeaveNodes = {
  label: "ben_room_leave",
  nodes: [
    { type: "music", action: "stop", fadeout: 3.0 },
    { type: "sound", src: "sfx_steps", volume: 1.0 },

    { type: "scene", background: "ben_room", transform: "full", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "I should keep looking around." },
    { type: "dialogue", speaker: "thoughts", text: "Staying here too long feels dangerous." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Like grief sticks to the walls." },
    { type: "pause", duration: 1.0 },

    { type: "jump", target: "chapter2_explore" }
  ]
};
