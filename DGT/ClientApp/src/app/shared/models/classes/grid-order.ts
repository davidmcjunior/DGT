/*
* used in crash summary service to configure the crash summary grid
*/
export class GridOrder {
  key: string;
  columnName: string[];
  drilldown: string[];
  nestingOrder: string[];
  constructor(name: string) {
    this.key = name;
    switch (name) {
      case 'agency':
        this.drilldown = ['agencyNm', 'countyNm', 'cityNm'];
        this.columnName = ['Agency', 'County', 'City'];
        this.nestingOrder = ['l1', 'l2', 'l3'];
        break;
      case 'unit':
        this.drilldown = ['unitNm', 'countyNm'];
        this.columnName = ['FHP Troop', 'County'];
        this.nestingOrder = ['l1', 'l2'];

        break;
      case 'fhp':
        this.drilldown = ['agencyNm', 'unitNm', 'countyNm'];
        this.columnName = ['Agency Name', 'FHP Troop', 'County'];
        this.nestingOrder = ['l1', 'l2', 'l3'];
        break;
      default:
        this.drilldown = ['countyNm', 'agencyNm', 'cityNm'];
        this.columnName = ['County', 'Agency', 'City'];
        this.nestingOrder = ['l1', 'l2', 'l3'];
    }
  }
  shift = () => {
    this.columnName.shift();
    this.drilldown.shift();
    this.nestingOrder.shift();
  }
}
