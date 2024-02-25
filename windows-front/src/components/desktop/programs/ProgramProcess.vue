<template>
  <div v-for="(startedProgram, index) in store.startProgram">
    <Explorer v-if="startedProgram.type === 'internet'" :program_info="startedProgram" :key="index"></Explorer>
  </div>
</template>

<script setup>
import {useProcessStore} from "../../../stores/process"
import Explorer from "./Explorer.vue";

const store = useProcessStore()

</script>

<style scoped>

</style>