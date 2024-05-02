import { LottoNumber } from "./domain/LottoNumber";
import { LottoResultCalculator } from "./domain/LottoResultCalculator";
import { LottoTicket } from "./domain/LottoTicket";
import { LottoTicketGenerator } from "./generator/LottoTicketGenerator";
import { LottoNumberValidator } from "@/business/validator/LottoNumberValidator";
import { LottoTicketsValidator } from "@/business/validator/LottoTicketsValidator";

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
    LottoTicketsValidator.validate(lottoTickets);
    LottoNumberValidator.validate(winningNumbers);

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
