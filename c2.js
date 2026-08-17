// c2.js// c2_start.js

export const chapter2StartNodes = {
  label: "chapter2_start",
  nodes: [
    // --- INTRO SEQUENCE ---
    { type: "music", action: "stop", fadeout: 2.0 },
    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 2.0 },

    { type: "centered", text: "CHAPTER 2", size: "+25" },
    { type: "pause", duration: 1.0 },
    { type: "centered", text: "THE HOUSE DOESN'T FORGET", size: "+40" },
    { type: "pause", duration: 2.0 },

    { type: "scene", background: "black", transition: "dissolve" },
    { type: "pause", duration: 1.5 },

    // Atmosphere SFX & BG
    { type: "music", action: "play", src: "ocean", fadein: 4.0, volume: 0.2 },
    { type: "ambient", action: "play", src: "hall_amb", fadein: 3.0, volume: 0.5 },

    { type: "scene", background: "door", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The front door is already open." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "They didn't react." },
    { type: "dialogue", speaker: "thoughts", text: "Like they expected it." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "elias0", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Elias", text: "...Did one of you leave it unlocked?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina0", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "You think I'd come back here alone?" },
    { type: "pause", duration: 1.0 },

    { type: "sound", src: "sfx_creak", volume: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Nobody laughs." },
    { type: "dialogue", speaker: "thoughts", text: "Nobody says she's joking." },
    { type: "dialogue", speaker: "thoughts", text: "The silence feels wrong." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "elias0", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Elias", text: "Whatever." },
    { type: "dialogue", speaker: "Elias", text: "We're already here." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Elias", text: "...Let's just get this over with." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina0", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "You keep saying that." },
    { type: "dialogue", speaker: "Mina", text: "Like saying it enough makes this normal." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "elias00", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Elias", text: "Can we not start?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something shifts between them." },
    { type: "dialogue", speaker: "thoughts", text: "A conversation already happening." },
    { type: "dialogue", speaker: "thoughts", text: "One I missed." },
    { type: "pause", duration: 1.0 },

    // Entering the Hall
    { type: "sound", src: "sfx_door", volume: 1.0 },
    { type: "scene", background: "hall", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The house looks smaller." },
    { type: "dialogue", speaker: "thoughts", text: "Or maybe I'm remembering it wrong." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "The windows look darker." },
    { type: "dialogue", speaker: "thoughts", text: "Like nobody ever lived here." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina01", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "...Do you ever think about how weird this is?" },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Mina", text: "Coming back." },
    { type: "pause", duration: 0.5 },

    { type: "scene", background: "mina02", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "Like we're pretending none of it happened." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "elias02", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Elias", text: "Nobody's pretending." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Elias", text: "We clean." },
    { type: "dialogue", speaker: "Elias", text: "We leave." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Elias", text: "Done." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Machine." },
    { type: "dialogue", speaker: "thoughts", text: "He sounds like a machine again." },
    { type: "pause", duration: 1.0 },

    // The Stairs
    { type: "sound", src: "sfx_sting", volume: 0.7 },
    { type: "scene", background: "stairs", transform: "zoom_in_slow", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "the stairs are so creepy." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "so dark." },
    { type: "dialogue", speaker: "thoughts", text: "its scary." },
    { type: "pause", duration: 0.5 },

    { type: "scene", background: "stairs", transform: "v_jerk", transition: "none" },
    { type: "sound", src: "sfx_creak", volume: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "dialogue", speaker: "thoughts", text: "lets not." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina01", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "Can we please not stay too long?" },
    { type: "dialogue", speaker: "Mina", text: "This place..." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina02", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "...feels worse." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "Worse than what?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina03", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Mina", text: "..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Mina", text: "Forget it." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "elias01", transform: "full", transition: "dissolve" },
    { type: "dialogue", speaker: "Elias", text: "Let's just split up." },
    { type: "dialogue", speaker: "Elias", text: "Check rooms." },
    { type: "dialogue", speaker: "Elias", text: "See if anything's left." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Anything." },
    { type: "dialogue", speaker: "thoughts", text: "Not evidence." },
    { type: "dialogue", speaker: "thoughts", text: "Not blood." },
    { type: "dialogue", speaker: "thoughts", text: "Anything." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina03", transform: "full", transition: "dissolve" },
    { type: "sound", src: "sfx_whisper", volume: 0.8 },
    { type: "dialogue", speaker: "Mina", text: "Don't go upstairs alone." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "Why?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina02", transform: "full", transition: "dissolve" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Mina", text: "...Just don't." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "thoughts", text: "Nobody explains anything." },
    { type: "dialogue", speaker: "thoughts", text: "Not anymore." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.0 },

    // Heartbeat Audio Ramp-up
    { type: "music", action: "play", src: "heart", fadein: 9.0, volume: 0.9 },

    { type: "scene", background: "hall", transform: "zoom_in_slow", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "The hallway feels colder inside." },
    { type: "dialogue", speaker: "thoughts", text: "The house smells wrong." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Salt. Rot. Metallic." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Maybe I should look around." },

    // Jump to the Hub Menu
    { type: "jump", target: "chapter2_explore" }
  ]
};

export const chapter2ExploreNodes = {
  label: "chapter2_explore",
  nodes: [
    { type: "scene", background: "hall", transition: "dissolve" },
    {
      type: "choice",
      options: [
        { text: "Ben's Room", sound: "sfx_steps", target: "ben_room_start" },
        { text: "Bathroom", sound: "sfx_steps", target: "bathroom_start" },
        { text: "Kitchen", sound: "sfx_steps", target: "kitchen_start" },
        { text: "Storage Room", sound: "sfx_steps", target: "storage_room_start" },
        { text: "Dining Room", sound: "sfx_steps", target: "dining_room_start" }
      ]
    }
  ]
};
import { chapter2StartNodes, chapter2ExploreNodes } from './c2_start.js';
import { 
  benRoomStartNodes, 
  benStartNodes, 
  beachPhotoSceneNodes, 
  benCameraSceneNodes, 
  bedsideDrawerSceneNodes, 
  benRoomLeaveNodes 
} from './bens_room.js';
import {
  bathroomStartNodes,
  bathroomMenuNodes,
  mirrorChoiceNodes,
  mirrorMemoryNodes,
  mirrorFailNodes,
  sinkChoiceNodes,
  sinkMemoryNodes,
  sinkFailNodes,
  cabinetChoiceNodes,
  bathroomLeaveNodes
} from './bathroom.js';
import {
  kitchenStartNodes,
  kitchenMemorySuccessNodes,
  kitchenMemoryFailNodes
} from './kitchen.js';
import {
  storageRoomStartNodes,
  storageSearchLoopNodes,
  storageInventoryNodes,
  storageBoxesNodes,
  storageTarpNodes,
  storageCabinetNodes,
  storageAfterCheckNodes,
  storageLeaveLockedNodes,
  storageMemoryUnlockNodes,
  memoryMinigame1Nodes,
  wrongMemoryChoiceNodes,
  correctMemory1Nodes,
  memoryMinigame2Nodes,
  wrongMemoryChoice2Nodes,
  correctMemory2Nodes,
  housekeeperForeshadowNodes,
  storageLeaveNodes,
  housekeeperSecondSceneNodes,
  chapter2ExploreReturnNodes
} from './storage_room.js';

export const chapter2 = {
  // Start & Hub
  chapter2_start: chapter2StartNodes,
  chapter2_explore: chapter2ExploreNodes,

  // Ben's Room
  ben_room_start: benRoomStartNodes,
  ben_start: benStartNodes,
  beach_photo_scene: beachPhotoSceneNodes,
  ben_camera_scene: benCameraSceneNodes,
  bedside_drawer_scene: bedsideDrawerSceneNodes,
  ben_room_leave: benRoomLeaveNodes,

  // Bathroom
  bathroom_start: bathroomStartNodes,
  bathroom_menu: bathroomMenuNodes,
  mirror_choice: mirrorChoiceNodes,
  mirror_memory: mirrorMemoryNodes,
  mirror_fail: mirrorFailNodes,
  sink_choice: sinkChoiceNodes,
  sink_memory: sinkMemoryNodes,
  sink_fail: sinkFailNodes,
  cabinet_choice: cabinetChoiceNodes,
  bathroom_leave: bathroomLeaveNodes,

  // Kitchen
  kitchen_start: kitchenStartNodes,
  kitchen_memory_success: kitchenMemorySuccessNodes,
  kitchen_memory_fail: kitchenMemoryFailNodes,

  // Storage Room & Housekeeper Scene
  storage_room_start: storageRoomStartNodes,
  storage_search_loop: storageSearchLoopNodes,
  storage_inventory: storageInventoryNodes,
  storage_boxes: storageBoxesNodes,
  storage_tarp: storageTarpNodes,
  storage_cabinet: storageCabinetNodes,
  storage_after_check: storageAfterCheckNodes,
  storage_leave_locked: storageLeaveLockedNodes,
  storage_memory_unlock: storageMemoryUnlockNodes,
  memory_minigame_1: memoryMinigame1Nodes,
  wrong_memory_choice: wrongMemoryChoiceNodes,
  correct_memory_1: correctMemory1Nodes,
  memory_minigame_2: memoryMinigame2Nodes,
  wrong_memory_choice_2: wrongMemoryChoice2Nodes,
  correct_memory_2: correctMemory2Nodes,
  housekeeper_foreshadow: housekeeperForeshadowNodes,
  storage_leave: storageLeaveNodes,
  housekeeper_second_scene: housekeeperSecondSceneNodes,

  // Chapter 2 End / Chapter 3 Transition Hub
  chapter2_explore_return: chapter2ExploreReturnNodes
};
