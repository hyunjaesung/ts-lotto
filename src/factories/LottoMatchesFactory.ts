import { LOTTERY_AWARD } from "@/constants/lottery";
import { LottoMatch } from "@/types/LottoMatch";

export default class LottoMatchesFactory {
  static build() {
    const matchingList = [];
    for (const { numHit, price } of LOTTERY_AWARD) {
      matchingList.push({ numHit, price, numMatch: 0 } as LottoMatch);
    }
    return matchingList;
  }
}
