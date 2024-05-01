import { PurchaseMoney } from "./components/PurchaseMoney";
import { WinningLottoNumbers } from "./components/WinningLottoNumbers";
import { LottoTicket } from "@/business/domain/LottoTicket";
import { LottoTicketList } from "./components/LottoTicketList";

type Props = {
  purchaseMoney: PurchaseMoney;
  winningLottoNumbers: WinningLottoNumbers;
  lottoTicketList: LottoTicketList;
};

export class LottoView {
  readonly purchaseMoney: PurchaseMoney;
  readonly winningLottoNumbers: WinningLottoNumbers;
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
