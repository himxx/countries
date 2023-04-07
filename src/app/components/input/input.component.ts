import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/services/theme.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  {
  @Input()
  placeholder!: string;
  searchText: string = '';
  @Output() searchEmit:EventEmitter<string> = new EventEmitter();
  @Input() theme!:Observable<Theme>

  onInputChange() {
    this.searchEmit.emit(this.searchText);
  }
}
