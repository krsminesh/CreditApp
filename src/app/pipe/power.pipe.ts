import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerpipe',
  standalone:true
})
export class PowerPipe implements PipeTransform {

  transform(value: number, powerVal: number): number {
    return Math.pow(value, powerVal);;
  }

}
