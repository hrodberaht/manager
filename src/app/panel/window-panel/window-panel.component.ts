import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-window-panel',
  templateUrl: './window-panel.component.html',
  styleUrls: ['./window-panel.component.css']
})
export class WindowPanelComponent implements OnInit {

  name: string = "";
  results = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  
  addProduct() {
    alert("adding");
  }
  
  onGetData() {
    console.log("hello");
    this.http.get("https://mysys-hrodebert.c9users.io:8080/api/").subscribe(data => {
      this.results = data;
      console.log(data)
    });
  }
}
