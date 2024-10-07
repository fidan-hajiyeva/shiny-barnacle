<script setup lang="ts">
import { ref, onMounted } from "vue";

import Dealer from "@/components/Dealer";
import Player from "@/components/Player";
import Buttons from "@/components/Buttons";
import {
  buildDeck,
  checkAce,
  getValue,
  reduceAce,
  shuffleDeck,
} from "@/utilities/cardUtils";

// Reactive State
const dealerSum = ref(0);
const playerSum = ref(0);
const dealerAceCount = ref(0);
const playerAceCount = ref(0);
const hiddenCard = ref<string | null>(null);
const deck = ref<string[]>([]);
const dealerCards = ref<string[]>([]);
const playerCards = ref<string[]>([]);
const canHit = ref(true);
const gameOver = ref(false);
const resultMessage = ref("");

// Game Functions
function startGame() {
  hiddenCard.value = deck.value.pop()!;
  dealerSum.value += getValue(hiddenCard.value);
  dealerAceCount.value += checkAce(hiddenCard.value);

  while (dealerSum.value < 17) {
    drawCard(dealerCards.value, dealerSum, dealerAceCount);
  }

  for (let i = 0; i < 2; i++) {
    drawCard(playerCards.value, playerSum, playerAceCount);
  }
}

function drawCard(
  cards: string[],
  sum: { value: number },
  aceCount: { value: number }
) {
  const card = deck.value.pop()!;
  cards.push(card);
  sum.value += getValue(card);
  aceCount.value += checkAce(card);
}

function hit() {
  if (!canHit.value) return;
  drawCard(playerCards.value, playerSum, playerAceCount);
  if (reduceAce(playerSum.value, playerAceCount.value) > 21) {
    canHit.value = false;
  }
}

function stay() {
  dealerSum.value = reduceAce(dealerSum.value, dealerAceCount.value);
  playerSum.value = reduceAce(playerSum.value, playerAceCount.value);
  canHit.value = false;
  determineWinner();
}

function determineWinner() {
  if (playerSum.value > 21) {
    resultMessage.value = "You busted, Dealer wins!";
  } else if (dealerSum.value > 21) {
    resultMessage.value = "Dealer busted, You win!";
  } else if (playerSum.value === dealerSum.value) {
    resultMessage.value = "Draw!";
  } else if (playerSum.value > dealerSum.value) {
    resultMessage.value = "You win!";
  } else {
    resultMessage.value = "Dealer wins!";
  }
  gameOver.value = true;
}

function restartGame() {
  dealerSum.value = 0;
  playerSum.value = 0;
  dealerAceCount.value = 0;
  playerAceCount.value = 0;
  hiddenCard.value = null;
  deck.value = [];
  dealerCards.value = [];
  playerCards.value = [];
  canHit.value = true;
  gameOver.value = false;
  resultMessage.value = "";

  deck.value = buildDeck();
  shuffleDeck(deck.value);
  startGame();
}

// Lifecycle Hook
onMounted(() => {
  deck.value = buildDeck();
  shuffleDeck(deck.value);
  startGame();
});
</script>

<template>
  <Dealer
    :dealerSum="dealerSum"
    :dealerCards="dealerCards"
    :hiddenCard="hiddenCard"
  />
  <Player :playerSum="playerSum" :playerCards="playerCards" />
  <Buttons
    :gameOver="gameOver"
    @hit="hit"
    @stay="stay"
    @restart="restartGame"
  />
  <h2>{{ resultMessage }}</h2>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background: radial-gradient(circle at center, #35654d, #1b3120, #050c05);
  margin: 0;
  padding: 0;
  height: 100vh;
}

h2 {
  color: aliceblue;
  margin-bottom: 0;
}

.card-img {
  width: 20vw;
  height: auto;
  max-width: 125px;

  margin: 1em;
}
</style>
