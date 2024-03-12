<template>
  <div :style="style" :id="pro_info.program_info.type" class="z-[990] shrink-0 absolute">
    <div ref="wh" class="window w-fit bg-[#fcfcfe] truncate" :style="{width: browser_height+'px', height:browser_width+'px' }">
      <div ref="el"  class="title-bar flex shrink-0 item-center justify-between h-8 text-white select-none">
        <div class="flex items-center justify-start truncate">
          <div class="min-w-[22px] w-[22px] h-[22px] pr-[4px] mt-1.5 bg-no-repeat explorer-favicon"></div>
          <div class="items-start text-white truncate NanumGothic-Bold" > {{ pro_info.program_info.name }} - Microsoft Internet Explorer</div>
        </div>
        <div class="flex items-center justify-center gap-1 ml-2">
          <div class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black minimize">
          </div>
          <div class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black full-popup">
          </div>
          <div  @click="store.useRemoveProcess(pro_info.program_info.uuid)" class="w-[22px] h-[22px] hover:shadow-inner hover:shadow-white rounded-sm transition-all duration-75 active:opacity-70 box-border ring-0 outline-none active:shadow-black close">
          </div>
        </div>
      </div>
      <div class="p-4 select-none">
        <p>Hello world !</p>
        <p>{{ pro_info.program_info.uuid }}</p>
        <p>{{ mouse.elementY }} |  {{ mouse.elementX }}</p>
        <p>{{ mouse }}</p>
        <p>{{ browser_height }} |  {{ browser_width }}</p>
      </div>
      <div class="resizer resizer-r" @mousedown="mouseDownHandler"/>
      <div class="resizer resizer-b" @mousedown="mouseDownHandler"/>
    </div>
  </div>
</template>

<script setup>
import {useProcessStore} from "../../../stores/process"
import {useDraggable, useElementSize, useMouseInElement} from "@vueuse/core";
import {computed, reactive, ref} from "vue";
const store = useProcessStore()

const pro_info = defineProps(['program_info'])

// 웹 브라우저 이동
const el = ref(null)
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 80, y: 80 },
})
// 웹브라우저 화면 크기 조절
const wh = ref(null)
const mouse = reactive(useMouseInElement(wh))

const browser_height = ref(800)
const browser_width = ref(800)

const pre_mouse_x = ref(0)
const pre_mouse_y = ref(0)

const dx = ref(0)
const dy = ref(0)

function mouseDownHandler() {
  pre_mouse_x.value = mouse.elementX
  pre_mouse_y.value = mouse.elementY
  // 마우스 이동 이벤트 핸들러 등록
  document.addEventListener('mousemove', mouseMoveHandler);

  // 마우스 업 이벤트 핸들러 등록
  document.addEventListener('mouseup', mouseUpHandler);
}

function mouseMoveHandler() {
  console.log("browser_width",mouse.elementX-pre_mouse_x.value)
  browser_width.value = browser_width.value + (mouse.elementX - pre_mouse_x.value)
  console.log("browser_height",mouse.elementY-pre_mouse_y.value)
  browser_height.value = browser_height.value + (mouse.elementY - pre_mouse_y.value)
}
const mouseUpHandler = function () {
  document.removeEventListener('mousemove', mouseMoveHandler);
  document.removeEventListener('mouseup', mouseUpHandler);
};

</script>

<style scoped>
.title-bar {
  font-size: 13px;
  background: linear-gradient(180deg,#0997ff,#0053ee 8%,#0050ee 40%,#06f 88%,#06f 93%,#005bff 95%,#003dd7 96%,#003dd7);
  padding: 3px 5px 3px 3px;
  border-top: 1px solid #0831d9;
  border-left: 1px solid #0831d9;
  border-right: 1px solid #001ea0;
  border-top-left-radius: 8px;
  border-top-right-radius: 7px;
  text-shadow: 1px 1px #0f1089;
}
.window {
  box-shadow: inset -1px -1px #00138c, inset 1px 1px #0831d9, inset -2px -2px #001ea0, inset 2px 2px #166aee, inset -3px -3px #003bda, inset 3px 3px #0855dd;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  resize: both;
  padding: 0 0 3px;
  -webkit-font-smoothing: antialiased;
  width: 140vh;
  height: 80vh;
}
.resizer{
  position: absolute;
}
.resizer-r {
  cursor: col-resize;
  height: 100%;
  right: 0;
  top: 0;
  width: 5px;
}
.resizer-b {
  bottom: 0;
  cursor: row-resize;
  height: 5px;
  left: 0;
  width: 100%;
}
.explorer-favicon{
  background-image: url("/src/assets/wallpaper/web/exploerFavicon.png");
}
.minimize{
  background-color: white;
  background-image: url("/src/assets/wallpaper/web/minimize.svg");
}
.full-popup{
  background-color: white;
  background-image: url("/src/assets/wallpaper/web/fullsize.svg");
}
.close{
  background-color: white;
  background-image: url("/src/assets/wallpaper/web/close.svg");
}
</style>