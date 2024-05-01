export class LottoNumber {
  readonly number: number;

  constructor(number: number) {
    if (number > 45 || number < 0)
      throw new Error("로또 번호는 0과 45 사이의 수여야 합니다");
    this.number = number;
  }
}
