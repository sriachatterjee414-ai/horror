// kitchen.js

export const kitchenStartNodes = {
  label: "kitchen_start",
  nodes: [
    { type: "scene", background: "black", transition: "fade" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "kitchen", transform: "truecenter", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The kitchen light is on." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "I don't remember anyone turning it on." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "The house should be empty." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Someone is sitting there." },
    { type: "pause", duration: 1.5 },
    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "Waiting." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_shadow", transition: "dissolve" },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "A woman." },
    { type: "dialogue", speaker: "thoughts", text: "Drinking tea." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like she belongs here." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like she never left." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "...Who are you?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_1", transition: "dissolve" },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "housekeeper", text: "You forgot already?" },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "dialogue", speaker: "thoughts", text: "Forgot?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "...What?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_2", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "That happens here." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "housekeeper", text: "People forget." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "housekeeper", text: "Especially the important things." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "Something feels wrong." },
    { type: "dialogue", speaker: "thoughts", text: "Not dangerous." },
    { type: "dialogue", speaker: "thoughts", text: "Wrong." },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "How did you get inside?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_1", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "The house never locked." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "housekeeper", text: "It doesn't like being empty." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "What kind of answer is that?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "...Who are you?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_2", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "Housekeeper." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "housekeeper", text: "I thought you remembered me." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "The way she says it." },
    { type: "dialogue", speaker: "thoughts", text: "Like she's disappointed." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_3", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "You came back earlier this time." },
    { type: "pause", duration: 2.5 },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "dialogue", speaker: "thoughts", text: "Earlier?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "MC", text: "...Earlier?" },
    { type: "pause", duration: 1.0 },

    { type: "dialogue", speaker: "housekeeper", text: "Last year took longer." },
    { type: "pause", duration: 3.0 },

    { type: "dialogue", speaker: "thoughts", text: "Last year?" },
    { type: "dialogue", speaker: "thoughts", text: "We haven't been back." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Have we?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina_2", transition: "dissolve" },

    { type: "dialogue", speaker: "Mina", text: "...You're still here?" },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "Mina froze." },
    { type: "dialogue", speaker: "thoughts", text: "She knows her." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_1", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "Some people never leave." },
    { type: "pause", duration: 2.0 },

    { type: "scene", background: "mina_4", transition: "dissolve" },

    { type: "dialogue", speaker: "Mina", text: "Don't talk to her." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "Mina", text: "Seriously." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Mina", text: "Just don't." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "MC", text: "Who is she?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina_3", transition: "dissolve" },

    { type: "dialogue", speaker: "Mina", text: "She used to work here." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Mina", text: "Before." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "Before what?" },
    { type: "dialogue", speaker: "thoughts", text: "Nobody finishes sentences anymore." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_2", transition: "dissolve" },

    { type: "dialogue", speaker: "housekeeper", text: "You always ask questions too late." },
    { type: "pause", duration: 2.0 },

    { type: "dialogue", speaker: "thoughts", text: "Always?" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Why did she say that like she knows me?" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "mina_2", transition: "dissolve" },

    { type: "dialogue", speaker: "Mina", text: "Come on." },
    { type: "pause", duration: 0.5 },
    { type: "dialogue", speaker: "Mina", text: "Let's go." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "kitchen", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "The moment I turn around..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "The room feels colder." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Like something just noticed me." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "housekeeper_shadow", transform: "hpunch" },

    { type: "dialogue", speaker: "whisper", text: "welcome back {player_name}" },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "black", transition: "dissolve" },
    { type: "pause", duration: 0.5 },

    { type: "dialogue", speaker: "thoughts", text: "..." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "I definitely heard something." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "kitchen", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "Wait." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Something is on the table." },
    { type: "pause", duration: 1.0 },

    { type: "scene", background: "paper_note", transition: "dissolve" },

    { type: "dialogue", speaker: "thoughts", text: "A photograph?" },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "No." },
    { type: "dialogue", speaker: "thoughts", text: "It's torn." },
    { type: "pause", duration: 1.0 },
    { type: "dialogue", speaker: "thoughts", text: "Why does this feel familiar?" },
    { type: "pause", duration: 1.0 },

    // Puzzle Trigger
    {
      type: "puzzle_minigame",
      id: "kitchen_photo_puzzle",
      timeLimit: 15,
      grid: { rows: 2, cols: 2 },
      image: "accident_photo.png",
      pieces: [
        { id: 0, crop: [0, 0, 960, 540] },
        { id: 1, crop: [960, 0, 960, 540] },
        { id: 2, crop: [0, 540, 960, 540] },
        { id: 3, crop: [960, 540, 960, 540] }
      ],
      correctOrder: [0, 1, 2, 3],
      shuffleOnStart: true,
      onSuccess: { set: { puzzle_complete: true }, target: "kitchen_memory_success" },
      onTimeout: { target: "kitchen_memory_fail" }
    }
  ]
};

export const kitchenMemorySuccessNodes = {
  label: "kitchen_memory_success",
  nodes: [
    { type: "scene", background: "accident_photo", transition: "dissolve" },
    { type: "dialogue", speaker: "thoughts", text: "The image comes into focus... I remember this." },
    { type: "jump", target: "chapter2_explore" }
  ]
};

export const kitchenMemoryFailNodes = {
  label: "kitchen_memory_fail",
  nodes: [
    { type: "scene", background: "black" },
    { type: "dialogue", speaker: "thoughts", text: "It's gone. The memory slipped through my fingers." },
    { type: "jump", target: "chapter2_explore" }
  ]
};
