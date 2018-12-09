import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arquitectura-angular';
  personas = [
    {
      codigo: '01', nombre: 'Jorge'
    },
    {
      codigo:'02', nombre: 'Marina'
    },
    {
      codigo: '03', nombre: 'Antonio'
    },
    {
      codigo:'04', nombre: 'Andrea'
    }
  ]
}
