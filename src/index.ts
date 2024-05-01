import { Application } from "./Appication";
import { LOTTO_VIEW_SELECTOR } from "./view/constant/selectors";

const app = new Application({ selectors: LOTTO_VIEW_SELECTOR });

app.init();
