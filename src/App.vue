<template>
  <div
    class="wrapper h-screen font-roboto w-full flex flex-col justify-center gap-20 items-center"
    :class="activityColor"
  >
    <div id="status">
      <h1 v-if="!running" class="text-4xl sm:text-5xl text-white text-center">
        Start when ready!
      </h1>
      <h1 v-else-if="workMode" class="status">work</h1>
      <h1 v-else class="status">pause</h1>
    </div>
    <div id="time" class="text-6xl sm:text-9xl text-white mx-auto text-center">
      <span id="minutes">{{ toTwoDigits(minutes) }}</span>
      :
      <span id="seconds">{{ toTwoDigits(seconds) }}</span>
    </div>

    <div
      id="controls"
      class="flex flex-col justify-center items-center gap-2 bg-gray-800 p-2 text-xl rounded-lg text-gray-100"
    >
      <div id="sessions" v-if="!running">
        <div id="modifysessions" class="bg-gray-400 text-black rounded-full">
          <button class="button" @click="if (periods > 1) periods--;">
            <img src="./assets/img/minus.svg" alt="-" />
          </button>
          <span class="px-2"
            ><b class="">{{ periods }}</b> study session{{
              periods > 1 ? "s" : ""
            }}</span
          >
          <button class="button" @click="periods++">
            <img src="./assets/img/plus.svg" alt="+" />
          </button>
        </div>
      </div>
      <div id="totaltime" v-if="!running" class="text-center">
        {{ minutesToHourMinutes(periods * 30) }}
      </div>
      <button
        class="bg-gray-100 p-2 text-black flex gap-4"
        @click="switchTimer"
      >
        {{ buttonText }}
        <img
          class="w-5"
          v-if="!running"
          src="./assets/img/play.svg"
          alt="start"
        />
        <img class="w-5" v-else src="./assets/img/pause.svg" alt="pause" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

function toPublicPath(path: string) {
  return process.env.BASE_URL + path;
}

const endOfWorkSound = new Audio(toPublicPath("sound/end-of-work.mp3"));
const endOfPauseSound = new Audio(toPublicPath("sound/end-of-pause.mp3"));

const WORK_MINUTES = 25;
const BREAK_MINUTES = 5;

const running = ref(false);
const workMode = ref(true);
const periods = ref(4);
const minutes = ref(WORK_MINUTES);
const seconds = ref(0);

const activityColor = computed(() => {
  const res = ["bg-gradient-to-tr"];
  if (!running.value) {
    res.push("from-yellow-700", "to-yellow-500");
  } else if (workMode.value) {
    res.push("from-red-800", "to-red-500");
  } else {
    // is pause
    res.push("from-green-800", "to-green-500");
  }
  return res;
});

function restartTimer() {
  minutes.value = WORK_MINUTES;
  seconds.value = 0;
  workMode.value = true;
}

function breakTimer() {
  minutes.value = BREAK_MINUTES;
  seconds.value = 0;
  workMode.value = false;
}

function minutesToHourMinutes(_minutes: number) {
  const hours = Math.floor(_minutes / 60);
  const hourString = hours > 0 ? `${hours} hour${hours > 1 ? "s" : ""} ` : "";
  const minutes = _minutes % 60;
  const minuteString = minutes > 0 ? `${minutes} minutes` : "0 minute";
  return `${hourString}${minuteString}`;
}

let timerInterval = -1;

const buttonText = computed(() => `${running.value ? "Stop" : "Start"} Timer`);

function toTwoDigits(num: number) {
  return num < 10 ? `0${num}` : num;
}

function switchTimer() {
  console.log("Timer started");
  if (!running.value) {
    startTimer();
  } else {
    stopTimer();
  }
}

function startTimer() {
  if (!running.value) running.value = true;
  timerInterval = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        stopTimer();
        if (workMode.value) {
          endOfWorkSound.play().then(() => {
            breakTimer();
            startTimer();
          });
        } else {
          endOfPauseSound.play().then(() => {
            restartTimer();
            if (periods.value > 0) {
              periods.value--;
              startTimer();
            }
          });
        }
        return;
      }
      minutes.value--;
      seconds.value = 59;
    } else {
      seconds.value--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  running.value = false;
}
</script>

<style>
.button {
  @apply bg-gray-100 text-white w-7 p-2 rounded-full hover:bg-white transition-colors;
}

.status {
  @apply text-5xl md:text-7xl text-white font-bold;
}
</style>
