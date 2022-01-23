<template>
  <nav
    class="bg-silver fixed w-full flex justify-center items-center h-14 gap-4 text-white border-b border-gray-200"
  >
    <router-link to="/pomodoro" class="nav-element">Pomodoro</router-link>
    <router-link to="/custom" class="nav-element">Custom</router-link>
    <div @click="sound = !sound" class="sound w-10 fixed right-1">
      <img v-if="!sound" src="./assets/img/volume-off.svg" alt="volume off" />
      <img v-if="sound" src="./assets/img/volume-up.svg" alt="volume on" />
    </div>
  </nav>
  <main class="h-screen pt-14">
    <router-view :sound="sound"></router-view>
  </main>
</template>

<script lang="ts" setup>
import { provide, ref, watch } from "vue";
const sound = ref(true);
provide("sound", sound);
watch(sound, (val) => {
  provide("sound", val);
});
</script>

<style scoped>
.nav-element {
  @apply p-2 bg-primary rounded-xl text-white text-center w-1/3 sm:text-xl;
}

.sound.activated {
  @apply bg-green-500;
}

.sound.disabled {
  @apply bg-red-500;
}

.sound {
  @apply p-2 rounded-xl text-white text-center text-xs sm:text-xl cursor-pointer transition-colors hover:opacity-80;
}
</style>
