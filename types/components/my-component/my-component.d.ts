export interface CompOption {
  value: string;
  displayText: string;
}
export declare class MyComponent {
  /**
   * The text which is shown as label
   */
  label: string;
  /**
   * Is needed to reference the form data after the form is submitted
   */
  name: string;
  /**
   * If true, the button is displayed as disabled
   */
  disabled: boolean;
  /**
   * Define the available options in the drop-down list
   */
  options: CompOption[];
  render(): any;
}
