<template>
  <div class="flex flex-col items-center justify-center bg-black select-none w-screen h-screen fixed top-0 left-0 Roboto-Regular text-white">
    <div class=" w-96 flex items-center justify-center flex-col">
      <div class="logos">
        <div id="line1" class="flex items-end justify-center gap-3">
          <p class="!leading-4 text-base after:content-['\00a9'] after:text-[10px] after:relative after:-top-2 after:ml-1">Microsoft</p>
          <img draggable="false" src="/src/assets/wallpaper/xp.png" alt="logo" class="w-32">
        </div>
        <p class="!text-5xl relative" >Windows<span class="text-[#FF6821] text-2xl absolute top-0 font-bold">xp</span></p>

      </div>
      <div class="py-[2px] leading-[0px] w-[150px] h-5 border-[2px] border-[#b2b2b2] rounded-md overflow-hidden !mt-16">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.box{
  width: 9px;
  height: 100%;
  background: linear-gradient(to bottom, #2838c7 0%,#5979ef 17%,#869ef3 32%,#869ef3 45%,#5979ef 59%,#2838c7 100%);
  display: inline-block;
  margin-right: 2px;
  animation: loader 2s infinite;
  animation-timing-function: linear;
}
@keyframes loader{
  0%{
    transform: translate(-30px);
  }
  100%{
    transform: translate(150px);
  }
}
</style>