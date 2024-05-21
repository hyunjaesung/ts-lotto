import LottoMatchingResult from "@/models/LottoMatchingResult";
import LottoNumbers from "@/models/LottoNumbers";

export default class LottoResultChecker {
  private _matchingResult: LottoMatchingResult;

  constructor(matchingResult: LottoMatchingResult) {
    this._matchingResult = matchingResult;
  }

  private checkEachLotto(lotto: LottoNumbers, winningLotto: LottoNumbers) {
    const numMatch = lotto.numbers.filter(number =>
      winningLotto.numbers.includes(number)
    ).length;
    if (numMatch >= 3) {
      this._matchingResult.setLottoMatchByNumHit(numMatch);
    }
  }

  public getRateOfReturn(priceLottery: number) {
    return this._matchingResult.getTotalReward() / priceLottery;
  }

  public checkLottoResults(lottos: LottoNumbers[], winningLotto: LottoNumbers) {
    this._matchingResult.initMatchingResult();
    lottos.forEach(lotto => this.checkEachLotto(lotto, winningLotto));
    return this._matchingResult;
  }
}
