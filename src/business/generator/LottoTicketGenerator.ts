import { LOTTO_PRICE } from "../constants";
import { LottoTicket } from "../domain/LottoTicket";

export class LottoTicketGenerator {
  static generate(totalPurchase: number): LottoTicket[] {
    const ticketCount = totalPurchase / LOTTO_PRICE;
    return Array(ticketCount)
      .fill("")
      .map(() => new LottoTicket());
  }
}
