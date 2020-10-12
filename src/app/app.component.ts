import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from './models/country';
import { ApicallService } from './services/apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  countries: Country[];
  title = 'HttpRxJS';
  name: string;

  constructor(public http: HttpClient, private apiService: ApicallService){}


  ngOnInit(){
  }
  searchCapital() {
    this.apiService
    .searchCountryByName(this.name)
    .subscribe((data: Country[]) => {
      console.log(data);
      this.countries = data;
    });
  }
}

/*
In the above code, we created the searchCapital() method.
It is an action method, which is working on the click button,
and it starts to search the capitals by name. Here,
we call the searchCountryByName() method from ApiCallservice;
it subscribes the country class to collect data.
*/
