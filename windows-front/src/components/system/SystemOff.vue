<template>
  <div class="bg-[#00309C] fixed top-0 left-0 py-20 w-screen h-screen select-none">
    <div class="top-0 left-0 mid_background justify-between w-full h-full flex flex-col items-center origin-top-left">
      <div class="w-full h-[3px] from-transparent via-white to-transparent bg-gradient-to-r"></div>

      <div class="-mt-20 text-white">
        <div class="scale-[.60] -mr-36 mb-3 relative origin-bottom-right">
          <div class="flex items-end justify-center gap-3 -ml-[15px]">
            <p class="!leading-4 text-base after:content-['\00a9'] after:text-[10px] after:relative after:-top-2 after:ml-1">Microsoft</p>
            <img draggable="false" src="/src/assets/wallpaper/xp.png" alt="logo" class="w-32">
          </div>
          <div class="flex flex-col justify-start items-end">
            <p class="!text-5xl pr-6 relative font-[1000]" >Windows<span class="text-[#FF6821] text-2xl absolute top-0 font-bold">xp</span></p>
            <h1 class="text-2xl mt-2">{{ store.powerAlert }}</h1>
          </div>
        </div>
      </div>

      <div class="h-[3px] w-full from-transparent via-[#e4a668] to-transparent bg-gradient-to-r"></div>
    </div>
  </div>
</template>

<script setup>
import {useScreenStore} from "../../stores/screen"
const store = useScreenStore()
</script>

<style scoped>
.mid_background{
  background-image: radial-gradient(circle at top left, #8EAEEE 1%, #5A7EDC 29%);
}
</style>