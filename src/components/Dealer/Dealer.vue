<script setup lang="ts">
import type { Props } from "./types";
const props = defineProps<Props>();
</script>

<template>
  <div>
    <h2>
      Dealer: <span>{{ props.dealerSum }}</span>
    </h2>
    <div>
      <img
        v-if="props.hiddenCard"
        id="hidden"
        :src="require(`@/assets/img/back.png`)"
        class="card-img"
      />

      <img
        v-for="card in props.dealerCards"
        :src="require(`@/assets/img/${card}.png`)"
        class="card-img"
      />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
