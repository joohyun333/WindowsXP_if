<template>
  <SystemOff v-if="store.state.powerOffProgress" class="!z-[99999]"/>
  <InitialScreen if v-if="store.state.powerOn === false" class="!z-[99999]"/>
  <LoadingOn v-if="store.state.powerOnLoading" class="z-[9999]"/>
  <SystemOn v-if="store.state.powerOnProgress" class="z-[99999]"/>
</template>
<script setup>

import SystemOn from "./SystemOn.vue";
import SystemOff from "./SystemOff.vue";
import LoadingOn from "./LoadingOn.vue";
import InitialScreen from "./InitialScreen.vue";
import store from "../../store/store.js";
</script>