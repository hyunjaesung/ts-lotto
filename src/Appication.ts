import { LottoGame } from "./business/LottoGame";
import { LottoView } from "./view/LottoView";
import { LottoTicketList } from "./view/components/LottoTicketList";
import { PurchaseMoney } from "./view/components/PurchaseMoney";
import { WinningLottoNumbers } from "./view/components/WinningLottoNumbers";
import { Button } from "./view/components/common/Button";
import { Input } from "./view/components/common/Input";
import { LottoViewSelector } from "./view/constant/selectors";

type Props = {
  selectors: LottoViewSelector;
};

export class Application {
  readonly lottoView: LottoView;
  readonly lottoGame: LottoGame;

  constructor({ selectors }: Props) {
    this.lottoGame = new LottoGame();
    this.lottoView = new LottoView({
      purchaseMoney: new PurchaseMoney({
        input: new Input(selectors.PURCHASE_MONEY_INPUT),
        confirmButton: new Button(selectors.PURCHASE_MONEY_BUTTON),
      }),
      winningLottoNumbers: new WinningLottoNumbers({
        input: new Input(selectors.WINNING_LOTTO_NUMBER_INPUT),
        confirmButton: new Button(selectors.WINNING_LOTTO_NUMBER_BUTTON),
      }),
      lottoTicketList: new LottoTicketList(selectors.LOTTO_TICKET_LIST),
    });
  }

  init() {
    this.lottoView.purchaseMoney.init({
      onConfirm: purchaseMoney => {
        const tickets = this.lottoGame.buyTickets({ purchaseMoney });
        this.lottoView.renderTickets(tickets);
      },
    });
  }
}
