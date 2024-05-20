import LottoMatchesFactory from "@/factories/LottoMatchesFactory";
import { LottoMatch } from "@/types/LottoMatch";

export default class LottoMatchingResult {
  private _matchingResult: LottoMatch[];

  constructor() {
    this._matchingResult = LottoMatchesFactory.build();
  }

  get matchingResult() {
    return this._matchingResult;
  }

  public reset() {
    this._matchingResult = LottoMatchesFactory.build();
  }

  public setLottoMatch(numHit: number) {
    const matchResultIndex = this._matchingResult.findIndex(
      match => match.numHit === numHit
    );
    if (matchResultIndex !== -1) {
      this._matchingResult[matchResultIndex].numMatch++;
    }
  }

  public getTotalReward() {
    const reward = this._matchingResult.reduce(
      (a, b) => a + b.price * b.numMatch,
      0
    );
    return reward;
  }
}
