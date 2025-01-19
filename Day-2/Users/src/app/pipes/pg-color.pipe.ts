import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pgColor'
})
export class PgColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
