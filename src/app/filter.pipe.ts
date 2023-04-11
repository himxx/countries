import { Pipe, PipeTransform } from '@angular/core';
import { Country } from './models/country';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Country[], term:string, region:string): Country[] {  
    if (!term && region==='All regions') {
    return value;
  }
  let filteredValue = value;
  if (term) {
    filteredValue = filteredValue.filter(country => country.name.toLowerCase().includes(term.toLowerCase()));
  }
  if (region && region !== 'All regions') {
    filteredValue = filteredValue.filter(country => country.region.toLowerCase() === region.toLowerCase());
  }
  return filteredValue;
}
  }

