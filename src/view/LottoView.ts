import { LottoTicket } from "@/business/domain/LottoTicket";
import { LottoTicketListRenderer } from "./components/LottoTicketListRenderer";
import { PurchaseMoneyInput } from "./components/PurchaseMoneyInput";
import { WinningNumberInput } from "@/view/components/WinningNumberInput";
import { LottoResult } from "@/business/domain/LottoResult";
import { LottoResultRenderer } from "@/view/components/LottoResultRenderer";

type Props = {
  purchaseMoney: PurchaseMoneyInput;
  winningLottoNumbers: WinningNumberInput;
  lottoTicketListRenderer: LottoTicketListRenderer;
  lottoResultRenderer: LottoResultRenderer;
};

export class LottoView {
  readonly purchaseMoney: PurchaseMoneyInput;
  readonly winningLottoNumbers: WinningNumberInput;
  readonly lottoTicketListRenderer: LottoTicketListRenderer;
  readonly lottoResultRenderer: LottoResultRenderer;

  constructor({
    purchaseMoney,
    winningLottoNumbers,
    lottoTicketListRenderer,
    lottoResultRenderer,
  }: Props) {
    this.purchaseMoney = purchaseMoney;
    this.winningLottoNumbers = winningLottoNumbers;
    this.lottoTicketListRenderer = lottoTicketListRenderer;
    this.lottoResultRenderer = lottoResultRenderer;
  }

  renderTickets(tickets: LottoTicket[]) {
    this.lottoTicketListRenderer.appendTickets(tickets);
  }

  renderResult(result: LottoResult) {
    this.lottoResultRenderer.appendResult(result);
  }
}
