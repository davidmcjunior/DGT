/*
* Similar to lookup key and name but expects a variety of input types in the value field
* many inputs use these classes && types
* i am basically a wrapper with a name that gets emitted back into my parent when my value changes
* usually if my value is a string, number, or boolean - i am already being handled via ngModel in the parent
* if my value is an object or class, my parent can
*/

import { LookupName, LookupKeyAndName } from '../classes';


export interface LookupKeyAndValue {
    key: string;
    value: string | number | boolean | LookupKeyAndName | LookupName |
    string[] | number[] | boolean[] | LookupKeyAndName[] | LookupName[] | any;
}
