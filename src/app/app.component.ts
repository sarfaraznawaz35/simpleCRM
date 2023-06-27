import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  contacts = [
    {
      'firstName' : 'ARC',
      'lastName'  : 'Tutorials',
      'contactId' : 1234
    },
    {
      'firstName' : 'Mark',
      'lastName'  : 'Hender',
      'contactId' : 37376
    },
    {
      'firstName' : 'Ben',
      'lastName'  : 'Stokes',
      'contactId' : 1234
    }
  ]

}
