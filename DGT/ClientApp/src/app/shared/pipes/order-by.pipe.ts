import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderby' })
export class OrderByPipe implements PipeTransform {
  transform(someArray: Array<any>, args: any[]) {

    // Check if array exists
    if (!someArray) {
      return;
    }
    // get the first element
    let orderByValue = args[0];
    let reverse = args[1];
    let byVal = 1;

    // check if reversing the sort order
    if (reverse) {
      // reverse the array
      byVal = -1;
    }

    someArray.sort((a: any, b: any) => {
      if (!b[orderByValue]) {
        return 1 * byVal;
      }
      else if (a[orderByValue] < b[orderByValue]) {
        return -1 * byVal;
      }
      else if (a[orderByValue] > b[orderByValue]) {
        return 1 * byVal;
      }
      else {
        return 0;
      }
    });
    return someArray;
  }
}

