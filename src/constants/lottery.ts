import { Award } from "@/types/Award";

export const PRICE_PER_LOTTERY = 1000 as const;
export const LOTTERY_AWARD: Award[] = [
  { numHit: 3, price: 5_000 },
  { numHit: 4, price: 50_000 },
  { numHit: 5, price: 500_000 },
  { numHit: 6, price: 2_000_000_000 },
] as const;

export const LOTTO_LIMIT = 45 as const;
