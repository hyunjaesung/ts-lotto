import {
  BUTTON_PURCHASE,
  INPUT_PURCHASE,
  SECTION_LOTTO_NUMBERS,
} from "./constants/domSelector";
import { PRICE_PER_LOTTERY } from "./constants/priceLottery";
import LottoGeneratorController from "./controllers/LottoGeneratorController";
import LottoNumberGenerator from "./services/LottoNumberGenerator";
import LottoPurchase from "./services/LottoPurchase";
import LottoNumberListView from "./views/LottoNumberListView";
import PurchaseInputView from "./views/PurchaseInputView";

const domSelectorsForGenerator = () => {
  const inputPurchase = document.getElementById(
    INPUT_PURCHASE
  ) as HTMLInputElement;
  const buttonPurchase = document.getElementById(
    BUTTON_PURCHASE
  ) as HTMLButtonElement;
  const sectionLottoNumbers = document.getElementById(
    SECTION_LOTTO_NUMBERS
  ) as HTMLElement;
  return { inputPurchase, buttonPurchase, sectionLottoNumbers };
};

export const generateLottoNumbers = () => {
  const { inputPurchase, buttonPurchase, sectionLottoNumbers } =
    domSelectorsForGenerator();
  try {
    const purchaseInputView = new PurchaseInputView(
      inputPurchase,
      buttonPurchase
    );
    const lottoNumberListView = new LottoNumberListView(sectionLottoNumbers);
    const lottoPurchase = new LottoPurchase(PRICE_PER_LOTTERY);
    const lottoNumbersGenerator = new LottoNumberGenerator();
    new LottoGeneratorController({
      purchaseInputView,
      lottoPurchase,
      lottoNumbersGenerator,
      lottoNumberListView,
    });
  } catch (error) {
    console.error(error);
  }
};
