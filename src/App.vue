<script setup lang="ts">
import { ref, onMounted } from "vue";

import Dealer from "./components/Dealer";
import Player from "./components/Player";
import Buttons from "./components/Buttons";

import { Card } from "./types";

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

function buildDeck() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  const types = ["C", "D", "H", "S"];
  deck.value = [];
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.value.push(values[j] + "-" + types[i]);
    }
  }
}

function shuffleDeck() {
  for (let i = 0; i < deck.value.length; i++) {
    const j = Math.floor(Math.random() * deck.value.length);
    const temp = deck.value[i];
    deck.value[i] = deck.value[j];
    deck.value[j] = temp;
  }
}

function getValue(cardSrc: string): number {
  const data = cardSrc.split("/").pop()!.split("-");
  const value = data[0];
  if (isNaN(Number(value))) {
    if (value === "A") return 11;
    return 10;
  }
  return parseInt(value);
}

function checkAce(cardSrc: string): number {
  return cardSrc[0] === "A" ? 1 : 0;
}

function reduceAce(sum: number, aceCount: number): number {
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount -= 1;
  }
  return sum;
}

function startGame() {
  hiddenCard.value = deck.value.pop()!;
  dealerSum.value += getValue(hiddenCard.value);
  dealerAceCount.value += checkAce(hiddenCard.value);

  while (dealerSum.value < 17) {
    const card = deck.value.pop()!;
    dealerCards.value.push(card);
    dealerSum.value += getValue(card);
    dealerAceCount.value += checkAce(card);
  }

  for (let i = 0; i < 2; i++) {
    const card = deck.value.pop()!;
    playerCards.value.push(card);
    playerSum.value += getValue(card);
    playerAceCount.value += checkAce(card);
  }
}

function hit() {
  if (!canHit.value) {
    return;
  }
  const card = deck.value.pop()!;
  playerCards.value.push(card);
  playerSum.value += getValue(card);
  playerAceCount.value += checkAce(card);

  if (reduceAce(playerSum.value, playerAceCount.value) > 21) {
    canHit.value = false;
  }
}

function stay() {
  dealerSum.value = reduceAce(dealerSum.value, dealerAceCount.value);
  playerSum.value = reduceAce(playerSum.value, playerAceCount.value);
  canHit.value = false;

  let message = "";
  if (playerSum.value > 21) {
    message = "You busted, Dealer wins!";
  } else if (dealerSum.value > 21) {
    message = "Dealer busted, You win!";
  } else if (playerSum.value === dealerSum.value) {
    message = "Draw!";
  } else if (playerSum.value > dealerSum.value) {
    message = "You win!";
  } else {
    message = "Dealer wins!";
  }

  resultMessage.value = message;
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

  buildDeck();
  shuffleDeck();
  startGame();
}

onMounted(() => {
  buildDeck();
  shuffleDeck();
  startGame();
});
</script>

<template>
  <div id="app">
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
  </div>
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
