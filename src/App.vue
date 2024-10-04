<script setup lang="ts">
import Dealer from "./components/Dealer";
import Player from "./components/Player";
import Buttons from "./components/Buttons";
</script>

<template>
  <div id="app">
    <Dealer
      :dealerSum="dealerSum"
      :dealerCards="dealerCards"
      :hiddenCard="hiddenCard"
    />
    <Player :playerSum="playerSum" :playerCards="playerCards" />
    <Buttons :gameOver="gameOver" @hit="hit" @stay="stay" @restart="restart" />
    <h2>{{ resultMessage }}</h2>
  </div>
</template>

<style>
/* Add your styles here */
</style>
