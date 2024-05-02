import { LottoTicket } from "@/business/domain/LottoTicket";

export class LottoTicketsValidator {
  private static readonly ERROR_MESSAGES = {
    NOT_EXIST: "티켓이 존재하지 않습니다",
  };

  static validate(tickets: LottoTicket[]): void {
    this.validateExist(tickets);
  }

  private static validateExist(tickets: LottoTicket[]): void {
    if (tickets.length === 0) {
      throw new Error(LottoTicketsValidator.ERROR_MESSAGES.NOT_EXIST);
    }
  }
}
