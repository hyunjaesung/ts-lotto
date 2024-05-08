import { LOTTO_LIMIT } from "@/constants/lottery";
import LottoNumbers from "@/models/LottoNumbers";

class WinningLottoInputView {
  private _inputElements: HTMLInputElement[];
  private _buttonElement: HTMLButtonElement;

  constructor(
    inputElements: HTMLInputElement[],
    buttonElement: HTMLButtonElement
  ) {
    if (!inputElements) {
      throw new Error("input elements가 존재하지 않습니다.");
    }
    if (inputElements.length !== 6) {
      throw new Error("input element는 6개가 있어야 합니다.");
    }
    if (!buttonElement) {
      throw new Error("button elements가 존재하지 않습니다.");
    }

    this._inputElements = [...inputElements];
    this._buttonElement = buttonElement;
  }

  private checkFilled(lotto: LottoNumbers) {
    const isNanExist = lotto.numbers.reduce((a, b) => a + b, 0);
    return !isNaN(isNanExist);
  }

  private checkRange(lotto: LottoNumbers) {
    for (const num of lotto.numbers) {
      if (num < 1 || num > LOTTO_LIMIT) {
        return false;
      }
    }
    return true;
  }

  private checkDuplication(lotto: LottoNumbers) {
    const uniqueSet = new Set(lotto.numbers);
    return uniqueSet.size !== lotto.numbers.length;
  }

  private checkValidation(lotto: LottoNumbers) {
    if (!this.checkFilled(lotto)) {
      alert("6개의 로또 번호를 전부 채워야합니다.");
      return false;
    }
    if (!this.checkRange(lotto)) {
      alert(`1과 ${45} 사이의 숫자만 가능합니다.`);
      return false;
    }
    if (this.checkDuplication(lotto)) {
      alert("로또에 같은 번호가 중복될 수 없습니다.");
      return false;
    }
    return true;
  }

  private convertToLottoNumbers() {
    const winningLotto = this._inputElements.map(input =>
      parseInt(input.value)
    );
    const lottoNumbers = new LottoNumbers();
    lottoNumbers.numbers = winningLotto;
    return lottoNumbers;
  }

  public addLottoCheckButtonClickEvent(
    callback: (lotto: LottoNumbers) => void
  ) {
    this._buttonElement.addEventListener("click", () => {
      const lottoNumbers = this.convertToLottoNumbers();
      console.log(lottoNumbers);
      if (this.checkValidation(lottoNumbers)) {
        callback(lottoNumbers);
      }
    });
  }
}

export default WinningLottoInputView;
