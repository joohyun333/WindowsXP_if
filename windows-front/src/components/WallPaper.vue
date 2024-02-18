<template>
  <StartMenu/>
  <TaskBar/>
  <SystemOffMenu/>
  <SystemOff/>
  <InitialScreen/>
  <LoadingOn/>
  <SystemOn/>
</template>

<script setup>
import TaskBar from "./desktop/Taskbar.vue";
import StartMenu from "./desktop/StartMenu.vue";
import SystemOffMenu from "./system/SystemOffMenu.vue"
import SystemOff from "./system/SystemOff.vue";
import InitialScreen from './system/InitialScreen.vue'
import LoadingOn from "./system/LoadingOn.vue";
import SystemOn from "./system/SystemOn.vue";
</script>

<style scoped>

</style>