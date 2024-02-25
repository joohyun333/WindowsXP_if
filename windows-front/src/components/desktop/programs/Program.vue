<template>
  <div :id="program_info.type" class="fixed program group select-none border m-6 flex items-center justify-start flex-col text-center border-transparent w-16 h-fit left-0 overlay_filter " :class="'top-' + position*24" >
    <img draggable="false"  class="h-10 select-none pointer-events-none " :class="{'opacity-60' : clickedProgram===program_info.type}" :src='program_info.path' :alt='program_info.alt'>
    <p class="text-xs select-none pointer-events-none border-transparent border-[1px] text-white icon-shadow group-hover:h-fit h-5 w-full px-[1px] truncate " >{{program_info.name}}</p>
  </div>
</template>

<script setup>
defineProps(['program_info','position','clickedProgram'])
</script>

<style scoped>
.program-clicked{
  text-overflow: initial !important;
  overflow: visible !important;
  white-space: normal !important;
  border: 1px #CE953A dotted;
  background: #316AC5;
}
.program-clicked-non{
  text-overflow: initial !important;
  overflow: visible !important;
  white-space: normal !important;
  border: 1px #CE953A dotted;
  background: transparent;
}
.icon-shadow{
  text-shadow: 1px 1px 1px black;
}

.overlay_filter{
  filter: drop-shadow(0px 0px blue);
}

</style>