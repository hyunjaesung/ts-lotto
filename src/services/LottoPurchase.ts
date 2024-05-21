export default class LottoPurchase {
  private _pricePerLottery: number;

  constructor(pricePerLottery: number) {
    this._pricePerLottery = pricePerLottery;
  }

  public getNumLottery(purchasePrice: number) {
    return Math.floor(purchasePrice / this._pricePerLottery);
  }
}
