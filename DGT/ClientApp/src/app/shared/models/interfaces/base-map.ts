import { BaseMapType } from '../enums';

export interface BaseMap {
  type: BaseMapType;
  image: string;
  style: string;
}
