import { LottoGame } from "./business/LottoGame";
import { LottoView } from "./view/LottoView";
import { LottoTicketList } from "./view/components/LottoTicketList";
import { Button } from "./view/components/common/Button";
import { Input } from "./view/components/common/Input";
import { PurchaseMoneyInput } from "./view/components/common/PurchaseMoneyInput";
import { LottoViewSelector } from "./view/constant/selectors";
import { WinningNumberInput } from "@/view/components/common/WinningNumberInput";
import { LottoTicket } from "@/business/domain/LottoTicket";

type Props = {
  selectors: LottoViewSelector;
};

export class Application {
  private readonly lottoView: LottoView;
  private readonly lottoGame: LottoGame;
  private lottoTickets: LottoTicket[] = [];

  constructor({ selectors }: Props) {
    this.lottoGame = new LottoGame();
    this.lottoView = new LottoView({
      purchaseMoney: new PurchaseMoneyInput({
        input: new Input(selectors.PURCHASE_MONEY_INPUT),
        confirmButton: new Button(selectors.PURCHASE_MONEY_BUTTON),
      }),
      winningLottoNumbers: new WinningNumberInput({
        input: new Input(selectors.WINNING_LOTTO_NUMBER_INPUT),
        confirmButton: new Button(selectors.WINNING_LOTTO_NUMBER_BUTTON),
      }),
      lottoTicketList: new LottoTicketList(selectors.LOTTO_TICKET_LIST),
    });
  }

  init() {
    this.lottoView.purchaseMoney.init({
      onConfirm: purchaseMoney => {
        try {
          const tickets = this.lottoGame.buyTickets({ purchaseMoney });
          this.lottoTickets = tickets;
          this.lottoView.renderTickets(tickets);
        } catch (e) {
          alert(e);
        }
      },
    });

    this.lottoView.winningLottoNumbers.init({
      onConfirm: winningNumbers => {
        try {
          const result = this.lottoGame.getLottoResult({
            winningNumbers,
            lottoTickets: this.lottoTickets,
          });
          console.log(result);
        } catch (e) {
          alert(e);
        }
      },
    });
  }
}
