import { LottoNumberGenerator } from "../generator/LottoNumberGenerator";
import { LottoNumber } from "./LottoNumber";

export class LottoTicket {
  readonly lottoNumbers: LottoNumber[];

  constructor() {
    this.lottoNumbers = LottoNumberGenerator.generate();
  }
}
