import { LOTTO_PRICE } from "../constants";
import { LottoTicket } from "../domain/LottoTicket";

export class LottoTicketGenerator {
  static generate(totalPurchase: number): LottoTicket[] {
    if (totalPurchase % LOTTO_PRICE !== 0)
      throw new Error("로또 구매 금액은 1000원 단위여야 합니다.");

    const ticketCount = totalPurchase / LOTTO_PRICE;
    return Array(ticketCount)
      .fill("")
      .map(() => new LottoTicket());
  }
}
