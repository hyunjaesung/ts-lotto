export default class ViewValidation {
  static checkExistence(element: HTMLElement | HTMLElement[], name: string) {
    if (!element) {
      throw new Error(`${name}을 가진 element가 존재하지 않습니다`);
    }
  }

  static checkLength(elements: HTMLElement[], name: string, count: number) {
    if (elements.length !== count) {
      throw new Error(`${name} element는 ${count}개가 있어야 합니다.`);
    }
  }
}
