import { Component } from "@angular/core";

@Component({
    selector: "app-checking",
    templateUrl: "./checking.component.html",
    styleUrls: ["checking.component.css"]
})

export class CheckingComponent {
    
    onSendToChangePrice(){
        alert("Price chanded");
    }
    
}