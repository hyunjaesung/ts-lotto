import { LottoNumber } from "./domain/LottoNumber";
import { LottoResultCalculator } from "./domain/LottoResultCalculator";
import { LottoTicket } from "./domain/LottoTicket";
import { LottoTicketGenerator } from "./generator/LottoTicketGenerator";

export class LottoGame {
  readonly lottoTickets: LottoTicket[];

  constructor({ totalPurchase }: { totalPurchase: number }) {
    this.lottoTickets = LottoTicketGenerator.generate(totalPurchase);
  }

  getLottoResult(winningNumbers: number[]) {
    // TODO 예외처리
    // 1. 중복된 숫자가 있는지
    // 2. 1~45 사이의 숫자인지
    // 3. 6개의 숫자인지

    const winningLottoNumbers = [...winningNumbers].map(
      number => new LottoNumber(number)
    );
    const lottoResultCalculator = new LottoResultCalculator({
      lottoTickets: this.lottoTickets,
      winningNumbers: winningLottoNumbers,
    });

    return lottoResultCalculator.calculateResult();
  }
}
