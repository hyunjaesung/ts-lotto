import LottoMatchesFactory from "@/factories/LottoMatchesFactory";
import { LottoMatch } from "@/types/LottoMatch";

export default class LottoMatchingResult {
  private _matchingResult: LottoMatch[];

  constructor() {
    this._matchingResult = [];
    this.initMatchingResult();
  }

  get matchingResult() {
    return this._matchingResult;
  }

  public initMatchingResult() {
    this._matchingResult = LottoMatchesFactory.build();
  }

  public setLottoMatchByNumHit(numHit: number) {
    const matchResultIndex = this._matchingResult.findIndex(
      match => match.numHit === numHit
    );
    if (matchResultIndex === -1) {
      throw new Error(`${numHit}을 가진 numHit이 없습니다`);
    }
    this._matchingResult[matchResultIndex].numMatch++;
  }

  public getTotalReward() {
    const reward = this._matchingResult.reduce(
      (a, b) => a + b.price * b.numMatch,
      0
    );
    return reward;
  }
}
