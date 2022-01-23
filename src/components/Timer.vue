<template>
  <div
    class="wrapper font-roboto h-full w-full flex flex-col justify-center gap-20 items-center"
    :class="activityColor"
  >
    <div id="status">
      <h1
        v-if="!running"
        class="text-4xl sm:text-5xl text-gray-600 text-center"
      >
        Start when ready!
      </h1>
      <h1 v-else-if="workMode" class="status">work</h1>
      <h1 v-else class="status">pause</h1>
    </div>
    <div
      id="time"
      class="text-6xl sm:text-9xl mx-auto text-center"
      :class="{ 'text-white': running, 'text-gray-600': !running }"
    >
      <span id="minutes">{{ toTwoDigits(minutes) }}</span>
      :
      <span id="seconds">{{ toTwoDigits(seconds) }}</span>
    </div>

    <div
      id="controls"
      class="flex flex-col justify-center items-center gap-2 bg-silver border-2 border-gray-800 p-2 text-xl rounded-lg text-gray-100"
    >
      <div id="sessions">
        <div id="modifysessions" class="bg-gray-400 rounded-full">
          <button
            v-if="!running"
            class="button"
            @click="if (periods > 1) periods--;"
          >
            <img src="../assets/img/minus.svg" alt="-" />
          </button>
          <span class="px-2"
            ><b>{{ periods }}</b> study session{{
              periods > 1 ? "s" : ""
            }}</span
          >
          <button v-if="!running" class="button" @click="periods++">
            <img src="../assets/img/plus.svg" alt="+" />
          </button>
        </div>
      </div>
      <div id="totaltime" class="text-center">
        {{ totalTime }}
      </div>
      <button
        class="p-2 bg-primary rounded-xl text-white flex gap-4"
        @click="switchTimer"
      >
        {{ buttonText }}
        <img
          class="w-5"
          v-if="!running"
          src="../assets/img/play.svg"
          alt="start"
        />
        <img class="w-5" v-else src="../assets/img/pause.svg" alt="pause" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onUnmounted, Ref, ref } from "vue";
import { defineProps } from "vue";

const props = defineProps<{
  breaktime: { minutes: number; seconds: number };
  worktime: { minutes: number; seconds: number };
}>();

function toPublicPath(path: string) {
  return process.env.BASE_URL + path;
}

const endOfWorkSound = new Audio(toPublicPath("sound/end-of-work.mp3"));
const endOfPauseSound = new Audio(toPublicPath("sound/end-of-pause.mp3"));

const running = ref(false);
const workMode = ref(true);
const periods = ref(4);
const minutes = ref(props.worktime.minutes);
const seconds = ref(props.worktime.seconds);
const sound: Ref<boolean> = inject("sound") || ref(false);

const activityColor = computed(() => {
  const res = [];
  if (!running.value) {
    res.push("bg-pastel");
  } else if (workMode.value) {
    res.push("bg-gradient-to-t", "from-[#A46843]", "to-[#BD8E63]");
  } else {
    // is pause
    res.push("bg-gradient-to-t", "from-[#698561]", "to-[#E9E5B8]");
  }
  return res;
});

function restartTimer() {
  minutes.value = props.worktime.minutes;
  seconds.value = props.worktime.seconds;
  workMode.value = true;
}

function breakTimer() {
  minutes.value = props.breaktime.minutes;
  seconds.value = props.breaktime.seconds;
  workMode.value = false;
}

const totalTime = computed(() => {
  return secondsToHMS(
    periods.value *
      (props.worktime.minutes * 60 +
        props.worktime.seconds +
        props.breaktime.minutes * 60 +
        props.breaktime.seconds)
  );
});

function secondsToHMS(_seconds: number) {
  const hours = Math.floor(_seconds / 3600);
  const minutes = Math.floor((_seconds % 3600) / 60);
  const seconds = _seconds % 60;
  return `${hours}h${minutes}m${seconds}s`;
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
          if (sound.value) endOfWorkSound.play();
          breakTimer();
          startTimer();
        } else {
          if (sound.value) endOfPauseSound.play();
          restartTimer();
          if (periods.value > 0) {
            periods.value--;
            startTimer();
          }
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

onUnmounted(() => stopTimer());
</script>

<style scoped>
.button {
  @apply bg-gray-800 text-white w-7 p-2 rounded-full hover:bg-white transition-colors;
}

.status {
  @apply text-5xl md:text-7xl text-white font-bold uppercase;
}
</style>
