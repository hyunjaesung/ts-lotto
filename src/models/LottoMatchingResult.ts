import LottoMatchesFactory from "@/factories/LottoMatchesFactory";
import LottoMatch from "./LottoMatch";

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

  public setLottoMatch(numMatch: number) {
    const matchResultIndex = this._matchingResult.findIndex(
      match => match.numMatch === numMatch
    );
    if (matchResultIndex !== -1) {
      this._matchingResult[matchResultIndex].numHit++;
    }
  }

  public getTotalReward() {
    const reward = this._matchingResult.reduce(
      (a, b) => a + b.amountReward * b.numHit,
      0
    );
    return reward;
  }
}
