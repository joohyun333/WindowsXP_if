<template>
  <div class="pl-4 text-sm leading-5">
    {{ time }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const time = ref(0)
onMounted(() => {
  setInterval(() => {
    const time_date = new Date()
    let hours = time_date.getHours();
    let minutes = time_date.getMinutes();
    let ampm = hours >= 12 ? '오후' : '오전';
    time.value = ampm + " " + (minutes < 10 ? hours + ":0" + minutes : hours % 12 + ":"+ minutes)
  }, 100);
})
</script>

<style scoped>

</style>