<template>
  <div v-if="store.state.powerOn === false" class="bg-[#bbb] fixed top-0 left-0 z-[99999] w-screen h-screen">
    <div class="top-0 left-0  w-full h-full flex flex-col justify-center items-center NanumGothic-ExtraBold" title="hello world 를 입력하세요.">
      <div class="flex flex-col h-28 Dos-vga">
        <div class="input bg-[#bbb] w-72 h-12 border-0 outline-0 rounded-md text-m px-1.5 cursor"
             :class="{ 'text' : command !== ''}" v-html="command"
        />
      </div>
      <div v-for="key_arr in keyBoard" class="flex flex-wrap gap-2 pb-2">
        <div v-for="text in key_arr" :class="'button rounded bg-[#000000] key-' + text.key_name" type="button">
          <span :class="'button-inside ' + text.color"  v-html="text.key_name"
                :style="{ 'width' : text.size + 'rem'}"
                @click="clickKeyBoard(text.key_name)"
          >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../../store/store.js";
import {onMounted, onUnmounted, ref} from "vue";
const command = ref('')

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
function clickKeyBoard(keys){
  if (keys === 'space') {
    if (command.value.length < 30) {
      command.value += ' '
    }
  }else if (keys === '⬅') {
    command.value = command.value.slice(0, -1)
  }else if (keys === 'connect') {
    if (command.value === 'hello world') {
      console.log('정답')
    }
  }else {
    if (command.value.length < 30) {
      command.value += keys
    }
  }
}

function handleKeyDown(){
  let keyPressed = event.key.toLowerCase();
  if (keyPressed === ' '){
    keyPressed = 'space'
  }else if (keyPressed === 'backspace'){
    keyPressed = '⬅'
  }else if (keyPressed === 'enter' ){
    keyPressed = 'connect'
  }
  const button = document.querySelector(`.key-${keyPressed}`);
  if (button) {
    button.classList.add('active');
    clickKeyBoard(keyPressed)
    setTimeout(() => {
      button.classList.remove('active');
    }, 80);
  }
}
const keyBoard = [
    [
        {key_name: '1', size: '3', color: 'white'},
        {key_name: '2', size: '3', color: 'white'},
        {key_name: '3', size: '3', color: 'white'},
        {key_name: '4', size: '3', color: 'white'},
        {key_name: '5', size: '3', color: 'white'},
        {key_name: '6', size: '3', color: 'white'},
        {key_name: '7', size: '3', color: 'white'},
        {key_name: '8', size: '3', color: 'white'},
        {key_name: '9', size: '3', color: 'white'},
        {key_name: '0', size: '3', color: 'white'},
    ],
    [
        {key_name: 'q', size: '3', color: 'white'},
        {key_name: 'w', size: '3', color: 'white'},
        {key_name: 'e', size: '3', color: 'white'},
        {key_name: 'r', size: '3', color: 'white'},
        {key_name: 't', size: '3', color: 'white'},
        {key_name: 'y', size: '3', color: 'white'},
        {key_name: 'u', size: '3', color: 'white'},
        {key_name: 'i', size: '3', color: 'white'},
        {key_name: 'o', size: '3', color: 'white'},
        {key_name: 'p', size: '3', color: 'white'},
    ],
    [
        {key_name: 'a', size: '3', color: 'white'},
        {key_name: 's', size: '3', color: 'white'},
        {key_name: 'd', size: '3', color: 'white'},
        {key_name: 'f', size: '3', color: 'white'},
        {key_name: 'g', size: '3', color: 'white'},
        {key_name: 'h', size: '3', color: 'white'},
        {key_name: 'j', size: '3', color: 'white'},
        {key_name: 'k', size: '3', color: 'white'},
        {key_name: 'l', size: '3', color: 'white'},
    ],
    [
        {key_name: 'z', size: '3', color: 'white'},
        {key_name: 'x', size: '3', color: 'white'},
        {key_name: 'c', size: '3', color: 'white'},
        {key_name: 'v', size: '3', color: 'white'},
        {key_name: 'b', size: '3', color: 'white'},
        {key_name: 'n', size: '3', color: 'white'},
        {key_name: 'm', size: '3', color: 'white'},
    ],
    [
        {key_name: 'space', size: '10', color: 'dark-gray'},
        {key_name: '⬅', size: '7', color: 'gray'},
        {key_name: 'connect', size: '7', color: ''},
    ],
]
</script>
<style scoped>

.button {
  border: 0.125em solid transparent;
  box-shadow: 0.0625em 0.0625em 0.0625em rgba(255, 255, 255, 0.6);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
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
.button.active .button-inside,
.button:active .button-inside {
  transform: scale(0.98);
  background-color: var(--background-color-active);
  box-shadow: inset 0 0 0.25em #000, inset 0.0625em 0.0625em 0.0625em transparent, inset -0.0625em -0.0625em 0.0625em transparent, 0.125em 0.125em 0.25em transparent;
}
.button-inside.white {
  --background-color: #cfcbca;
  --background-color-active: #b9b5b3;
  --light-shadow-color: #fafafa;
  --dark-shadow-color: #646464;
  --text-color: #010101;
}

.button-inside.dark-gray {
  --background-color: #353535;
  --background-color-active: #313030;
  --light-shadow-color: #a7a7a7;
  --dark-shadow-color: #1c1c1c;
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

.input {
  box-shadow: 3px 3px 10px rgba(147,145,145,1), -1px -1px 6px rgba(225,255,225, 0.8);
}

.input.text {
  border: 2px solid transparent;
  background-color: #171717;
  color: #55FF55;
  box-shadow: 3px 3px 10px rgba(69,68,68,1), -1px -1px 6px rgba(0,0,0,0.5), inset 3px 3px 10px rgba(0,0,0,1), inset -1px -1px 6px rgba(69,68,68,0.5);
}
</style>