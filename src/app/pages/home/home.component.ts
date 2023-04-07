import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Country } from 'src/app/models/country';
import { ApiService } from 'src/app/services/api.service';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  countries$!:Observable<Country[]>;
  searchTerm!:string;
  themeMode$!:Observable<Theme>;
  constructor(private api:ApiService, private theme:ThemeService){}

  ngOnInit(): void {
    this.countries$ = this.api.getAll();
    this.themeMode$ = this.theme.modeTheme$.pipe(shareReplay())
  }

  onInputChange(value: string) {
    this.searchTerm = value;
    
  }

}
