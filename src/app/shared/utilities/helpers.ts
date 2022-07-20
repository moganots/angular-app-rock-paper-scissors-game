export class Helpers {
  public static AddIf(item: any, array: any[]): void {
    if (item) {
      array?.push(item);
    }
  }
  public static hasItems(array: any[]): boolean {
    return array && array.length !== 0;
  }
  public static getLastItem(array: any[]): any {
    return this.hasItems(array) ? array[array.length - 1] : null;
  }
}
