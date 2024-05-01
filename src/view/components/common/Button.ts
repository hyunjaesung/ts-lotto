export class Button {
  el: HTMLButtonElement;
  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLButtonElement;
  }

  addClickEventListener(callback: (param: unknown) => void) {
    this.el.addEventListener("click", callback);
  }
}
