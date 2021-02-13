import { SelectType } from '../../constants';

export interface SelectProperties {
    key: string;
    model: any;
    selectType: SelectType;
    hasCategories?: boolean;
    hasDynamicPlaceholder?: boolean;
    shouldOpenOnFocus?: boolean;
}
