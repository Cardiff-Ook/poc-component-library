import { EventEmitter } from '../../../stencil-public-runtime';
import { DocumentDataInterface } from '../../../interfaces/documentDataInterface';
export declare class DocumentsListItem {
  /**
   * Prop: document: object
   * Document Details
   */
  document: DocumentDataInterface | string;
  /**
   * Prop: documentIndex: number
   * The document index in the document list
   */
  documentIndex: number;
  private _document;
  private _documentIndex;
  private _accordianCardIndex;
  documentData: HTMLElement;
  chevron: HTMLElement;
  accordian: HTMLElement;
  /**
   * State: collapsed: boolean
   * Indicator of wether the accordian is collapsed or not
   */
  collapsed: boolean;
  /**
   * Event: downloadDocument: EventEmitter
   * Event to fire if data validates
   */
  downloadDocument: EventEmitter;
  arrayDataWatcher(newValue: any | string): void;
  componentWillLoad(): void;
  downloadDocumentClick(): void;
  toggle(): void;
  convertDate(inDate: string): string;
  render(): any;
}
