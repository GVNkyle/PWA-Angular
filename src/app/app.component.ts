import { Component, OnInit, HostListener } from '@angular/core';
import { ResponseData } from './_core/models/response-data';
import { ApiService } from './_core/services/api.service';
import { PwaServiceService } from './_core/services/pwa-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'pwa-angular';
  responses: ResponseData[] = [];

  constructor(private apiService: ApiService, public Pwa: PwaServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<ResponseData>) => {
        console.log(data);
        this.responses = data;
      }, (err) => {
        console.log(err);
      }
    );
  }


}