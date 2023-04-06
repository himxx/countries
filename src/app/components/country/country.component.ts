import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit  {
  @Input() country!:Country;
  theme$!:Observable<Theme>;

  constructor(private themeService: ThemeService){}

  ngOnInit(): void {
    this.theme$ = this.themeService.modeTheme$;
  }

}
