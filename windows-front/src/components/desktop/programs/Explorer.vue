<template>
  <div :style="style" :id="props.id" class="z-[990] shrink-0 absolute top-10">
    <div  class="window w-fit bg-[#fcfcfe]">
      <div ref="windowRef" class=" title-bar flex shrink-0 item-center justify-between h-8 text-xs text-white select-none">
        <div class="title-bar-text shrink-0 text-white" >{{ props.titleBar }}</div>
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
import {useScreenStore} from "../../../stores/screen"
import {useDraggable} from "@vueuse/core";
import {ref} from "vue";
const props = defineProps(['program_info'])
const el = ref<HTMLElement | null>(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 80, y: 80 },
})
</script>

<style scoped>
.title-bar {
  background: linear-gradient(180deg,#0997ff,#0053ee 8%,#0050ee 40%,#06f 88%,#06f 93%,#005bff 95%,#003dd7 96%,#003dd7);
  padding: 3px 5px 3px 3px;
  border-top: 1px solid #0831d9;
  border-left: 1px solid #0831d9;
  border-right: 1px solid #001ea0;
  border-top-left-radius: 8px;
  border-top-right-radius: 7px;
  text-shadow: 1px 1px #0f1089;
}
.title-bar-text {
  font-weight: 700;
  /*letter-spacing: 0;*/
  margin-right: 24px;
  padding-left: 3px ;
}
</style>