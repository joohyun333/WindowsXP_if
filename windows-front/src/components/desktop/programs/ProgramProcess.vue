<template>
  <div v-for="(startedProgram, index) in store.startProgram">
    <Explorer v-if="startedProgram.id === 'internet'" :program_info="startedProgram"></Explorer>
  </div>
</template>

<script setup>
import {useScreenStore} from "../../../stores/screen"
import Explorer from "./Explorer.vue";

const store = useScreenStore()
</script>

<style scoped>

</style>