<template>
  <div v-if="store.state.powerOnProgress" class="bg-[#00309C] fixed top-0 left-0 py-20 z-[99999] w-screen h-screen select-none">
    <div class="top-0 left-0 mid_background justify-between w-full h-full flex flex-col items-center origin-top-left">
      <div class="w-full h-[3px] from-transparent via-white to-transparent bg-gradient-to-r"></div>
      <h1 class="text-4xl text-white italic shadows">새로운 시작</h1>
      <div class="h-[3px] w-full from-transparent via-[#e4a668] to-transparent bg-gradient-to-r"></div>
    </div>
  </div>
</template>

<script setup>

import store from "../../store/store.js";
</script>

<style scoped>
.mid_background{
  background-image: radial-gradient(circle at top left, #8EAEEE 1%, #5A7EDC 29%);
}
.shadows {
  text-shadow: 2px 2px 1px #020236;
}

</style>