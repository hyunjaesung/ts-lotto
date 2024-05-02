import { LottoTicket } from "@/business/domain/LottoTicket";
import { LottoTicketList } from "./components/LottoTicketList";
import { PurchaseMoneyInput } from "./components/common/PurchaseMoneyInput";
import { WinningNumberInput } from "@/view/components/common/WinningNumberInput";

type Props = {
  purchaseMoney: PurchaseMoneyInput;
  winningLottoNumbers: WinningNumberInput;
  lottoTicketList: LottoTicketList;
};

export class LottoView {
  readonly purchaseMoney: PurchaseMoneyInput;
  readonly winningLottoNumbers: WinningNumberInput;
  readonly lottoTicketList: LottoTicketList;

  constructor({ purchaseMoney, winningLottoNumbers, lottoTicketList }: Props) {
    this.purchaseMoney = purchaseMoney;
    this.winningLottoNumbers = winningLottoNumbers;
    this.lottoTicketList = lottoTicketList;
  }

  renderTickets(tickets: LottoTicket[]) {
    this.lottoTicketList.appendTickets(tickets);
  }
}
