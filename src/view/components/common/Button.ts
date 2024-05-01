export class Button {
  el: HTMLButtonElement;
  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLButtonElement;
    if (this.el === null) throw new Error(`${selector} button is not exist`);
  }

  addClickEventListener(callback: (param: unknown) => void) {
    this.el.addEventListener("click", callback);
  }
}
