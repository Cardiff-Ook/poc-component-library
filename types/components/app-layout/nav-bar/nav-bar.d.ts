export interface ButtonInterface {
  namr: string;
  isActive: string;
  link: string;
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
  menuToggle(e: any): void;
  render(): any;
}
