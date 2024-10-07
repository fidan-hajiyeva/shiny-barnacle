<script setup lang="ts">
import type { Props } from "./types";

const props = withDefaults(defineProps<Props>(), {
  playerSum: 0,
});
</script>

<template>
  <div>
    <h2>
      Player: <span>{{ props.playerSum }}</span>
    </h2>
    <div class="card-container">
      <img
        v-for="card in props.playerCards"
        :src="require(`@/assets/img/${card}.png`)"
        class="card-img"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
