import { LottoView } from "./view/LottoView";
import { LottoViewSelector } from "./view/constant/selectors";

type Props = {
  selectors: LottoViewSelector;
};

export class Application {
  private readonly lottoView: LottoView;

  constructor({ selectors }: Props) {
    this.lottoView = new LottoView(selectors);
  }
}
