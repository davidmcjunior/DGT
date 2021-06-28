import { SelectControl } from 'app/models/form/controls/select-control';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'any'
})
export class CountyControl extends SelectControl<string> {
  public static Counties = [
    {key: 'ALA', value: 'Alachua'},
    {key: 'BAK', value: 'Baker'},
    {key: 'BAY', value: 'Bay'},
    {key: 'BRA', value: 'Bradford'},
    {key: 'BRE', value: 'Brevard'},
    {key: 'BRO', value: 'Broward'},
    {key: 'CAL', value: 'Calhoun'},
    {key: 'CHA', value: 'Charlotte'},
    {key: 'CIT', value: 'Citrus'},
    {key: 'CLA', value: 'Clay'},
    {key: 'COLL', value: 'Collier'},
    {key: 'COLU', value: 'Columbia'},
    {key: 'DES', value: 'De Soto'},
    {key: 'DIX', value: 'Dixie'},
    {key: 'DUV', value: 'Duval'},
    {key: 'ESC', value: 'Escambia'},
    {key: 'FLA', value: 'Flagler'},
    {key: 'FRA', value: 'Franklin'},
    {key: 'GAD', value: 'Gadsden'},
    {key: 'GIL', value: 'Gilchrist'},
    {key: 'GLA', value: 'Glades'},
    {key: 'GUL', value: 'Gulf'},
    {key: 'HAM', value: 'Hamilton'},
    {key: 'HAR', value: 'Hardee'},
    {key: 'HEN', value: 'Hendry'},
    {key: 'HER', value: 'Hernando'},
    {key: 'HIG', value: 'Highlands'},
    {key: 'HIL', value: 'Hillsborough'},
    {key: 'HOL', value: 'Holmes'},
    {key: 'IND', value: 'Indian River'},
    {key: 'JAC', value: 'Jackson'},
    {key: 'JEF', value: 'Jefferson'},
    {key: 'LAF', value: 'Lafayette'},
    {key: 'LAK', value: 'Lake'},
    {key: 'LEE', value: 'Lee'},
    {key: 'LEO', value: 'Leon'},
    {key: 'LEV', value: 'Levy'},
    {key: 'LIB', value: 'Liberty'},
    {key: 'MAD', value: 'Madison'},
    {key: 'MAN', value: 'Manatee'},
    {key: 'MARI', value: 'Marion'},
    {key: 'MART', value: 'Martin'},
    {key: 'DAD', value: 'Miami-Dade'},
    {key: 'MON', value: 'Monroe'},
    {key: 'NAS', value: 'Nassau'},
    {key: 'OKA', value: 'Okaloosa'},
    {key: 'OKE', value: 'Okeechobee'},
    {key: 'ORA', value: 'Orange'},
    {key: 'OSC', value: 'Osceola'},
    {key: 'PAL', value: 'Palm Beach'},
    {key: 'PAS', value: 'Pasco'},
    {key: 'PIN', value: 'Pinellas'},
    {key: 'POL', value: 'Polk'},
    {key: 'PUT', value: 'Putnam'},
    {key: 'SJO', value: 'St. Johns'},
    {key: 'SLU', value: 'St. Lucie'},
    {key: 'SRO', value: 'Santa Rosa'},
    {key: 'SAR', value: 'Sarasota'},
    {key: 'SEM', value: 'Seminole'},
    {key: 'SUM', value: 'Sumter'},
    {key: 'SUW', value: 'Suwannee'},
    {key: 'TAY', value: 'Taylor'},
    {key: 'UNI', value: 'Union'},
    {key: 'VOL', value: 'Volusia'},
    {key: 'WAK', value: 'Wakulla'},
    {key: 'WAL', value: 'Walton'},
    {key: 'WAS', value: 'Washington'}
  ];
  key     = 'county';
  label   = 'County';
  options = CountyControl.Counties;
}