import LottoNumbers from "@/models/LottoNumbers";
import Lotto from "@/services/Lotto";
import LottoNumberListView from "@/views/LottoNumberListView";
import LottoResultView from "@/views/LottoResultView";
import PurchaseInputView from "@/views/PurchaseInputView";
import WinningLottoInputView from "@/views/WinningLottoInputView";

interface LottoControllerProps {
  purchaseInputView: PurchaseInputView;
  lottoNumberListView: LottoNumberListView;
  winningLottoInputView: WinningLottoInputView;
  lottoResultView: LottoResultView;
  lotto: Lotto;
}

export default class LottoController {
  private _purchaseInputView?: PurchaseInputView;
  private _lottoNumberListView?: LottoNumberListView;
  private _winningLottoInputView?: WinningLottoInputView;
  private _lottoResultView?: LottoResultView;
  private _lotto: Lotto;

  constructor({
    purchaseInputView,
    lottoNumberListView,
    winningLottoInputView,
    lottoResultView,
    lotto,
  }: LottoControllerProps) {
    this._purchaseInputView = purchaseInputView;
    this._lottoNumberListView = lottoNumberListView;
    this._winningLottoInputView = winningLottoInputView;
    this._lottoResultView = lottoResultView;
    this._lotto = lotto;
    this.addEventListner();
  }

  private addEventListner() {
    if (this._purchaseInputView) {
      this._purchaseInputView.addPurchaseButtonClickEvent(
        this.generateLottoAndRender.bind(this)
      );
    }
    if (this._winningLottoInputView) {
      this._winningLottoInputView.addLottoCheckButtonClickEvent(
        this.checkWinningLottoAndRender.bind(this)
      );
    }
  }

  private generateLottoAndRender(price: number) {
    if (this._lottoNumberListView) {
      this._lottoNumberListView.render(
        this._lotto.getNumLottery(price),
        this._lotto.generateLotto(price)
      );
    }
  }

  private checkWinningLottoAndRender(winningLotto: LottoNumbers) {
    if (this._lottoResultView) {
      this._lottoResultView.render(
        this._lotto.getMatchingResult(winningLotto),
        this._lotto.getRateOfReturn()
      );
    }
  }
}
