import { LOTTERY_AWARD } from "@/constants/lottery";
import LottoMatch from "@/models/LottoMatch";

export default class LottoMatchesFactory {
  static build() {
    const matchingList = [];
    for (const { hitCount, price } of LOTTERY_AWARD) {
      matchingList.push(new LottoMatch(hitCount, price));
    }
    return matchingList;
  }
}
