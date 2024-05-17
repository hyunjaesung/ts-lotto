import { LOTTERY_AWARD_NUM_HIT } from "@/constants/lottery";
import LottoMatch from "@/models/LottoMatch";

export default class LottoMatchesFactory {
  static build() {
    const matchingList = [];
    for (const [num_hit, award] of Object.entries(LOTTERY_AWARD_NUM_HIT)) {
      matchingList.push(new LottoMatch(parseInt(num_hit), award));
    }
    return matchingList;
  }
}
