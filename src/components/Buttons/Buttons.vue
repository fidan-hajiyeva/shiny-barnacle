<script setup lang="ts">
import { Props, Emits } from "./types";
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="buttons">
    <button @click="emit('hit')" data-tooltip="Hit">
      <img src="@/assets/img/hit.png" alt="Icon" />
    </button>
    <button @click="emit('stay')" data-tooltip="Stay">
      <img src="@/assets/img/stay.png" alt="Icon" />
    </button>
    <button v-if="gameOver" @click="emit('restart')" data-tooltip="Restart">
      <img src="@/assets/img/restart.png" alt="Icon" />
    </button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
}

button {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #c5c5c5;
  border: 1px solid #333333;
  cursor: pointer;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

button img {
  width: 30px;
  height: 30px;
}

button::after {
  content: attr(data-tooltip);

  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);

  background-color: #343434;
  color: white;
  padding: 0.5em;
  border-radius: 5px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;

  transition: opacity 0.3s;
}

button:hover::after {
  opacity: 1;
}
</style>
