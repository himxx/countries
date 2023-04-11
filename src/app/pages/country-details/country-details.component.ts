import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/models/country';
import {ApiService} from '../../services/api.service';
import { Observable, map, mergeMap, of } from 'rxjs';
import { Theme, ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent {
  country$!:Observable<Country>;
  borders$!:Observable<Country[]>;
  theme$!:Observable<Theme>;
  constructor(private route: ActivatedRoute, private api: ApiService, private theme:ThemeService){}
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.country$ = this.api.getCountryByName(params['country']).pipe(map(country=> {
        return {
          ... country,
          currencyNames: country.currencies.map(val => val.name).join(', '),
          languageNames:country.languages.map(val=> val.name).join(', ')
        }
      })).pipe(mergeMap((res)=> {
        if(res.borders) {
          this.borders$= this.api.getCountryByCodes(res.borders);

        }
        return of(res)
      }))
    })

    this.theme$ = this.theme.modeTheme$;
  }

  
}
 