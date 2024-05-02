import { LottoResult } from "@/business/domain/LottoResult";
import { PRIZE_MATCH_COUNT, PRIZE_MONEY, PRIZE_NAME } from "@/business/enum";

type ResultKey = keyof typeof PRIZE_NAME;
const resultTemplate = (results: Record<ResultKey, number>) => `
    <h2>당첨 통계</h2>
    <div>
        ${Object.entries(results)
          .map(([key, count]) => {
            if (key === PRIZE_NAME.FAIL) return `<p>낙첨 - ${count}개</p>`;
            return `<p>${PRIZE_MATCH_COUNT[key as ResultKey]}개 일치 (${PRIZE_MONEY[key as ResultKey]}원)- ${count}개</p>`;
          })
          .join("")}
    </div>
`;

const rateOfReturnTemplate = (rateOfReturn: number) => `
    <p>총 수익률은 ${rateOfReturn * 100}% 입니다.</p>
`;

export class LottoResultRenderer {
  private readonly el: HTMLDivElement;

  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLDivElement;
  }

  appendResult(lottoResult: LottoResult) {
    const result = lottoResult.results;
    this.el.innerHTML =
      resultTemplate(result) +
      rateOfReturnTemplate(lottoResult.getRateOfReturn());
  }
}
