import LottoNumbers from "@/models/LottoNumbers";
import LottoValidation from "@/services/LottoValidation";
import ViewValidation from "@/services/ViewValidation";

class WinningLottoInputView {
  private _lottoNumberInputs: HTMLInputElement[];
  private _lottoMatchCheckButton: HTMLButtonElement;

  constructor(
    lottoNumberInputs: HTMLInputElement[],
    lottoMatchCheckButton: HTMLButtonElement
  ) {
    ViewValidation.checkExistence(lottoNumberInputs, "lottoNumberInputs");
    ViewValidation.checkExistence(
      lottoMatchCheckButton,
      "lottoMatchCheckButton"
    );
    ViewValidation.checkLength(lottoNumberInputs, "lottoNumberInputs", 6);

    this._lottoNumberInputs = [...lottoNumberInputs];
    this._lottoMatchCheckButton = lottoMatchCheckButton;
  }

  private convertToLottoNumbers() {
    const winningLotto = this._lottoNumberInputs.map(input =>
      parseInt(input.value)
    );
    const lottoNumbers = new LottoNumbers();
    lottoNumbers.numbers = winningLotto;
    return lottoNumbers;
  }

  public addLottoCheckButtonClickEvent(
    callback: (lotto: LottoNumbers) => void
  ) {
    this._lottoMatchCheckButton.addEventListener("click", () => {
      try {
        const lottoNumbers = this.convertToLottoNumbers();
        if (LottoValidation.checkValidation(lottoNumbers)) {
          callback(lottoNumbers);
        }
      } catch (error) {
        alert((error as Error).message);
      }
    });
  }
}

export default WinningLottoInputView;
