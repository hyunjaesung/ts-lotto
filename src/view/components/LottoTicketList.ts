import { LottoTicket } from "@/business/domain/LottoTicket";

const lottoTicketTemplate = (numbers: number[]) => `
    <li>${numbers.join(", ")}</li>
`;

export class LottoTicketList {
  private readonly el: HTMLUListElement;

  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLUListElement;
  }

  appendTickets(tickets: LottoTicket[]) {
    this.el.innerHTML = tickets
      .map(ticket => ticket.numbers)
      .map(numbers => lottoTicketTemplate(numbers))
      .join(" ");
  }
}
