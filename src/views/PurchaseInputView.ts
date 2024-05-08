export default class PurchaseInputView {
  private _inputElement: HTMLInputElement;
  private _buttonElement: HTMLButtonElement;

  constructor(
    inputElement: HTMLInputElement,
    buttonElement: HTMLButtonElement
  ) {
    if (!inputElement) {
      throw new Error("input element가 존재하지 않습니다.");
    }
    if (!buttonElement) {
      throw new Error("button element가 존재하지 않습니다.");
    }

    this._inputElement = inputElement;
    this._buttonElement = buttonElement;
  }

  public addPurchaseButtonClickEvent(callback: (value: number) => void) {
    this._buttonElement.addEventListener("click", () => {
      callback(parseInt(this._inputElement.value));
      this._inputElement.value = "";
    });
  }
}
