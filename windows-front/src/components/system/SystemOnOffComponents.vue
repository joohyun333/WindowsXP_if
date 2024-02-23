<template>
  <SystemOff v-if="store.powerOffProgress" class="!z-[99999]"/>
  <InitialScreen if v-if="store.powerOn === false" class="!z-[99999]"/>
  <LoadingOn v-if="store.powerOnLoading" class="z-[9999]"/>
  <SystemOn v-if="store.powerOnProgress" class="z-[99999]"/>
</template>
<script setup>

import SystemOn from "./SystemOn.vue";
import SystemOff from "./SystemOff.vue";
import LoadingOn from "./LoadingOn.vue";
import InitialScreen from "./InitialScreen.vue";
import {useScreenStore} from "../../stores/screen"
const store = useScreenStore()
</script>