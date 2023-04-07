import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './models/country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Country[], term:string): Country[] {
    if(!term) return value;
    return value.filter(country => country.name.common.toLowerCase().includes(term.toLowerCase()))
  }

}
