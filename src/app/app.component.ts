import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Text Avatar Example Page';


  exampleText:string="Example Text";

  getText(){
    return this.exampleText;
  }

}
