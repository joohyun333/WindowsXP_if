<template>
  <div>
    <div class="flex select-none w-screen h-screen fixed top-0 left-0" @click="clickedProgram = ''" ></div>
    <Program v-for="(program, index) in programs"
             @click="clickedProgram = program.id"
             :program_info="program"
             :position="index"
             :clickedProgram="clickedProgram"
             :key="program.id"
             v-on:dblclick="store.startProgram.push(program)" />
  </div>
</template>

<script setup>
import {useScreenStore} from "../../../stores/screen"
import Program from "./Program.vue";
import {ref, watch} from "vue";

const store = useScreenStore();

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
  let i = 0
  if(cancelSelected.length > 0){
    for(i = 0; i < cancelSelected.length; i++){
      cancelSelected.item(i).classList.remove('program-clicked-non')
    }
  }

  if(newSelected){
    if(oldSelected != null){
      let lastChild = oldSelected.lastChild; //program_name
      if (lastChild.nodeType === Node.ELEMENT_NODE) {
        lastChild.classList.remove("program-clicked", "h-fit");
      }
    }
    let lastChild = newSelected.lastChild; //program_name
    if (lastChild.nodeType === Node.ELEMENT_NODE) {
      lastChild.classList.add("program-clicked", "h-fit");
    }
  }else{
    if(oldSelected != null){
      let lastChild = oldSelected.lastChild; //program_name
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