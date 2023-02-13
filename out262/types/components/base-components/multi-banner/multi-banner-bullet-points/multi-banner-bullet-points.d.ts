export interface BulletPointInterface {
  id: string;
  title: string;
  text: string;
}
export declare class MultiBannerBulletPoints {
  /**
   * Prop: bulletPoints: Array<BulletPointInterface>
   * Array containing all the bullet points to display
   */
  bulletPoints: Array<BulletPointInterface> | string;
  private _arrayData;
  arrayDataWatcher(newValue: any[] | string): void;
  componentWillLoad(): void;
  render(): any;
}
