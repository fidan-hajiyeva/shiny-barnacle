import { Card } from "@/types";
import { Ref } from "vue";

export const buildDeck = (deck: Ref<string[]>) => {
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
};

export const shuffleDeck = (deck: Ref<string[]>) => {
  for (let i = 0; i < deck.value.length; i++) {
    const j = Math.floor(Math.random() * deck.value.length);
    const temp = deck.value[i];
    deck.value[i] = deck.value[j];
    deck.value[j] = temp;
  }
};

export const getValue = (card: Card): number => {
  const value = card.img.split("-")[0];
  if (value === "A") return 11;
  if (["J", "Q", "K"].includes(value)) return 10;
  return parseInt(value);
};

export const checkAce = (card: Card): number => {
  return card.img.split("-")[0] === "A" ? 1 : 0;
};

export const reduceAce = (sum: number, aceCount: number): number => {
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount -= 1;
  }
  return sum;
};
