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

  public addLottoCheckButtonClickEvent(callback: (lotto: number[]) => void) {
    const winningLotto = this._inputElements.map(input =>
      parseInt(input.value)
    );
    this._buttonElement.addEventListener("click", () => {
      callback(winningLotto);
    });
  }
}

export default WinningLottoInputView;
