import { LOTTO_LIMIT } from "@/constants/lottery";
import LottoNumbersFactory from "@/factories/LottoNumbersFactory";
import LottoNumbers from "@/models/LottoNumbers";

export default class LottoNumberGenerator {
  private getRandomNumber(limit: number) {
    return Math.floor(Math.random() * limit) + 1;
  }

  private checkDuplication(lotto: LottoNumbers, newNumber: number) {
    return lotto.numbers.includes(newNumber);
  }

  private generateEachLotto(lotto: LottoNumbers) {
    while (lotto.numbers.length < 6) {
      const randomNumber = this.getRandomNumber(LOTTO_LIMIT);
      if (!this.checkDuplication(lotto, randomNumber)) {
        lotto.add(randomNumber);
      }
    }
  }

  public generate(numLottery: number): LottoNumbers[] {
    const lottos = LottoNumbersFactory.build(numLottery);
    for (let i = 0; i < numLottery; i++) {
      this.generateEachLotto(lottos[i]);
    }
    return lottos;
  }
}
