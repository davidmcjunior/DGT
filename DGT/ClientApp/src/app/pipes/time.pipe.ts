import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, twentyFourHour: boolean = false): string {
    let suffix = ' hrs.';

    if (twentyFourHour === false) {
      if (value < 12) {
        suffix = ' AM';
      } else {
        suffix = ' PM';
        value -= 12;
      }
    }

    return value.toString() + suffix;
  }

}
