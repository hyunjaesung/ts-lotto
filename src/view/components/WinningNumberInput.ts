import { Input } from "@/view/components/common/Input";
import { Button } from "@/view/components/common/Button";

export class WinningNumberInput {
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

  init({ onConfirm }: { onConfirm: (value: number[]) => void }) {
    this.confirmButton.addClickEventListener(() =>
      onConfirm(this.input.values)
    );
  }
}
