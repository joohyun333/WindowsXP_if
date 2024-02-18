<template>
  <div v-if="store.state.startMenu" class="w-96 h-[480px] select-none rounded-t-lg  bg-white fixed bottom-[34px] left-0 z-[999] flex flex-col items-center justify-between">

    <div class="start_menu shrink-0 rounded-t-lg flex items-center h-16 select-none text-white justify-start gap-2 pl-2 w-full">
      <div class="border border-white w-12 h-12 rounded-md overflow-hidden">
        <img draggable="false" type="image/bmp" src="/src/assets/wallpaper/startmenu/user/snowflake.png" alt="userImage">
      </div>
      <p class="font-bold tracking-wider text-base NanumGothic ">Administrator</p>
    </div>

    <div class="bg-zinc-500 h-full w-full flex items-center justify-center border-x-2 border-[#0831d9] flex-wrap">

      <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#e4a668] to-transparent"></div>

      <div class="w-1/2 h-full bg-white text-sm tracking-tighter flex flex-col justify-end items-center">
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:!text-white hover:bg-[#316ac5] text-xs font-bold NanumGothic-ExtraBold">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/internet.png" alt="internet">
            <div class="flex flex-col items-start justify-start">
              <p>인터넷</p> <p class="font-thin opacity-60 ">Internet Explorer</p>
            </div>
          </li>
        </ul>
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:!text-white hover:bg-[#316ac5] text-xs font-bold NanumGothic-ExtraBold">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/mail.png" alt="email">
            <div class="flex flex-col items-start justify-start">
              <p>전자 메일</p> <p class="font-thin opacity-60 ">Outlook Express</p>
            </div>
          </li>
        </ul>

        <div class="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:text-white hover:bg-[#316ac5] text-xs ">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/media_player.png" alt="media_player">
            Windows Media Player
          </li>
        </ul>
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:text-white hover:bg-[#316ac5] text-xs ">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/messenger.png" alt="messenger">
            Windows Messenger
          </li>
        </ul>
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:text-white hover:bg-[#316ac5] text-xs ">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/around.png" alt="around">
            Windows XP 둘러보기
          </li>
        </ul>
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:text-white hover:bg-[#316ac5] text-xs ">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/transfer.png" alt="transfer">
            파일 및 설정 전송 마법사
          </li>
        </ul>
        <ul class="w-full px-px py-1" >
          <li class="text-center w-full flex items-center py-1 justify-start gap-1 px-2 hover:text-white hover:bg-[#316ac5] text-xs ">
            <img class="w-8" draggable="false" src="/src/assets/wallpaper/startmenu/prompt.png" alt="prompt">
            명령 프롬프트
          </li>
        </ul>

        <div class="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

        <ul class="w-full px-px py-1" >
          <li class="text-center w-full font-semibold flex items-center py-1 justify-center gap-4  hover:text-white hover:bg-[#316ac5] ">
            모든 프로그램 (P)
            <img draggable="false" src="/src/assets/wallpaper/startmenu/all.png" alt="all"></li>
        </ul>
      </div>

      <div class="w-1/2 h-full bg-[#d2e5fa] border-l border-l-blue-300 font-bold">
        <ul class="px-px py-1 NanumGothic-ExtraBold">
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-bold py-1 px-2 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/my_document.png" alt="my_document">
            <p>내 문서</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-bold py-1 px-2 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/my_picture.png" alt="my_picture">
            <p>내 그림</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-bold py-1 px-2 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/my_music.png" alt="my_music">
            <p>내 음악</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-bold py-1 px-2 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/my_computer.png" alt="my_computer">
            <p>내 컴퓨터</p>
          </li>
        </ul>
        <div class="w-11/12 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent "></div>

        <ul class="px-px py-1">
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/control.png" alt="control">
            <p>제어판(C)</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/program_config.png" alt="program_config">
            <p>기본 프로그램 설정</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/connect.png" alt="connect">
            <p>연결대상(T)</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/print.png" alt="print">
            <p>프린터 및 팩스</p>
          </li>
        </ul>

        <div class="w-11/12 h-px bg-gradient-to-r from-transparent via-zinc-400 to-transparent "></div>

        <ul class="px-px py-1">
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/help.png" alt="help">
            <p>도움말 및 지원(H)</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/search.png" alt="search">
            <p>검색(S)</p>
          </li>
          <li class="flex items-center hover:text-white hover:bg-[#316ac5] justify-start gap-2 text-xs font-thin px-2 py-1 text-[#0a1835] ">
            <img draggable="false" class="w-6" src="/src/assets/wallpaper/startmenu/run.png" alt="run">
            <p>실행(R)...</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="start_menu_footer shrink-0 h-10 self-end w-full flex items-center justify-end px-2 gap-2">
      <div class="flex text-white font-thin text-xs items-center justify-center group gap-1 ">
        <div class="bg-white rounded-sm">
          <img draggable="false" class="w-6 h-6 group-active:opacity-70 " src="/src/assets/wallpaper/startmenu/logoff.png" alt="logoff">
        </div>
        <p>로그오프(L)</p>
      </div>
      <div @click="clickPowerOffButton" class="flex text-white font-thin text-xs items-center justify-center group gap-1 ">
        <div class="bg-white rounded-sm">
          <img draggable="false" class="w-6 h-6 group-active:opacity-70 " src="/src/assets/wallpaper/startmenu/poweroff.png" alt="poweroff">
        </div>
        <p>컴퓨터 끄기(U)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../../../store/store.js";
function clickPowerOffButton(){
  store.commit('clickPowerOff');
}
</script>

<style scoped>
.start_menu {
  background-image: linear-gradient(0deg, #0072f4 0%, #3889e6 11%, #1472e6 42%, #004cb0 92%, #70aafb 96%, #255db5 100%);
  border-top: 1px solid #0831d9;
  border-left: 1px solid #0831d9;
  border-right: 1px solid #001ea0;

  box-shadow: 0px 1px  22px #0832d99f inset;
  text-shadow: 2px 2px 1px #020236;
}
.start_menu_footer {
  background-image: linear-gradient(0deg, #004cb0 0%, #004cb0 11%, #2b7ce3 42%, #418be4 92%, #418fe4 96%);
  border-top: 1px solid #0831d9;
  border-left: 1px solid #0831d9;
  border-right: 1px solid #001ea0;
  box-shadow: 10px -2px  51px #02029267 inset;
}
</style>