export default class LottoMatch {
  private readonly _numMatch: number;
  private _numHit: number;
  private readonly _amountReward: number;

  constructor(numMatch: number, amountReward: number) {
    this._numMatch = numMatch;
    this._numHit = 0;
    this._amountReward = amountReward;
  }

  get numMatch() {
    return this._numMatch;
  }

  get numHit() {
    return this._numHit;
  }

  get amountReward() {
    return this._amountReward;
  }

  set numHit(numHit: number) {
    this._numHit = numHit;
  }
}
