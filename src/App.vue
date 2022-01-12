<template>
  <nav
    class="bg-silver fixed w-full flex justify-evenly items-center h-14 gap-4 text-white border-b border-gray-200"
  >
    <router-link to="/pomodoro" class="nav-element">Pomodoro</router-link>
    <router-link to="/custom" class="nav-element">Custom</router-link>
  </nav>
  <main class="h-screen pt-14">
    <router-view></router-view>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.nav-element {
  @apply p-2 bg-primary rounded-xl text-white text-center w-1/3;
}
</style>
