import { LottoNumber } from "./domain/LottoNumber";
import { LottoResultCalculator } from "./domain/LottoResultCalculator";
import { LottoTicket } from "./domain/LottoTicket";
import { LottoTicketGenerator } from "./generator/LottoTicketGenerator";

export class LottoGame {
  buyTickets({ purchaseMoney }: { purchaseMoney: number }) {
    return LottoTicketGenerator.generate(purchaseMoney);
  }

  getLottoResult({
    winningNumbers,
    lottoTickets,
  }: {
    winningNumbers: number[];
    lottoTickets: LottoTicket[];
  }) {
    // TODO 예외처리
    // 1. 중복된 숫자가 있는지
    // 2. 1~45 사이의 숫자인지
    // 3. 6개의 숫자인지

    const winningLottoNumbers = [...winningNumbers].map(
      number => new LottoNumber(number)
    );
    const lottoResultCalculator = new LottoResultCalculator({
      lottoTickets,
      winningNumbers: winningLottoNumbers,
    });

    return lottoResultCalculator.calculateResult();
  }
}
