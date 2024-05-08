import LottoNumberGenerator from "@/services/LottoNumberGenerator";
import LottoPurchase from "@/services/LottoPurchase";
import LottoNumberListView from "@/views/LottoNumberListView";
import PurchaseInputView from "@/views/PurchaseInputView";

interface LottoGeneratorControllerProps {
  purchaseInputView: PurchaseInputView;
  lottoPurchase: LottoPurchase;
  lottoNumbersGenerator: LottoNumberGenerator;
  lottoNumberListView: LottoNumberListView;
}

export default class LottoGeneratorController {
  private _purchaseInputView: PurchaseInputView | undefined;
  private _lottoPurchase: LottoPurchase;
  private _lottoNumbersGenerator: LottoNumberGenerator;
  private _lottoNumberListView: LottoNumberListView | undefined;

  constructor({
    purchaseInputView,
    lottoPurchase,
    lottoNumbersGenerator,
    lottoNumberListView,
  }: LottoGeneratorControllerProps) {
    console.log("hello");
    this._purchaseInputView = purchaseInputView;
    this._lottoPurchase = lottoPurchase;
    this._lottoNumbersGenerator = lottoNumbersGenerator;
    this._lottoNumberListView = lottoNumberListView;
    this.addEventListner();
  }

  private addEventListner() {
    if (this._purchaseInputView) {
      this._purchaseInputView.addPurchaseButtonClickEvent(
        this.generateLottoAndRender.bind(this)
      );
    }
  }

  private generateLottoAndRender(price: number) {
    const numLottery = this._lottoPurchase.getNumLottery(price);
    const lottoResult = this._lottoNumbersGenerator.generate(numLottery);
    if (this._lottoNumberListView) {
      this._lottoNumberListView.render(numLottery, lottoResult);
    }
  }
}
