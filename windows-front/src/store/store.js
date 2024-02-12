import { createStore } from "vuex";

export default createStore({
    state: {
        startMenu : false,
        powerOffMenu : false,
        powerOn: true,
        powerAlert: "로그오프 중..."
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
            state.powerOn = false;
            setTimeout(() => {
                state.powerAlert = "시스템 종료 중...";
            }, 3000);
        }
    },
    actions:{

    }
})
