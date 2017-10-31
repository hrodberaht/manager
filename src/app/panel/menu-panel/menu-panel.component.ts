import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {
  
  name: string = "";

  constructor() { }

  ngOnInit() {
  }
  
  addProduct() {
    alert("adding");
  }

}
