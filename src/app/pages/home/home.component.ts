import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  countries$!:Observable<Country[]>;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.countries$ = this.api.getAll();
  }

}
