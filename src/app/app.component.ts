import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userName: string = 'Administrator';
  public personsList: any = [
    {
      name: 'John'
    },
    {
      name: 'Alex'
    },
    {
      name: 'Andy'
    },
  ];
}
