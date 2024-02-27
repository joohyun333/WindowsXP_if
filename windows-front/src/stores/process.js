import { defineStore } from 'pinia'
import { uuid } from 'vue3-uuid';
import _ from 'lodash';
import {ref} from "vue";

export const useProcessStore = defineStore('process', () => {
    const programs = ref([]) // 프로그램 목록
    const startProgram = ref([]) // 실행할 프로그램
    useInitPrograms()
    function useInitPrograms(){
        programs.value = [
            {'type':'recycleBin', 'name':'휴지통', 'path':'../src/assets/wallpaper/program/recycleBin.png', 'alt':'recycleBin-logo'},
            {'type':'myComputer', 'name':'내 컴퓨터', 'path':'../src/assets/wallpaper/program/myComputer.png', 'alt':'myComputer-logo'},
            {'type':'internet', 'name':'인터넷', 'path':'../src/assets/wallpaper/program/internet.png', 'alt':'internet-logo'},
        ]
    }
    function useRemoveProcess(uuid){
        for (let i = 0; i < startProgram.value.length; i++) {
            if (startProgram.value[i].uuid === uuid) {
                startProgram.value[i] = {}; // 해당 객체 삭제
                break; // 찾았으니 순회 중단
            }
        }
    }
    function useAddProcess(program){
        startProgram.value.push(initStyle(program))
    }

    function initStyle(program){
        const cloneInstance = _.cloneDeep(program)
        cloneInstance.uuid = uuid.v4();
        return cloneInstance
    }

    return { programs, startProgram, useAddProcess, useRemoveProcess}
})