<template>
  <div :id="program_info.id" class="fixed program group select-none border m-6 flex items-center justify-start flex-col text-center border-transparent hover:border-teal-400 hover:bg-sky-400/70 w-16 h-fit left-0 " :class="'top-' + position*24" >
    <img draggable="false"  class="h-10 select-none pointer-events-none" :src='program_info.path' :alt='program_info.alt'>
    <p :class="{'h-fit':clickedProgram===program_info.id}" class="text-xs select-none pointer-events-none text-white group-hover:h-fit text-shadow h-4  w-full px-[1px] ">{{program_info.name}}</p>
  </div>
</template>

<script setup>
defineProps(['program_info','position','clickedProgram'])
</script>

<style scoped>
.program p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.program:hover p {
  text-overflow: initial !important;
  overflow: visible !important;
  white-space: normal !important;
}
</style>