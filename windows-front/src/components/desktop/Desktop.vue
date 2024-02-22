<template>
  <StartMenu v-if="store.state.startMenu" class="z-[999]"/>
  <TaskBar class="z-[999]"/>
  <SystemOffMenu  v-if="store.state.powerOffMenu" class="z-[9999]"/>
  <program-board class="z-10"/>
  <Explorer v-if="store.state.startProgram.id === 'internet'" class="z-[99999]"/>
</template>

<script setup>
import ProgramBoard from "./programs/ProgramBoard.vue";
import TaskBar from "./tasker/Taskbar.vue";
import StartMenu from "./tasker/StartMenu.vue";
import SystemOffMenu from "../system/SystemOffMenu.vue";
import store from "../../store/store.js";
import Explorer from "./programs/Explorer.vue";
</script>

<style scoped>

</style>