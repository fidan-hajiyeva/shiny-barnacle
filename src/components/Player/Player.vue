<script setup lang="ts">
import type { Props } from "./types";
const props = defineProps<Props>();
</script>

<template>
  <div>
    <h2>
      Игрок: <span>{{ props.playerSum }}</span>
    </h2>
    <div id="your-cards" class="card-container">
      <img v-for="card in props.playerCards" :src="card.img" class="card-img" />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
