import { defineStore } from 'pinia'
import {ref} from "vue";
import {useProcessStore} from "./process.js";

export const useScreenStore = defineStore('screen', () => {
    const powerOn = ref(true) // 전원
    const startMenu = ref(false)//시작 버튼 메뉴
    const powerOffMenu = ref(false) // 시스템 종료 선택 메뉴
    const powerOffProgress = ref(false) // 시스템 종료
    const powerAlert = ref("로그오프 중...") // 시스템 종료 알림
    const powerOnLoading = ref(false) // 시스템 시작 로딩 바
    const powerOnProgress = ref(false) // 시스템 시작 화면

    function useClickStartButton(){
        startMenu.value = !startMenu.value
    }
    function useClickPowerOff() {
        startMenu.value = false
        powerOffMenu.value = true
    }
    function usePowerOff() {
        powerOffMenu.value = false
        powerOffProgress.value = true
        let audio = new Audio('../src/assets/sound/shutdown.wav')
        audio.play().then(r => {})
        setTimeout(() => {
            powerAlert.value = "시스템 종료 중...";
            setTimeout(() => {
                powerOn.value = false;
                powerOffProgress.value = false;
                powerAlert.value = "로그오프 중...";
            }, 3000);
        }, 3000);
    }
    function usePowerOn() {
        powerOn.value = true
        powerOnLoading.value = true
        setTimeout(() => {
            let audio = new Audio('../src/assets/sound/startup.wav')
            audio.play().then(r => {})
            powerOnLoading.value = false;
            powerOnProgress.value = true;
            setTimeout(() => {
                powerOnProgress.value = false;
            }, 2000);
        }, 3000);
    }
    return {
        powerOn,
        startMenu,
        powerOffMenu,
        powerOffProgress,
        powerAlert,
        powerOnLoading,
        powerOnProgress,
        useClickStartButton,
        useClickPowerOff,
        usePowerOff,
        usePowerOn
    }
})