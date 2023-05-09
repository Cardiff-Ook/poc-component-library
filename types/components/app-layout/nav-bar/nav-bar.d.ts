export interface ButtonInterface {
  name: string;
  isActive: boolean;
  path: string;
}
export declare class NavBar {
  /**
   * Prop: buttons: Array<ButtonInterface>
   * Array containing all the buttons to display
   */
  buttons: Array<ButtonInterface> | string;
  private _arrayData;
  arrayDataWatcher(newValue: any[] | string): void;
  componentWillLoad(): void;
  isActive(val: boolean): string;
  menuItemClick(e: any, item: any): void;
  render(): any;
}
