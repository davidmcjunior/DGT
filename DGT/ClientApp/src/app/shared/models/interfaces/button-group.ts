import { AnyOrAll } from '../../constants';

export interface ButtonGroup {
  key: string;
  label: string;
  model: any;
  anyOrAll: AnyOrAll;
  multi: boolean;
  items: string[];
  hasTooltip?: boolean;
  hasPopup?: boolean;
}
