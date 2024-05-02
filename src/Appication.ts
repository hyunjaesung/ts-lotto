import { LottoGame } from "./business/LottoGame";
import { LottoView } from "./view/LottoView";
import { LottoTicketListRenderer } from "./view/components/LottoTicketListRenderer";
import { Button } from "./view/components/common/Button";
import { Input } from "./view/components/common/Input";
import { PurchaseMoneyInput } from "./view/components/PurchaseMoneyInput";
import { LottoViewSelector } from "./view/constant/selectors";
import { WinningNumberInput } from "@/view/components/WinningNumberInput";
import { LottoTicket } from "@/business/domain/LottoTicket";
import { LottoResultRenderer } from "@/view/components/LottoResultRenderer";

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
      lottoTicketListRenderer: new LottoTicketListRenderer(
        selectors.LOTTO_TICKET_LIST
      ),
      lottoResultRenderer: new LottoResultRenderer(selectors.LOTTO_RESULT),
    });
  }

  init() {
    this.lottoView.purchaseMoney.init({
      onConfirm: purchaseMoney => {
        try {
          const tickets = this.lottoGame.buyTickets({ purchaseMoney });
          this.lottoTickets = tickets;
          this.lottoView.renderTickets(tickets);
          this.lottoView.purchaseMoney.clear();
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
          this.lottoView.renderResult(result);
        } catch (e) {
          alert(e);
        }
      },
    });
  }
}
