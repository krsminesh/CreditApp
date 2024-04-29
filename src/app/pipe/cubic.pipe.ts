import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubicpipe'
})
export class CubicPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Math.pow(value, 3);
  }

}
