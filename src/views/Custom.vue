<template>
  <div v-if="!choosen" class="h-full flex flex-col justify-center bg-pastel">
    <form
      @submit.prevent="submit"
      class="bg-silver p-2 text-white flex flex-col gap-2 shadow-xl m-1 shadow-silver border-2 border-gray-800 rounded"
    >
      <div id="work">
        Work duration: <br />
        <div class="ml-8">
          <input
            type="number"
            min="0"
            step="1"
            class="w-10 text-gray-700 text-center p-1 rounded"
            v-model="workDuration.minutes"
          />
          minutes and
          <input
            type="number"
            min="0"
            step="1"
            class="w-10 text-gray-700 text-center p-1 rounded"
            v-model="workDuration.seconds"
          />
          seconds
        </div>
        Break duration: <br />
        <div class="ml-8">
          <input
            type="number"
            min="0"
            step="1"
            class="w-10 text-gray-700 text-center p-1 rounded"
            v-model="breakDuration.minutes"
          />
          minutes and
          <input
            type="number"
            min="0"
            step="1"
            class="w-10 text-gray-700 text-center p-1 rounded"
            v-model="breakDuration.seconds"
          />
          seconds
        </div>
      </div>

      <button type="submit" class="p-2 bg-primary rounded-xl">Submit</button>
    </form>
  </div>
  <Timer v-else :breaktime="breakDuration" :worktime="workDuration" />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import Timer from "@/components/Timer.vue";
const choosen = ref(false);
const workDuration = reactive({
  minutes: 0,
  seconds: 0,
});

const breakDuration = reactive({
  minutes: 0,
  seconds: 0,
});

function submit() {
  choosen.value = true;
}
</script>

<style scoped>
.test {
  background-color: #e2f0cb;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
