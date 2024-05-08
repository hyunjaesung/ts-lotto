import LottoMatch from "@/models/LottoMatch";
import LottoMatchingResult from "@/models/LottoMatchingResult";

class LottoResultView {
  private _sectionElement: HTMLElement;

  constructor(secitonElement: HTMLElement) {
    if (!secitonElement) {
      throw new Error("section element가 존재하지 않습니다");
    }
    this._sectionElement = secitonElement;
  }

  private renderEachMatch(lottoMatch: LottoMatch) {
    const liElement = document.createElement("li");
    liElement.textContent = `${lottoMatch.numMatch}개 일치 (${lottoMatch.amountReward}원) - ${lottoMatch.numHit}개`;
    return liElement;
  }

  private renderMatchingResult(matchingResult: LottoMatchingResult) {
    const ulElement = document.createElement("ul");
    for (const matching of matchingResult.matchingResult) {
      ulElement.append(this.renderEachMatch(matching));
    }
    return ulElement;
  }

  private renderRateOfReturn(rate: number) {
    const divElement = document.createElement("div");
    divElement.textContent = `총 수익률은 ${rate}입니다.`;
    return divElement;
  }

  public render(matchingResult: LottoMatchingResult, rateOfReturn: number) {
    this._sectionElement.innerHTML = "";
    this._sectionElement.appendChild(this.renderMatchingResult(matchingResult));
    this._sectionElement.appendChild(this.renderRateOfReturn(rateOfReturn));
  }
}

export default LottoResultView;
