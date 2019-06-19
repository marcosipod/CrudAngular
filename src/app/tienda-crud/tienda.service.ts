import { Injectable } from '@angular/core';
import { Init } from './tienda-init';

@Injectable({
    providedIn: 'root',
  })
export class TiendaService extends Init {

  constructor() {
    super();
    console.log('TiendaService Works');
    this.load();
   }

   getTiendas() {
     let emp = JSON.parse(localStorage.getItem('tiendas'));
     return emp;
   }

   addTienda(newEmp) {
      let emps = JSON.parse(localStorage.getItem('tiendas'));
      emps.push(newEmp);
      localStorage.setItem('tiendas', JSON.stringify(emps));
   }

   deleteTienda(id) {
     let emps = JSON.parse(localStorage.getItem('tiendas'));
     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == id) {
        emps.splice(i, 1);
      }
   }
      localStorage.setItem('tiendas', JSON.stringify(emps));
   }

     updateTienda(oldEmp, newEmp){  let emps = JSON.parse(localStorage.getItem('tiendas'));

     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == oldEmp.id) {
        emps[i] = newEmp;
      }
   }
      localStorage.setItem('tiendas', JSON.stringify(emps));
   }




}