// utilities/cardUtils.ts

// Constants
export const CARD_VALUES = [
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
export const CARD_TYPES = ["C", "D", "H", "S"];

export function buildDeck(): string[] {
  const deck: string[] = [];
  for (const type of CARD_TYPES) {
    for (const value of CARD_VALUES) {
      deck.push(`${value}-${type}`);
    }
  }
  return deck;
}

export function shuffleDeck(deck: string[]): void {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

export function getValue(card: string): number {
  const value = card.split("-")[0];
  if (value === "A") return 11;
  if (["J", "Q", "K"].includes(value)) return 10;
  return parseInt(value);
}

export function checkAce(card: string): number {
  return card.startsWith("A") ? 1 : 0;
}

export function reduceAce(sum: number, aceCount: number): number {
  while (sum > 21 && aceCount > 0) {
    sum -= 10;
    aceCount -= 1;
  }
  return sum;
}
