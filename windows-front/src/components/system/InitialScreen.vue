<template>
  <div v-if="store.state.powerOn === false" class="bg-[#bbb] fixed top-0 left-0 z-[99999] mid_background w-screen h-screen text-white">
    <div class="top-0 left-0  w-full h-full flex flex-col justify-center items-center">
<!--      <div class="w-32 h-32 button" @click="onOff = !onOff" :class="{active: onOff}"></div>-->
      <div class="buttons-container">
        <button class="button" type="button">
          <span class="button-inside">Record</span>
        </button>
        <button class="button" type="button">
          <span class="button-inside dark-gray">Sound</span>
        </button>
        <button class="button" type="button">
          <span class="button-inside white">Erase</span>
        </button>
        <button class="button" type="button">
          <span class="button-inside light-gray">Shift</span>
        </button>
        <button class="button" type="button">
          <span class="button-inside gray">Play</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../../store/store.js";
import {onMounted, ref} from "vue";
const onOff = ref(false)
</script>
<style scoped>
.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 26em;
  gap: 1em;
}

.button {
  border: 0.125em solid transparent;
  border-radius: 0.125em;
  background-color: #010101;
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(255, 255, 255, 0.6);
  width: 6em;
}

.button-inside {
  --background-color: #ee5529;
  --background-color-active: #ee5529;
  --light-shadow-color: #ffb147;
  --dark-shadow-color: #d72d12;
  --text-color: #fff;
  display: inline-block;
  position: relative;
  border-radius: 0.5625em;
  padding: 0.625em 0.75em 0.4375em;
  width: 100%;
  background-color: var(--background-color);
  background-size: 80px 80px;
  box-shadow: inset 0.0625em 0.0625em 0.0625em var(--light-shadow-color), inset -0.0625em -0.0625em 0.0625em var(--dark-shadow-color), 0.125em 0.125em 0.25em #000;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-color);
  transition-property: transform, background-color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.25, 0.5, 0.5, 1);
}
.button:active .button-inside {
  transform: scale(0.98);
  background-color: var(--background-color-active);
  box-shadow: inset 0 0 0.25em #000, inset 0.0625em 0.0625em 0.0625em transparent, inset -0.0625em -0.0625em 0.0625em transparent, 0.125em 0.125em 0.25em transparent;
}
.button-inside.dark-gray {
  --background-color: #353535;
  --background-color-active: #313030;
  --light-shadow-color: #a7a7a7;
  --dark-shadow-color: #1c1c1c;
}
.button-inside.white {
  --background-color: #cfcbca;
  --background-color-active: #b9b5b3;
  --light-shadow-color: #fafafa;
  --dark-shadow-color: #646464;
  --text-color: #010101;
}
.button-inside.light-gray {
  --background-color: #bcbcbc;
  --background-color-active: #b1adad;
  --light-shadow-color: #f7f7f7;
  --dark-shadow-color: #646464;
}
.button-inside.gray {
  --background-color: #676767;
  --background-color-active: #575454;
  --light-shadow-color: #b8b7b5;
  --dark-shadow-color: #383838;
}
</style>