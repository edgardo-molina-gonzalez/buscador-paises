import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './countryTable.component.html',
  styleUrls: ['./countryTable.component.css'],
})
export class CountryTableComponent {
  @Input()
  public countries: Country[] = [];
}
