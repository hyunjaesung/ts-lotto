export class Input {
  private readonly el: HTMLInputElement;
  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLInputElement;
    if (this.el === null) throw new Error(`${selector} input is not exist`);
  }

  get value() {
    return this.el.value;
  }

  clear() {
    this.el.value = "";
  }
}
