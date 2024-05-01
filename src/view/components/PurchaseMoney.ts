import { Button } from "./common/Button";
import { Input } from "./common/Input";

export class PurchaseMoney {
  private readonly input: Input;
  private readonly confirmButton: Button;
  readonly money: number | null;

  constructor({
    input,
    confirmButton,
  }: {
    input: Input;
    confirmButton: Button;
  }) {
    this.input = input;
    this.confirmButton = confirmButton;
    this.money = null;
  }
}
