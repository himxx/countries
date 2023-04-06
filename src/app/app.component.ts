import { Component } from '@angular/core';
import { Theme, ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  theme$!:Observable<Theme>;
  
  constructor( private themeService:ThemeService){
    this.theme$ = this.themeService.modeTheme$;
  }

  

}
