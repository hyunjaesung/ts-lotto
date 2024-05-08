import {
  BUTTON_CHECK_LOTTO,
  BUTTON_PURCHASE,
  INPUT_PURCHASE,
  SECTION_LOTTO_NUMBERS,
  SECTION_LOTTO_RESULT,
  SECTION_WINNING_LOTTO,
} from "./constants/domSelector";
import { PRICE_PER_LOTTERY } from "./constants/lottery";
import LottoGeneratorController from "./controllers/LottoController";
import LottoMatchingResult from "./models/LottoMatchingResult";
import LottoNumberGenerator from "./services/LottoNumberGenerator";
import LottoPurchase from "./services/LottoPurchase";
import LottoResultChecker from "./services/LottoResultChecker";
import LottoNumberListView from "./views/LottoNumberListView";
import LottoResultView from "./views/LottoResultView";
import PurchaseInputView from "./views/PurchaseInputView";
import WinningLottoInputView from "./views/WinningLottoInputView";

const domSelectors = () => {
  const inputPurchase = document.getElementById(
    INPUT_PURCHASE
  ) as HTMLInputElement;
  const buttonPurchase = document.getElementById(
    BUTTON_PURCHASE
  ) as HTMLButtonElement;
  const sectionLottoNumbers = document.getElementById(
    SECTION_LOTTO_NUMBERS
  ) as HTMLElement;
  const sectionWinningLotto = document.getElementById(
    SECTION_WINNING_LOTTO
  ) as HTMLElement;
  const inputsWinningLotto = Array.from(
    sectionWinningLotto.querySelectorAll("li input")
  ).map(el => el as HTMLInputElement);
  const buttonCheckLotto = document.getElementById(
    BUTTON_CHECK_LOTTO
  ) as HTMLButtonElement;
  const sectionLottoResult = document.getElementById(
    SECTION_LOTTO_RESULT
  ) as HTMLElement;
  return {
    inputPurchase,
    buttonPurchase,
    sectionLottoNumbers,
    inputsWinningLotto,
    buttonCheckLotto,
    sectionLottoResult,
  };
};

export const playLotto = () => {
  const {
    inputPurchase,
    buttonPurchase,
    sectionLottoNumbers,
    inputsWinningLotto,
    buttonCheckLotto,
    sectionLottoResult,
  } = domSelectors();
  try {
    const purchaseInputView = new PurchaseInputView(
      inputPurchase,
      buttonPurchase
    );
    const lottoNumberListView = new LottoNumberListView(sectionLottoNumbers);
    const lottoPurchase = new LottoPurchase(PRICE_PER_LOTTERY);
    const lottoNumbersGenerator = new LottoNumberGenerator();
    const winningLottoInputView = new WinningLottoInputView(
      inputsWinningLotto,
      buttonCheckLotto
    );
    const lottoResultView = new LottoResultView(sectionLottoResult);
    const lottoResultChecker = new LottoResultChecker(
      new LottoMatchingResult()
    );
    new LottoGeneratorController({
      purchaseInputView,
      lottoPurchase,
      lottoNumbersGenerator,
      lottoNumberListView,
      winningLottoInputView,
      lottoResultView,
      lottoResultChecker,
    });
  } catch (error) {
    console.error(error);
  }
};
