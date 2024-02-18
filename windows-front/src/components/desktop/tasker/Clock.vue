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
    if (minutes < 10){
      minutes = ":0" + minutes
    }else{
      minutes = ":" + minutes
    }
    let ampm = hours >= 12 ? '오후' : '오전';
    if (hours > 12){
      hours %= 12
    }else if (hours === 0){
      hours = 12
    }
    time.value = ampm + " " +  hours + minutes
  }, 100);
})
</script>

<style scoped>

</style>