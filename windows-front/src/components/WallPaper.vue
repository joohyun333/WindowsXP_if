<template>
  <StartMenu/>
  <TaskBar/>
  <SystemOffMenu/>
  <system-on-off-components/>
</template>

<script setup>
import TaskBar from "./desktop/tasker/Taskbar.vue";
import StartMenu from "./desktop/tasker/StartMenu.vue";
import SystemOffMenu from "./system/SystemOffMenu.vue"
import SystemOnOffComponents from "./system/SystemOnOffComponents.vue";
</script>

<style scoped>

</style>