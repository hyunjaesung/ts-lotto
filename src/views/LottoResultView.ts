class LottoResultView {
  private _sectionElement: HTMLElement;

  constructor(secitonElement: HTMLElement) {
    if (!secitonElement) {
      throw new Error("section element가 존재하지 않습니다");
    }
    this._sectionElement = secitonElement;
  }
}

export default LottoResultView;
