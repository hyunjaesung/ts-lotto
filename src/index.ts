const LOTTO_PRICE = 1_000;

const LOTTO_NUMBERS_LENGTH = 6;

const LOTTO_MAX_NUMBER = 45;

class LottoNumber {
  readonly number: number;

  constructor(number: number) {
    if (number > 45 || number < 0)
      throw new Error("로또 번호는 0과 45 사이의 수여야 합니다");
    this.number = number;
  }
}

const generateUnduplicatedNumbers = ({
  numbersLength,
  maxNumber,
}: {
  numbersLength: number;
  maxNumber: number;
}) => {
  const numbers: number[] = [];

  while (numbers.length < numbersLength) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (!numbers.includes(randomNumber)) {
      // NOTE: 번호는 중복되지 않는다
      numbers.push(randomNumber);
    }
  }

  return numbers;
};

class LottoNumberGenerator {
  static generate() {
    return generateUnduplicatedNumbers({
      numbersLength: LOTTO_NUMBERS_LENGTH,
      maxNumber: LOTTO_MAX_NUMBER,
    }).map(number => new LottoNumber(number));
  }
}

class LottoTicket {
  readonly lottoNumbers: LottoNumber[];

  constructor() {
    this.lottoNumbers = LottoNumberGenerator.generate();
  }
}

class LottoTicketGenerator {
  static generate(totalPurchase: number): LottoTicket[] {
    const ticketCount = totalPurchase / LOTTO_PRICE;
    return Array(ticketCount)
      .fill("")
      .map(() => new LottoTicket());
  }
}

class LottoGame {
  readonly lottoTickets: LottoTicket[];
  constructor({ totalPurchase }: { totalPurchase: number }) {
    this.lottoTickets = LottoTicketGenerator.generate(totalPurchase);
  }
}

const lottoGame = new LottoGame({ totalPurchase: 3_000 });

console.log(lottoGame.lottoTickets);
