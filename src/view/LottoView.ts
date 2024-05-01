import { LottoTicket } from "@/business/domain/LottoTicket";
import { LottoTicketList } from "./components/LottoTicketList";
import { InputWithSubmit } from "./components/common/InputWithSubmit";

type Props = {
  purchaseMoney: InputWithSubmit;
  winningLottoNumbers: InputWithSubmit;
  lottoTicketList: LottoTicketList;
};

export class LottoView {
  readonly purchaseMoney: InputWithSubmit;
  readonly winningLottoNumbers: InputWithSubmit;
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
