import { Injectable } from '@angular/core';
import { Init } from './producto-init';

@Injectable({
    providedIn: 'root',
  })
export class ProductoService extends Init {

  constructor() {
    super();
    console.log('ProductoService Works');
    this.load();
   }

   getProductos() {
     let emp = JSON.parse(localStorage.getItem('productos'));
     return emp;
   }

   addProducto(newEmp) {
      let emps = JSON.parse(localStorage.getItem('productos'));
      emps.push(newEmp);
      localStorage.setItem('productos', JSON.stringify(emps));
   }

   deleteProducto(id) {
     let emps = JSON.parse(localStorage.getItem('productos'));
     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == id) {
        emps.splice(i, 1);
      }
   }
      localStorage.setItem('productos', JSON.stringify(emps));
   }

     updateProducto(oldEmp, newEmp){  let emps = JSON.parse(localStorage.getItem('productos'));

     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == oldEmp.id) {
        emps[i] = newEmp;
      }
   }
      localStorage.setItem('productos', JSON.stringify(emps));
   }




}