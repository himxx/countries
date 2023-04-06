import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}


@Injectable({
  providedIn: 'root'
})


export class ThemeService {

  private modeTheme:BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.LIGHT);

  constructor() { }

  get modeTheme$():Observable<Theme> {
    return this.modeTheme.asObservable();
  }

  switchTheme() {
    let theme = this.modeTheme.value;

     return theme === Theme.LIGHT ? this.modeTheme.next(Theme.DARK) : this.modeTheme.next(Theme.LIGHT);
     
  }
}
