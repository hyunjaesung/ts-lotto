import LottoNumbers from "@/models/LottoNumbers";

export default class LottoNumberListView {
  private _sectionElement: HTMLElement;

  constructor(sectionElement: HTMLElement) {
    if (!sectionElement) {
      throw new Error("section element가 존재하지 않습니다.");
    }
    this._sectionElement = sectionElement;
  }

  private renderPurchase(numLottery: number) {
    const divElement = document.createElement("div");
    divElement.textContent = `${numLottery}개를 구매했습니다.`;
    return divElement;
  }

  private renderEachLotto(lotto: LottoNumbers) {
    const liElement = document.createElement("li");
    liElement.textContent = lotto.numbers.join(" ");
    return liElement;
  }

  private renderLottos(lottos: LottoNumbers[]) {
    const ulElement = document.createElement("ul");
    for (const lotto of lottos) {
      ulElement.appendChild(this.renderEachLotto(lotto));
    }
    return ulElement;
  }

  public render(numLottery: number, lottos: LottoNumbers[]) {
    this._sectionElement.innerHTML = "";
    this._sectionElement.appendChild(this.renderPurchase(numLottery));
    this._sectionElement.appendChild(this.renderLottos(lottos));
  }
}
