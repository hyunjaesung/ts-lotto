import { LOTTO_PRICE } from "../constants";
import { PRIZE_MONEY, PRIZE_NAME } from "../enum";

export class LottoResult {
  private _result = {
    [PRIZE_NAME.FIRST]: 0,
    [PRIZE_NAME.SECOND]: 0,
    [PRIZE_NAME.THIRD]: 0,
    [PRIZE_NAME.FOURTH]: 0,
    [PRIZE_NAME.FAIL]: 0,
  };

  setResult({ matchCount }: { matchCount: number }) {
    switch (matchCount) {
      case 6:
        this._result[PRIZE_NAME.FIRST]++;
        break;
      case 5:
        this._result[PRIZE_NAME.SECOND]++;
        break;
      case 4:
        this._result[PRIZE_NAME.THIRD]++;
        break;
      case 3:
        this._result[PRIZE_NAME.FOURTH]++;
        break;
      default:
        this._result[PRIZE_NAME.FAIL]++;
        break;
    }
  }

  get result() {
    return this._result;
  }

  getRateOfReturn() {
    const totalPrizeMoney =
      this._result[PRIZE_NAME.FIRST] * PRIZE_MONEY.FIRST +
      this._result[PRIZE_NAME.SECOND] * PRIZE_MONEY.SECOND +
      this._result[PRIZE_NAME.THIRD] * PRIZE_MONEY.THIRD +
      this._result[PRIZE_NAME.FOURTH] * PRIZE_MONEY.FOURTH;

    const ticketCount = Object.values(this._result).reduce(
      (acc, cur) => acc + cur
    );

    return totalPrizeMoney / (LOTTO_PRICE * ticketCount);
  }
}
