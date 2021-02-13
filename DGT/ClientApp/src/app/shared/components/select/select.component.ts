import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { S4Input } from 'src/app/shared/models/classes/inputs';
import { LookupService } from 'src/app/core/services';
import { AbstractValueAccessor, makeProvider, LookupKeyAndName, LookupName } from '../../models';
import { SelectType, PublicGeographicFilterArea, S4InputType } from '../../constants';
import { LookupKeyAndValue } from '../../models/interfaces/lookup-key-and-value';
import { AutoCompleteComponent, ComboBoxComponent, MultiSelectComponent, DropDownListComponent } from '@progress/kendo-angular-dropdowns';
import { GroupResult } from '@progress/kendo-data-query';
import { pluralize } from '../../utilities';

@Component({
    selector: 's4-select',
    templateUrl: './select.component.html',
    providers: [makeProvider(S4SelectComponent)]
})

// abstract value accessor and makeProvider allow for parent to utilize [(ngModel)]
// and provide the component with a 'value' property
// valueChanges are also emitted if the parent wants to handle the values directly
export class S4SelectComponent extends AbstractValueAccessor implements OnChanges {
    @Input() key: S4InputType;
    @Input() type: SelectType;
    @Input() data?: LookupKeyAndName[]; // input your own data set
    @Input() hasCategories = false; // complex data
    @Input() hasDynamicPlaceholder = false;
    @Input() customPlaceholder = '';
    @Input() label: boolean = true;
    @Input() labelClass = ''; // custom classes for the inputs label
    @Input() customLabel = ''; // cutom label string option to override default
    @Input() shouldOpenOnFocus = false;
    @Input() inputClass = ''; // custom classes for components container
    @Input() wrapperClass = ''; // custom classes for components container
    @Input() title = ''; // titleString
    @Input() required = false;
    @Input() isDisabled = false;
    @Output() valueChange = new EventEmitter<LookupKeyAndValue>();

    @ViewChild('categoryAutocomplete') categoryAutocomplete: AutoCompleteComponent;
    isReady = false;
    public input?: S4Input; // populates initial text values by SelectType
    categoricalData: GroupResult[]; // kendo class for holding options if using a category filter
    catKey: string;
    constructor(private lookup: LookupService) {
        super();
    }

    ngOnChanges(change: SimpleChanges) {
        // functions as OnInit would
        if (change.key && change.key.firstChange === true) {
            this.build();
            return;
        }
        if (change.data && !change.data.firstChange) {
            this.handleChange();
        }
    }

    get filterKey(): PublicGeographicFilterArea[] | undefined {
        let filterKey: any;
        if (this.hasCategory && this.input) {
            filterKey = <PublicGeographicFilterArea[]>[this.input.category.key];
        }
        return filterKey;
    }
    get hasCategory(): boolean {
        if (this.input && this.input.category) {
            return this.input.category.key !== 'all';
        }
        return false;
    }
    get inputClassList(): string { return ` ${this.inputClass}`; }
    get labelClassList(): string { return `mb-1 font-heading txt5 ${this.labelClass}`; }
    get wrapperClassList(): string { return ` ${this.wrapperClass}`; }



    build() {
        this.input = undefined; // clear in case being triggered by ngOnChanges
        let input = new S4Input(this.key, this.type, this.required);

        // opt first for data from input
        if (this.data) {
            input.data = this.data;
        }
        else {
            if (this.key === 'geographyArea') {
                input.data = this.lookup.getLookup(this.key, ['county', 'dotDistrict', 'mpoName']);

            } else {
                input.data = this.lookup.getLookup(this.key);

            }
        }
        if (!this.value) {
            if (this.type === 'autocomplete') {
                input.model = '';
            }
            this.value = input.model;
        }
        if (this.customLabel !== '') {
            input.label = this.customLabel;
        }
        if (this.customPlaceholder !== '') {
            input.placeholder = this.customPlaceholder;
        }

        if (this.hasCategories) {
            if (this.key === 'geographyArea') {
                input.categories = this.lookup.lookups.publicGeographyArea;
                this.categoricalData = input.data;
            }
        }
        // console.log(input)
        this.input = input;
        this.isReady = true;
    }

    handleChange(): void { // typically occurs if an external action effects the search options for the input
        if (this.input && this.data) {
            this.input.data = this.data;
        }
    }

    onBlur() {
        if (this.hasDynamicPlaceholder) {
            this.handleDynamicPlaceholder('blur');
        }
    }

    onFocus(el: AutoCompleteComponent | ComboBoxComponent | MultiSelectComponent | DropDownListComponent) {
        if (this.hasDynamicPlaceholder) {
            this.handleDynamicPlaceholder('focus');
        }
        if (this.shouldOpenOnFocus) {
            // console.log('onFocus event triggered');
            el.toggle(true);
        }
    }

