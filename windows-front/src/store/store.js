import { createStore } from "vuex";

export default createStore({
    state: {
        startMenu : false,
        powerOffMenu : false,
        powerOffProgress : false,
        powerOn: true,
        powerAlert: "로그오프 중...",

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
            setTimeout(() => {
                state.powerAlert = "시스템 종료 중...";
                setTimeout(() => {
                    state.powerOn = false;
                }, 3000);
            }, 3000);
        }
    },
    actions:{

    }
})
