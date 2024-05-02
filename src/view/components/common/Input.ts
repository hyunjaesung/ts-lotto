export class Input {
  private readonly els: HTMLInputElement[];
  constructor(selector: string) {
    this.els = Array.from(
      document.querySelectorAll(selector)
    ) as HTMLInputElement[];
  }

  get value() {
    return +this.els[0].value;
  }

  get values() {
    return this.els.map(el => +el.value);
  }

  clear() {
    this.els.forEach(el => (el.value = ""));
  }
}
