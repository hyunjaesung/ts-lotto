import { LottoNumber } from "./LottoNumber";
import { LottoResult } from "./LottoResult";
import { LottoTicket } from "./LottoTicket";

export class LottoResultCalculator {
  lottoTickets: LottoTicket[];
  winningNumbers: LottoNumber[];

  constructor({
    lottoTickets,
    winningNumbers,
  }: {
    lottoTickets: LottoTicket[];
    winningNumbers: LottoNumber[];
  }) {
    this.lottoTickets = lottoTickets;
    this.winningNumbers = winningNumbers;
  }

  calculateResult() {
    const result = new LottoResult();

    this.lottoTickets.forEach(ticket => {
      const matchCount = this.getMatchCount(ticket);
      result.setResult({ matchCount });
    });

    return result;
  }

  private getMatchCount(ticket: LottoTicket) {
    return ticket.lottoNumbers.filter(lottoNumber =>
      this.winningNumbers.some(
        winningNumber => winningNumber.number === lottoNumber.number
      )
    ).length;
  }
}
