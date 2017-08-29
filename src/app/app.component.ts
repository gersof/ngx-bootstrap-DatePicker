import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public bsValue: any ;
  public bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
    title = 'app';
}
