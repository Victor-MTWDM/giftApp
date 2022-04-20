import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService){}

  buscar(){
    //console.log(this.txtBuscar.nativeElement.value);
    if(this.txtBuscar.nativeElement.value.trim().length>0)
       this.gifsService.buscarGifs(this.txtBuscar.nativeElement.value); 
    this.txtBuscar.nativeElement.value='';

  }

}
