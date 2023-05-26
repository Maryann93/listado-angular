import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  '<app-listado-articulos [series]="series"></app-listado-articulos>'
})
export class AppComponent {
  series = [
    {nombre: 'Death Note', capitulos: 12 },
    {nombre: 'Evangelion', capitulos: 26 },
    {nombre: 'Hellsing', capitulos: 13 },
    {nombre: 'Ai Enma', capitulos: 14 },
    {nombre: 'Naruto', capitulos: 720 },
  ];
}
