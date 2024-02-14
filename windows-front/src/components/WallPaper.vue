<template>
  <StartMenu/>
  <TaskBar/>
  <SystemOffMenu/>
  <SystemOff/>
  <InitialScreen/>
</template>

<script setup>
import TaskBar from "./desktop/Taskbar.vue";
import StartMenu from "./desktop/StartMenu.vue";
import SystemOffMenu from "./system/SystemOffMenu.vue"
import SystemOff from "./system/SystemOff.vue";
import InitialScreen from './system/InitialScreen.vue'
</script>

<style scoped>

</style>