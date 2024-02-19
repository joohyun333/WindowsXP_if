import { createStore } from "vuex";

export default createStore({
    state: {
        powerOn: true, // 전원
        startMenu : false, //시작 버튼 메뉴

        powerOffMenu : false, // 시스템 종료 선택 메뉴
        powerOffProgress : false, //시스템 종료
        powerAlert: "로그오프 중...", // 시스템 종료 알림

        powerOnLoading : false, // 시스템 시작 로딩 바
        powerOnProgress : false, // 시스템 시작 화면

        startProgram:"" // 시작할 프로그램
    },
    getters:{

    },
    mutations:{
        clickStartButton(state){
            state.startMenu = !state.startMenu;
        },
        clickPowerOff(state){
            state.startMenu = false;
            state.powerOffMenu = true;
        },
        powerOff(state){
            state.powerOffMenu = false;
            state.powerOffProgress = true;
            let audio = new Audio('../src/assets/sound/shutdown.wav')
            audio.play().then(r => {})
            setTimeout(() => {
                state.powerAlert = "시스템 종료 중...";
                setTimeout(() => {
                    state.powerOn = false;
                    state.powerOffProgress = false;
                    state.powerAlert = "로그오프 중...";
                }, 3000);
            }, 3000);
        },
        powerOn(state){
            state.powerOn=true
            state.powerOnLoading = true
            setTimeout(() => {
                let audio = new Audio('../src/assets/sound/startup.wav')
                audio.play().then(r => {})
                state.powerOnLoading = false;
                state.powerOnProgress = true;
                setTimeout(() => {
                    state.powerOnProgress = false;
                }, 2000);
            }, 3000);
        },
    },
    actions:{

    }
})
