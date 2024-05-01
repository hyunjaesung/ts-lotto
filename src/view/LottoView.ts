import { PurchaseMoney } from "./components/PurchaseMoney";
import { WinningLottoNumbers } from "./components/WinningLottoNumbers";
import { Button } from "./components/common/Button";
import { Input } from "./components/common/Input";
import { LottoViewSelector } from "./constant/selectors";

export class LottoView {
  private readonly purchaseMoney: PurchaseMoney;
  private readonly winningLottoNumbers: WinningLottoNumbers;

  constructor(selectors: LottoViewSelector) {
    this.purchaseMoney = new PurchaseMoney({
      input: new Input(selectors.PURCHASE_MONEY_INPUT),
      confirmButton: new Button(selectors.PURCHASE_MONEY_BUTTON),
    });
    this.winningLottoNumbers = new WinningLottoNumbers({
      input: new Input(selectors.WINNING_LOTTO_NUMBER_INPUT),
      confirmButton: new Button(selectors.WINNING_LOTTO_NUMBER_BUTTON),
    });
  }
}
