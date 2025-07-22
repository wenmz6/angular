import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrnonPipe'
})
export class ChrnonPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let hours: number = Math.floor(value / 3600);
    let minutes: number = Math.floor(value / 60);
    let seconds: number = value % 60;
    return `${hours} heures ${minutes} minutes ${seconds} secondes`;
  }

}
