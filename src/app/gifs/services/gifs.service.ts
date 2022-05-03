import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor() { 
    console.log('Servicio Inicializado');
  }

  buscarGifs(query:string){
    query=query.trim().toLocaleLowerCase();
    //includes (funcion para indicar si ya esta en el arreglo)
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      //Cortando a solo 10 elementos
      this._historial=this._historial.splice(0,10);
    }
    //Validar esto en casa
    fetch('https://api.giphy.com/v1/gifs/search?api_key=CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5&q=dragon ball z&limit=10')
    .then(resp=>{
      resp.json().then(data=>{
        console.log(data);        
      })
    })
  }


}
