import LottoNumbers from "@/models/LottoNumbers";
import LottoNumberGenerator from "@/services/LottoNumberGenerator";
import LottoPurchase from "@/services/LottoPurchase";
import LottoResultChecker from "@/services/LottoResultChecker";
import LottoNumberListView from "@/views/LottoNumberListView";
import LottoResultView from "@/views/LottoResultView";
import PurchaseInputView from "@/views/PurchaseInputView";
import WinningLottoInputView from "@/views/WinningLottoInputView";

interface LottoControllerProps {
  purchaseInputView: PurchaseInputView;
  lottoPurchase: LottoPurchase;
  lottoNumbersGenerator: LottoNumberGenerator;
  lottoNumberListView: LottoNumberListView;
  winningLottoInputView: WinningLottoInputView;
  lottoResultView: LottoResultView;
  lottoResultChecker: LottoResultChecker;
}

export default class LottoController {
  private _purchaseInputView: PurchaseInputView | undefined;
  private _lottoPurchase: LottoPurchase;
  private _lottoNumbersGenerator: LottoNumberGenerator;
  private _lottoNumberListView: LottoNumberListView | undefined;
  private _winningLottoInputView: WinningLottoInputView | undefined;
  private _lottoResultView: LottoResultView | undefined;
  private _lottoResultChecker: LottoResultChecker;

  private _lottoPrediction: LottoNumbers[] | undefined;
  private _priceLottery: number | undefined;

  constructor({
    purchaseInputView,
    lottoPurchase,
    lottoNumbersGenerator,
    lottoNumberListView,
    winningLottoInputView,
    lottoResultView,
    lottoResultChecker,
  }: LottoControllerProps) {
    this._purchaseInputView = purchaseInputView;
    this._lottoPurchase = lottoPurchase;
    this._lottoNumbersGenerator = lottoNumbersGenerator;
    this._lottoNumberListView = lottoNumberListView;
    this._winningLottoInputView = winningLottoInputView;
    this._lottoResultView = lottoResultView;
    this._lottoResultChecker = lottoResultChecker;
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
    const numLottery = this._lottoPurchase.getNumLottery(price);
    this._priceLottery = price;
    this._lottoPrediction = this._lottoNumbersGenerator.generate(numLottery);
    if (this._lottoNumberListView) {
      this._lottoNumberListView.render(numLottery, this._lottoPrediction);
    }
  }

  private checkWinningLottoAndRender(winningLotto: LottoNumbers) {
    if (!this._lottoPrediction) {
      throw new Error("로또 번호가 없습니다.");
    }
    if (!this._priceLottery) {
      throw new Error("로또 구입 금액이 없습니다.");
    }
    const matchingResult = this._lottoResultChecker.checkLottoResults(
      this._lottoPrediction,
      winningLotto
    );
    const rateOfReturn = this._lottoResultChecker.getRateOfReturn(
      this._priceLottery
    );
    if (this._lottoResultView) {
      this._lottoResultView.render(matchingResult, rateOfReturn);
    }
  }
}
