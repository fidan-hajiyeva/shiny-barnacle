<script setup lang="ts">
import type { Props } from "./types";
const props = defineProps<Props>();
</script>

<template>
  <div>
    <h2>
      Дилер: <span>{{ props.dealerSum }}</span>
    </h2>
    <div id="dealer-cards">
      <img
        v-if="props.hiddenCard"
        src="@/assets/img/back.png"
        class="card-img"
      />
      <img v-for="card in props.dealerCards" :src="card.img" class="card-img" />
    </div>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
