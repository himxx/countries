import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  theme$!:Observable<Theme>;

  constructor(private themeService:ThemeService){}
  
  ngOnInit(): void {
   this.theme$ = this.themeService.modeTheme$;
  }

  toggleMode():void {
    this.themeService.switchTheme();
  }


}
