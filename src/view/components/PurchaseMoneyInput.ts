import { Button } from "./common/Button";
import { Input } from "./common/Input";

export class PurchaseMoneyInput {
  private readonly input: Input;
  private readonly confirmButton: Button;

  constructor({
    input,
    confirmButton,
  }: {
    input: Input;
    confirmButton: Button;
  }) {
    this.input = input;
    this.confirmButton = confirmButton;
  }

  init({ onConfirm }: { onConfirm: (value: number) => void }) {
    this.confirmButton.addClickEventListener(() => onConfirm(this.input.value));
  }

  clear() {
    this.input.clear();
  }
}
