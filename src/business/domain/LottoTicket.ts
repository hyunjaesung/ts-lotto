import { LottoNumberGenerator } from "../generator/LottoNumberGenerator";
import { LottoNumber } from "./LottoNumber";

export class LottoTicket {
  readonly lottoNumbers: LottoNumber[];

  constructor() {
    this.lottoNumbers = LottoNumberGenerator.generate();
  }

  get numbers() {
    return this.lottoNumbers.map(lottoNumber => lottoNumber.number);
  }
}
