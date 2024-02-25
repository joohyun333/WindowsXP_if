<template>
  <div>
    <div class="flex select-none w-screen h-screen fixed top-0 left-0" @click="clickedProgram = ''" ></div>
    <Program v-for="(program, index) in store.programs"
             @click="clickedProgram = program.type"
             :program_info="program"
             :position="index"
             :clickedProgram="clickedProgram"
             :key="index"
             v-on:dblclick="store.useAddProcess(program)"/>
  </div>
</template>

<script setup>
import {useProcessStore} from "../../../stores/process"
import Program from "./Program.vue";
import {ref, watch} from "vue";

const store = useProcessStore();

let clickedProgram = ref('');

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