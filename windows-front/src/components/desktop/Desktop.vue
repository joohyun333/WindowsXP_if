<template>
  <StartMenu v-if="store.startMenu" class="z-[999]"/>
  <TaskBar class="z-[999]"/>
  <SystemOffMenu  v-if="store.powerOffMenu" class="z-[9999]"/>
  <program-board class="z-10"/>
  <program-process v-if="store.startProgram" class="z-[999]"/>
</template>

<script setup>
import {useScreenStore} from "../../stores/screen"
import ProgramBoard from "./programs/ProgramBoard.vue";
import TaskBar from "./tasker/Taskbar.vue";
import StartMenu from "./tasker/StartMenu.vue";
import SystemOffMenu from "../system/SystemOffMenu.vue";
import Explorer from "./programs/Explorer.vue";
import ProgramProcess from "./programs/ProgramProcess.vue";
const store = useScreenStore();
</script>
<style scoped>

</style>