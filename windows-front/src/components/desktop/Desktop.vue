<template>
  <StartMenu v-if="screenStore.startMenu" class="z-[999]"/>
  <TaskBar class="z-[999]"/>
  <SystemOffMenu  v-if="screenStore.powerOffMenu" class="z-[9999]"/>
  <program-board class="z-10"/>
  <program-process v-if="processStore.startProgram" class="z-[999]"/>
</template>

<script setup>
import {useScreenStore} from "../../stores/screen"
import {useProcessStore} from "../../stores/process"

import ProgramBoard from "./programs/ProgramBoard.vue";
import TaskBar from "./tasker/Taskbar.vue";
import StartMenu from "./tasker/StartMenu.vue";
import SystemOffMenu from "../system/SystemOffMenu.vue";
import ProgramProcess from "./programs/ProgramProcess.vue";

const screenStore = useScreenStore();
const processStore = useProcessStore();
</script>
<style scoped>

</style>