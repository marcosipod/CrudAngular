import { Injectable } from '@angular/core';
import { Init } from './inventario-init';

@Injectable({
    providedIn: 'root',
  })
export class InventarioService extends Init {

  constructor() {
    super();
    console.log('InventarioService Works');
    this.load();
   }

   getInventarios() {
     let emp = JSON.parse(localStorage.getItem('inventarios'));
     return emp;
   }

   addInventario(newEmp) {
      let emps = JSON.parse(localStorage.getItem('inventarios'));
      emps.push(newEmp);
      localStorage.setItem('inventarios', JSON.stringify(emps));
   }

   deleteInventario(id) {
     let emps = JSON.parse(localStorage.getItem('inventarios'));
     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == id) {
        emps.splice(i, 1);
      }
   }
      localStorage.setItem('inventarios', JSON.stringify(emps));
   }

     updateInventario(oldEmp, newEmp){  let emps = JSON.parse(localStorage.getItem('inventarios'));

     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == oldEmp.id) {
        emps[i] = newEmp;
      }
   }
      localStorage.setItem('inventarios', JSON.stringify(emps));
   }




}