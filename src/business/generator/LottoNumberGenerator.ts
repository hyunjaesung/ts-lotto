import { LOTTO_MAX_NUMBER, LOTTO_NUMBERS_LENGTH } from "../constants";
import { LottoNumber } from "../domain/LottoNumber";
import { generateUnduplicatedNumbers } from "../utils/generateUnduplicatedNumbers";

export class LottoNumberGenerator {
  static generate(): LottoNumber[] {
    return generateUnduplicatedNumbers({
      numbersLength: LOTTO_NUMBERS_LENGTH,
      maxNumber: LOTTO_MAX_NUMBER,
    }).map(number => new LottoNumber(number));
  }
}
