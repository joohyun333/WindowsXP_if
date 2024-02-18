<template>
  <div class="w-screen select-none h-screen backdrop-saturate-anim fixed top-0 left-0 flex items-center justify-center ">
    <div class="border border-black w-[390px] h-[180px] bg-[#003399] shrink-0 flex flex-col ">
      <div class="text-white flex items-center justify-between px-2 h-[70px]">
        <p class="font-medium text-lg p-1">시스템 종료</p>
        <img draggable="false" src="/src/assets/wallpaper/xp.png" alt="xp-logo" class="h-8 pr-3">
      </div>
      <div class="bg-gradient-to-r from-[#698be4] via-[#95b4f4] to-[#698be4] w-full h-full flex flex-col items-start justify-start">
        <div class="w-full h-[3px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div class=" w-full h-full select-none text-white text-xs flex items-center justify-center gap-16 font-medium NanumGothic-ExtraBold">
          <div @click="powerOff" class="flex flex-col items-center justify-center gap-2">
            <img draggable="false"  class="select-none active:opacity-70 bg-white" src="/src/assets/standby.png" alt="standby">
            <p>대기 모드(S)</p>
          </div>
          <div @click="powerOff" class="flex flex-col items-center justify-center gap-2">
            <img draggable="false"  class="select-none active:opacity-70 bg-white" src="/src/assets/poweroff.png" alt="poweroff">
            <p>끄기(U)</p>
          </div>
          <div @click="powerOff" class="flex flex-col items-center justify-center gap-2">
            <img draggable="false"  class="select-none active:opacity-70 bg-white" src="/src/assets/restart.png" alt="restart">
            <p>다시 시작(R)</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end px-4 h-[70px]">
        <button @click="store.state.powerOffMenu = false" class="button w-[70px]">취소</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../../store/store.js";
function powerOff() {
  store.commit('powerOff');
}
</script>

<style scoped>
.backdrop-saturate-anim {
  animation: saturate-zero 4s ease both;
}

@keyframes saturate-zero {
  from{
    backdrop-filter: saturate(100%);
  }
  to{
    backdrop-filter: saturate(0%);

  }
}
</style>