import LottoNumbers from "@/models/LottoNumbers";
import LottoNumberGenerator from "./LottoNumberGenerator";
import LottoPurchase from "./LottoPurchase";
import LottoResultChecker from "./LottoResultChecker";

interface LottoProps {
  lottoPurchase: LottoPurchase;
  lottoNumbersGenerator: LottoNumberGenerator;
  lottoResultChecker: LottoResultChecker;
}

export default class Lotto {
  private _lottoPurchase: LottoPurchase;
  private _lottoNumbersGenerator: LottoNumberGenerator;
  private _lottoResultChecker: LottoResultChecker;

  private _lottoPrediction?: LottoNumbers[];
  private _priceLottery?: number;

  constructor({
    lottoPurchase,
    lottoNumbersGenerator,
    lottoResultChecker,
  }: LottoProps) {
    this._lottoPurchase = lottoPurchase;
    this._lottoNumbersGenerator = lottoNumbersGenerator;
    this._lottoResultChecker = lottoResultChecker;
  }

  public getNumLottery(price: number) {
    const numLottery = this._lottoPurchase.getNumLottery(price);
    return numLottery;
  }

  public generateLotto(price: number) {
    const numLottery = this._lottoPurchase.getNumLottery(price);
    this._priceLottery = price;
    this._lottoPrediction = this._lottoNumbersGenerator.generate(numLottery);
    return this._lottoPrediction;
  }

  public getMatchingResult(winningLotto: LottoNumbers) {
    if (!this._lottoPrediction) {
      throw new Error("로또 번호가 없습니다.");
    }
    const matchingResult = this._lottoResultChecker.checkLottoResults(
      this._lottoPrediction,
      winningLotto
    );

    return matchingResult;
  }

  public getRateOfReturn() {
    if (!this._priceLottery) {
      throw new Error("로또 구입 금액이 없습니다.");
    }
    const rateOfReturn = this._lottoResultChecker.getRateOfReturn(
      this._priceLottery
    );
    return rateOfReturn;
  }
}
