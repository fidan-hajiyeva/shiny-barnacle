<script setup lang="ts">
import { Props, Emits } from "./types";
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="buttons">
    <button @click="emit('hit')" data-tooltip="Взять">
      <img src="@/assets/img/hit.png" alt="Icon" />
    </button>
    <button @click="emit('stay')" data-tooltip="Остановиться">
      <img src="@/assets/img/stay.png" alt="Icon" />
    </button>
    <button v-if="gameOver" @click="emit('restart')" data-tooltip="Заново">
      <img src="@/assets/img/restart.png" alt="Icon" />
    </button>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
