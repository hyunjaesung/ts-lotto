import { LOTTO_LIMIT } from "@/constants/lottery";
import LottoNumbers from "@/models/LottoNumbers";

export default class LottoValidation {
  static checkDuplication(lotto: LottoNumbers) {
    const uniqueSet = new Set(lotto.numbers);
    return uniqueSet.size !== lotto.numbers.length;
  }

  static checkFilled(lotto: LottoNumbers) {
    const isNanExist = lotto.numbers.reduce((a, b) => a + b, 0);
    return !isNaN(isNanExist);
  }

  static checkRange(lotto: LottoNumbers) {
    for (const num of lotto.numbers) {
      if (num < 1 || num > LOTTO_LIMIT) {
        return false;
      }
    }
    return true;
  }

  static checkValidation(lotto: LottoNumbers) {
    if (!this.checkFilled(lotto)) {
      alert("6개의 로또 번호를 전부 채워야합니다.");
      return false;
    }
    if (!this.checkRange(lotto)) {
      alert(`1과 ${45} 사이의 숫자만 가능합니다.`);
      return false;
    }
    if (this.checkDuplication(lotto)) {
      alert("로또에 같은 번호가 중복될 수 없습니다.");
      return false;
    }
    return true;
  }
}
