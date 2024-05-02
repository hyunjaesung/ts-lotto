import { LOTTO_PRICE } from "../constants";
import { PRIZE_MATCH_COUNT, PRIZE_MONEY, PRIZE_NAME } from "../enum";

export class LottoResult {
  readonly results = {
    [PRIZE_NAME.FIRST]: 0,
    [PRIZE_NAME.SECOND]: 0,
    [PRIZE_NAME.THIRD]: 0,
    [PRIZE_NAME.FOURTH]: 0,
    [PRIZE_NAME.FAIL]: 0,
  };

  setResult({ matchCount }: { matchCount: number }) {
    switch (matchCount) {
      case PRIZE_MATCH_COUNT.FIRST:
        this.results[PRIZE_NAME.FIRST]++;
        break;
      case PRIZE_MATCH_COUNT.SECOND:
        this.results[PRIZE_NAME.SECOND]++;
        break;
      case PRIZE_MATCH_COUNT.THIRD:
        this.results[PRIZE_NAME.THIRD]++;
        break;
      case PRIZE_MATCH_COUNT.FOURTH:
        this.results[PRIZE_NAME.FOURTH]++;
        break;
      default:
        this.results[PRIZE_NAME.FAIL]++;
        break;
    }
  }

  getRateOfReturn() {
    const totalPrizeMoney =
      this.results[PRIZE_NAME.FIRST] * PRIZE_MONEY.FIRST +
      this.results[PRIZE_NAME.SECOND] * PRIZE_MONEY.SECOND +
      this.results[PRIZE_NAME.THIRD] * PRIZE_MONEY.THIRD +
      this.results[PRIZE_NAME.FOURTH] * PRIZE_MONEY.FOURTH;

    const ticketCount = Object.values(this.results).reduce(
      (acc, cur) => acc + cur
    );

    return totalPrizeMoney / (LOTTO_PRICE * ticketCount);
  }
}
