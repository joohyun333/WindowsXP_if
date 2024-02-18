<template>
  <div class="taskbar flex justify-start items-center">
    <div @click="clickStart" class="taskbar_start flex items-center justify-center gap-1 rounded-r-lg"
         :class="{ active: store.state.startMenu}" title="시작하려면 여기를 클립하십시오.">
      <img draggable="false" class="taskbar_start_logo !w-5 !h-5" src="/src/assets/wallpaper/xp.png" alt="window logo">
        <p class="tracking-wider pr-2">시작</p>
    </div>


    <div class="taskbar_end ml-auto h-full w-fit text-white border box-border border-t-[#075dca] border-b-[#0a5bc6] border-r-transparent border-l-black flex items-center justify-end px-2 pt-1 pl-6 text-sm gap-1">
      <img class="w-5" src="/src/assets/wallpaper/taskbar_end/not_connect.png" draggable="false" alt="icon">
      <img @click="voiceIcon = !voiceIcon" class="w-5" v-if="voiceIcon===true" src="/src/assets/wallpaper/taskbar_end/voice.png" draggable="false" alt="icon">
      <img @click="voiceIcon = !voiceIcon" class="w-5" v-if="voiceIcon===false" src="/src/assets/wallpaper/taskbar_end/not_voice.png" draggable="false" alt="icon">
      <img @click="protectIcon = !protectIcon" class="w-5" v-if="protectIcon===false" src="/src/assets/wallpaper/taskbar_end/x.png" draggable="false" alt="icon">
      <img @click="protectIcon = !protectIcon" class="w-5" v-if="protectIcon===true" src="/src/assets/wallpaper/taskbar_end/o.png" draggable="false" alt="icon">
      <Clock/>
    </div>
  </div>
</template>

<script setup>
import store from "../../../store/store.js";
import Clock from "./Clock.vue";
import {ref} from "vue";

const voiceIcon = ref(false)
const protectIcon = ref(false)
function clickStart(){
  store.commit('clickStartButton');
}

</script>

<style scoped>
.taskbar {
  user-select: none;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(0deg, #042b8e 0%, #0551f6 6%, #0453ff 51%, #0551f6 63%, #0551f6 81%, #3a8be8 90%, #0453ff 100%);
  width: 100vw;
  height: 30px;
}

.taskbar_start {
  height: 100%;
  width:100px;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  border: none;
  box-shadow: -2px -2px 10px #0000008e inset;
  background-image: linear-gradient(0deg, #0c450c 0%, #308f2f 6%, #308f2f 51%, #308f2f 63%, #308f2f 77%, #97c597 85%, #97c597 93%, #308f2f 97%);
  display: flex;
  align-items: center;
  transition: all;
}

.taskbar_start.active,
.taskbar_start.active:hover{
  background-image: linear-gradient(0deg, #0c450c 0%, #209820 6%, #168316 51%, #1B811B 63%, #288428 77%, #3A713A 85%, #2F582F 93%, #153715 97%);
}

.taskbar_start:hover {
  background-image: linear-gradient(0deg, #2f892f 0%, #4eb64e 6%, #4eb64e 51%, #4eb64e 63%, #4eb64e 77%, #c4ffc4 85%, #c4ffc4 93%, #2f892f 97%);
}

.taskbar_start p {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.685));

}
.taskbar_start_logo {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.705));
}


.taskbar_end{
  background-image: linear-gradient(0deg, #0a5bc6 0%, #1198e9 6%, #1198e9 51%, #1198e9 63%, #1198e9 77%, #19b9f3 85%, #19b9f3 93%, #075dca 97%);
  box-shadow: 2px -0px 3px #20e2fc inset;
}

</style>