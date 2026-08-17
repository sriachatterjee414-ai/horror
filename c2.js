// c2.js
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
