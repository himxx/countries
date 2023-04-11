import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/services/theme.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() theme!:Observable<Theme>
  selectedRegion:string='All regions';
  @Input() options!:string[];
  @Output() selectedRegionEmit:EventEmitter<string> = new EventEmitter();

  onChange() {
    this.selectedRegionEmit.emit(this.selectedRegion);
  }
}
