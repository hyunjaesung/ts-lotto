import { LOTTERY_AWARD } from "@/constants/priceLottery";
import LottoMatch from "@/models/LottoMatch";

export default class LottoMatchesFactory {
  static build() {
    const matchingList = [];
    for (let i = 0; i < LOTTERY_AWARD.length; i++) {
      matchingList.push(new LottoMatch(i + 3, LOTTERY_AWARD[i]));
    }
    return matchingList;
  }
}
