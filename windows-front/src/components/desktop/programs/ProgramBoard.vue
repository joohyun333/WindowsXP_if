<template>
  <div>
    <Program v-for="(program, index) in programs" :program_info="program" :position="index" :clickedProgram="clickedProgram" :key="program.id" @click="selectProgram($event)" v-on:dblclick="" />
  </div>
</template>

<script setup>
import Program from "./Program.vue";
import {onMounted, ref} from "vue";
const programs = [
  {'id':'recycleBin', 'name':'My Computer', 'path':'../src/assets/wallpaper/program/recycleBin.png', 'alt':'recycleBin-logo'},
  {'id':'myComputer', 'name':'내 컴퓨터', 'path':'../src/assets/wallpaper/program/myComputer.png', 'alt':'myComputer-logo'},
  {'id':'internet', 'name':'인터넷', 'path':'../src/assets/wallpaper/program/internet.png', 'alt':'internet-logo'},
]

const clickedProgram = ref("")
const selectProgram =(event)=>{
  clickedProgram.value=event.target.id
  let lastChild = event.target.lastChild;
  // An Element node like <p> or <div>.
  if (lastChild.nodeType === Node.ELEMENT_NODE) {
    lastChild.classList.add('program-clicked');
  }
}

onMounted(()=>{

  document.addEventListener('mousedown',    function(event){
    const programs = document.querySelectorAll(".program")
    const programsNames = document.querySelectorAll(".program p")
    if(event.target.localName==="html"){
      programs.forEach((item)=>{

        item.classList.remove("select")
        item.classList.remove("selected")
        clickedProgram.value=""
      })

      programsNames.forEach((item)=>{
        item.classList.remove("program-clicked")
      })
    }
  })
})

</script>

<style scoped>
.program-clicked{
  text-overflow: initial !important;
  overflow: visible !important;
  white-space: normal !important;
}
.selected {
  border: 1px black dotted;
}

.select{
  @apply
  !border-teal-400 !bg-sky-400/70
}
</style>