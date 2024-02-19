<template>
  <div>
    <div class="flex select-none w-screen h-screen fixed top-0 left-0" @click="clickedProgram = ''" ></div>
    <Program v-for="(program, index) in programs" @click="clickedProgram = program.id" :program_info="program" :position="index" :clickedProgram="clickedProgram" :key="program.id" v-on:dblclick="" />
  </div>
</template>

<script setup>
import Program from "./Program.vue";
import {ref, watch} from "vue";
let clickedProgram = ref('');
const programs = [
  {'id':'recycleBin', 'name':'휴지통', 'path':'../src/assets/wallpaper/program/recycleBin.png', 'alt':'recycleBin-logo'},
  {'id':'myComputer', 'name':'내 컴퓨터', 'path':'../src/assets/wallpaper/program/myComputer.png', 'alt':'myComputer-logo'},
  {'id':'internet', 'name':'인터넷', 'path':'../src/assets/wallpaper/program/internet.png', 'alt':'internet-logo'},
]

watch(clickedProgram,(newClicked,oldClicked)=>{
  const newSelected = document.getElementById(newClicked)
  const oldSelected = document.getElementById(oldClicked)
  const cancelSelected = document.getElementsByClassName('program-clicked-non')
  const cancelFilter = document.getElementsByClassName('overlay_filter')
  let i = 0
  if(cancelSelected.length > 0){
    for(i = 0; i < cancelSelected.length; i++){
      cancelSelected.item(i).classList.remove('program-clicked-non')
    }
  }
  if(cancelFilter.length > 0){
    for(i = 0; i < cancelFilter.length; i++){
      cancelFilter.item(i).classList.remove('overlay_filter')
    }
  }

  if(newSelected){
    if(oldSelected != null){
      let firstChild = oldSelected.firstChild; //img
      let lastChild = oldSelected.lastChild; //program_name
      if (firstChild.tagName === 'IMG') {
        firstChild.classList.remove("overlay_filter");
      }
      if (lastChild.nodeType === Node.ELEMENT_NODE) {
        lastChild.classList.remove("program-clicked", "h-fit");
      }
    }
    let firstChild = newSelected.firstChild; //img
    let lastChild = newSelected.lastChild; //program_name
    if (firstChild.tagName === 'IMG') {
      firstChild.classList.add("overlay_filter");
    }
    if (lastChild.nodeType === Node.ELEMENT_NODE) {
      lastChild.classList.add("program-clicked", "h-fit");
    }
  }else{
    if(oldSelected != null){
      let firstChild = oldSelected.firstChild; //img
      let lastChild = oldSelected.lastChild; //program_name
      if (firstChild.tagName === 'IMG') {
        firstChild.classList.remove("overlay_filter");
      }
      if (lastChild.nodeType === Node.ELEMENT_NODE) {
        lastChild.classList.remove("program-clicked");
        lastChild.classList.add("program-clicked-non");
      }
    }
  }
})
</script>

<style scoped>
</style>