    onFilterChange($event: any, el?: AutoCompleteComponent | ComboBoxComponent | DropDownListComponent | MultiSelectComponent): void {
        if ($event === undefined || $event === '') {
            if (el) {
                if (this.value !== el.value) {
                    // the filter had some text but cleared when an options was chosen
                    // the filterChange event fires before the valueChange event
                    // console.log($event, this.value, el.value);
                    return;
                }
                this.onFocus(el);
            }
        }
        else {
            if (this.input && this.input.data) {
                let filteredData = this.lookup.filterChange(this.key, $event, this.filterKey, this.data);
                this.input.data = filteredData;
            }
        }
    }

    onInputValueChange($event: any, el?: ComboBoxComponent | MultiSelectComponent | DropDownListComponent): void {
        let output: LookupKeyAndValue = { key: this.key, value: $event };
        this.valueChange.emit(output);
        if (!$event && el) {
            this.onFocus(el);
            // console.log('called focus from input value change');
        }
    }

    // autocomplete components allow user to input strings that do correlate to a provided option
    onAutoCompleteValueChange($event: string | LookupKeyAndName, el: any): void {
        let foundLookup: LookupKeyAndName | LookupName | undefined = this.findOneLookup(<string>this.key, <string>$event);
        // console.log(foundLookup);
        let out: LookupKeyAndName | LookupName | LookupKeyAndName[] | undefined = foundLookup;
        if (!foundLookup) {
            el.reset();
            this.build();
        }
        if (this.key === 'geographyArea') {
            out = [<LookupKeyAndName>foundLookup];
            if (foundLookup && typeof (foundLookup) === 'object') {
                let lookup: any = <LookupKeyAndName>foundLookup;
                if (lookup.key !== undefined) {
                    let additional = <LookupKeyAndName>this.findOneLookup(lookup.key, lookup.name);
                    out.push(additional);
                    // console.log('found lookup changeed to ', foundLookup);

                }
                else {
                    // console.log('didnt change anything');
                }
            }
        }
        this.valueChange.emit(<LookupKeyAndValue>({ key: this.key, value: out }));
    }

    // categorical autocomplete --- probably move to its own component, barely fits with others
    onCategoryChange(value: LookupKeyAndName) {
        // console.log(value.key);
        this.catKey = value.key.toString();
        if (this.input) {
            this.categoryAutocomplete.reset();
            this.value = undefined;
            if (value.key === 'all') {
                this.input.placeholder = 'State of Florida';
                this.input.data = this.lookup.getPublicGeographyValues();
            }
            else {
                this.input.placeholder = `All ${pluralize(value.name)}`;
                const geoKey = <PublicGeographicFilterArea>value.key;
                this.input.data = <LookupKeyAndName[]>this.lookup.getPublicGeographyValues([geoKey]);
            }
        }
    }

    onCategorySelect($event: string | LookupKeyAndName, el?: AutoCompleteComponent | ComboBoxComponent) {
        // console.log($event)

        if (typeof ($event) === 'string') {
            let geographies = this.lookup.getPublicGeographyValues().filter((geography: LookupKeyAndName) => geography.name === $event);
            // console.log(geographies[0])
            if (geographies && geographies.length === 1) {
                this.value = geographies[0];
                let foundLookup = this.findOneLookup(<string>geographies[0].key, geographies[0].name);

                if (foundLookup) {
                    this.valueChange.emit(<LookupKeyAndValue>{ key: this.key, value: [this.value, foundLookup] });
                    // console.log('emitted  ', { key: this.key, value: [geographies[0], foundLookup] })
                    return;
                }
            }
        }
        if (typeof ($event) === 'object') {
            let foundLookup = this.findOneLookup(<string>$event.key, $event.name);
            if (foundLookup) {
                this.valueChange.emit(<LookupKeyAndValue>{ key: this.key, value: [$event, foundLookup] });
                // console.log('set value and returning from category select value change')
                return;
            }
        }
        if (!$event) {
            this.valueChange.emit({ key: this.key, value: [] });
            if (el) {
                el.reset();
                this.build();
                // console.log('called element reset, build and then focus from category select value change')
                this.onFocus(el);
            }
        }
    }

    getItemCategory(key: string | number): string {
        let result = '';
        if (!this.hasCategory && this.input && this.input.categories && this.input.categories.length > 0) {
            this.input.categories.forEach((category: LookupKeyAndName) => {
                if (category.key === key) {
                    result = category.name;
                }
            });
        }
        return result;
    }

    private findOneLookup(key: string, value: string): LookupKeyAndName | LookupName {
        let found = this.lookup.findOneLookup(this.key, key, value);
        return found;
    }

    private handleDynamicPlaceholder(event: 'focus' | 'blur'): void {
        if (this.input) {
            switch (this.key) {
                case 'geographyArea':
                    if (event === 'focus') {
                        this.input.placeholder = 'Search State, County, District or MPO';
                    }
                    if (event === 'blur') {
                        this.input.placeholder = this.customPlaceholder !== '' ? this.customPlaceholder : 'State of Florida';
                    }
                    break;
                case 'agency':
                    if (event === 'focus') {
                        this.input.placeholder = 'Search LE Agencies';
                    }
                    if (event === 'blur') {
                        this.input.placeholder = 'All LE Agencies';
                    }

                    break;
                default: break;
            }
        }
    }
}
