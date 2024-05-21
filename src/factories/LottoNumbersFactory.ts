import LottoNumbers from "@/models/LottoNumbers";

class LottoNumbersFactory {
  static build(numLottery: number) {
    return (
      Array(numLottery)
        .fill("")
        // eslint-disable-next-line
        .map(_ => new LottoNumbers())
    );
  }
}

export default LottoNumbersFactory;
