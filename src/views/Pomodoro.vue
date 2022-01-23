<template>
  <Timer
    :worktime="{ minutes: 25, seconds: 0 }"
    :breaktime="{ minutes: 5, seconds: 0 }"
  />
</template>

<script lang="ts" setup>
import Timer from "@/components/Timer.vue";
</script>
