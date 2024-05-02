export class LottoNumberValidator {
  private static readonly ERROR_MESSAGES = {
    INVALID_SIZE: "로또 번호는 6개여야 합니다.",
    OUT_OF_RANGE: "로또 번호는 1~45 사이여야 합니다.",
    DUPLICATED: "로또 번호는 중복되지 않아야 합니다.",
  };

  static validate(numbers: number[]): void {
    this.validateSize(numbers);
    this.validateRange(numbers);
    this.validateDuplication(numbers);
  }

  private static validateSize(numbers: number[]): void {
    if (numbers.length !== 6) {
      throw new Error(LottoNumberValidator.ERROR_MESSAGES.INVALID_SIZE);
    }
  }

  private static validateRange(numbers: number[]): void {
    if (!numbers.every(number => number >= 1 && number <= 45)) {
      throw new Error(LottoNumberValidator.ERROR_MESSAGES.OUT_OF_RANGE);
    }
  }

  private static validateDuplication(numbers: number[]): void {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(LottoNumberValidator.ERROR_MESSAGES.DUPLICATED);
    }
  }
}
