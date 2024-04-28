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
  static generate(): LottoNumber[] {
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

enum PRIZE_NAME {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
  FOURTH = "FOURTH",
  FAIL = "FAIL",
}

enum PRIZE_MONEY {
  FIRST = 2_000_000_000,
  SECOND = 1_500_000,
  THIRD = 50_000,
  FOURTH = 5_000,
  FAIL = 0,
}

class LottoResult {
  private _result = {
    [PRIZE_NAME.FIRST]: 0,
    [PRIZE_NAME.SECOND]: 0,
    [PRIZE_NAME.THIRD]: 0,
    [PRIZE_NAME.FOURTH]: 0,
    [PRIZE_NAME.FAIL]: 0,
  };

  setResult({ matchCount }: { matchCount: number }) {
    switch (matchCount) {
      case 6:
        this._result[PRIZE_NAME.FIRST]++;
        break;
      case 5:
        this._result[PRIZE_NAME.SECOND]++;
        break;
      case 4:
        this._result[PRIZE_NAME.THIRD]++;
        break;
      case 3:
        this._result[PRIZE_NAME.FOURTH]++;
        break;
      default:
        this._result[PRIZE_NAME.FAIL]++;
        break;
    }
  }

  get result() {
    return this._result;
  }

  getRateOfReturn() {
    const totalPrizeMoney =
      this._result[PRIZE_NAME.FIRST] * PRIZE_MONEY.FIRST +
      this._result[PRIZE_NAME.SECOND] * PRIZE_MONEY.SECOND +
      this._result[PRIZE_NAME.THIRD] * PRIZE_MONEY.THIRD +
      this._result[PRIZE_NAME.FOURTH] * PRIZE_MONEY.FOURTH;

    const ticketCount = Object.values(this._result).reduce(
      (acc, cur) => acc + cur
    );

    return totalPrizeMoney / (LOTTO_PRICE * ticketCount);
  }
}

class LottoResultCalculator {
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
    return ticket.lottoNumbers.filter(number =>
      this.winningNumbers.includes(number)
    ).length;
  }
}

class LottoGame {
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

const lottoGame = new LottoGame({ totalPurchase: 3_000 });

console.log(
  lottoGame.lottoTickets,
  lottoGame.getLottoResult([1, 2, 3, 4, 5, 6])
);
