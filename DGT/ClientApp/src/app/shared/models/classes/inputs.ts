import { LookupKeyAndName } from './lookups';
import { pluralize } from '../../utilities';
import { S4InputType } from '../../constants';

export class S4Input {
    key: S4InputType;
    data: any[];
    model: any = [];
    label: string;
    required?: boolean;
    categories?: LookupKeyAndName[];
    category: LookupKeyAndName;
    placeholder: string;

    /*
    i get the lookup category and the select type
    lookups should always start singular
    format my place holder and label text based on the lookup and
    whether they should be pluralized based on the select type
    */

    constructor(key: S4InputType, type: string, required: boolean = false) {
        this.key = key;
        switch (key) {
            case 'county':
                this.label = 'County';
                this.placeholder = `Select a ${this.label}`;

                break;
            case 'agency':
                this.label = 'LE Agency';
                this.placeholder = `All ${pluralize(this.label)}`;

                break;
            case 'city':
                this.label = 'City';
                this.placeholder = `Select a ${this.label}`;

                break;
            case 'unit':
                this.label = 'Troop';
                this.placeholder = `Select a ${this.label}`;

                break;
            case 'geography':
                this.label = 'City or County';
                this.placeholder = `Select a ${this.label}`;

                break;
            case 'year':
                this.label = 'Year';
                this.model = new Date().getFullYear;
                break;
            case 'emphasisArea':
                this.label = 'Emphasis Area';
                this.placeholder = `All ${this.label}s`;

                break;
            case 'injurySeverity':
                this.placeholder = 'Fatalities & Serious Injuries';
                this.label = 'Injury Severity';
                break;
            case 'geographyArea':
                this.placeholder = 'State of Florida';
                this.label = 'Geographic Area';
                this.category = { key: 'all', name: 'State of Florida' };
                break;
            case 'defaultQueries':
                this.placeholder = 'Frequently Searched Filters';
                this.label = 'Default Queries';
                break;
            default:
                this.placeholder = 'Click to Select';
                this.label = ''; break;
        }
        // if (plural) {
        //   this.label = pluralize(this.label);
        //   this.placeholder = `Select ${this.label}`;
        // }
        if (this.placeholder) {
            this.placeholder.trim();
        }
        if (required) {
            this.label += '*';
            this.required = true;
        }
    }
}
