class LottoNumbers {
  private _numbers: number[];

  constructor() {
    this._numbers = [];
  }

  get numbers() {
    return this._numbers;
  }

  public add(num: number) {
    if (this._numbers.length >= 6) {
      throw new Error("로또는 6개의 숫자가 있어야 합니다.");
    }
    this._numbers.push(num);
  }
}

export default LottoNumbers;
