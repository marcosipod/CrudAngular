import { Injectable } from '@angular/core';
import { Init } from './proveedor-init';

@Injectable({
    providedIn: 'root',
  })
export class ProveedorService extends Init {

  constructor() {
    super();
    console.log('ProveedorService Works');
    this.load();
   }

   getProveedors() {
     let emp = JSON.parse(localStorage.getItem('proveedores'));
     return emp;
   }

   addProveedor(newEmp) {
      let emps = JSON.parse(localStorage.getItem('proveedores'));
      emps.push(newEmp);
      localStorage.setItem('proveedores', JSON.stringify(emps));
   }

   deleteProveedor(id) {
     let emps = JSON.parse(localStorage.getItem('proveedores'));
     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == id) {
        emps.splice(i, 1);
      }
   }
      localStorage.setItem('proveedores', JSON.stringify(emps));
   }

     updateProveedor(oldEmp, newEmp){  let emps = JSON.parse(localStorage.getItem('proveedores'));

     for(let i = 0; i <emps.length; i++) {
      if(emps[i].id == oldEmp.id) {
        emps[i] = newEmp;
      }
   }
      localStorage.setItem('proveedores', JSON.stringify(emps));
   }




}