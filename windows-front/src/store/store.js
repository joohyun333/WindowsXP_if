import { createStore } from "vuex";

export default createStore({
    state: {
        isClickStartButton: false,
    },
    getters:{

    },
    mutations:{
        clickStartButton(state){
            state.isClickStartButton = !state.isClickStartButton;
        }
    },
    actions:{

    }
})
