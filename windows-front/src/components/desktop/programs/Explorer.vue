<template>
  <div :style="style" @click="store.state.selectedFolderTab='window'" :id="props.id" class="z-[990] shrink-0 absolute top-10">
    <div  class="window w-fit bg-[#fcfcfe]">
      <div ref="windowRef" class=" title-bar shrink-0">
        <div class="title-bar-text shrink-0" >{{ props.titleBar }}</div>
        <div class="flex items-center justify-center gap-1">
          <div class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
          </div>
          <div class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black fullsize">
          </div>
          <div  @click="removeWindow($event)" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
          </div>
        </div>
      </div>
      <div class="p-4 select-none">
        <p>Hello world !</p>
        <p>{{ props.id }}</p>
        <button>ok</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../../../store/store.js";
</script>

<style scoped>

</style>