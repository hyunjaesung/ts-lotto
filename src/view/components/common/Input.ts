export class Input {
  private readonly el: HTMLInputElement;
  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLInputElement;
  }

  get value() {
    return this.el.value;
  }

  clear() {
    this.el.value = "";
  }
}
