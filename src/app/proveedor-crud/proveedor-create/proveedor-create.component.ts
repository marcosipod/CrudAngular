import { Component, OnInit, ViewChild } from '@angular/core';
import { ProveedorService } from '../proveedor.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(private empService: ProveedorService,private router: Router) { }

  
  @ViewChild("f") form: any;
  
  ngOnInit() {
    this.emps = this.empService.getProveedors();
  }

  // addProveedor() {
  //   let newProveedor = {
  //     text: this.text
  //   }
   
  // }
  
  onSubmit() {
    if (this.form.value) {
    let newProveedor = {
      id:uuid(),
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      telefono: this.form.value.telefono,
      correo: this.form.value.correo,

    }
    this.emps.push(newProveedor);
    this.empService.addProveedor(newProveedor);
    this.router.navigate(['proveedor-list']);
    }
  }

  // editProveedor(todo) {
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }

  // updateProveedor() {
  //   console.log(this.text);
  //       for(let i = 0; i < this.emps.length; i++) {
  //         if(this.emps[i].text == this.oldText) {
  //         this.emps[i].text = this.text;
  //     }
  // }

  // this.empService.updateProveedor(this.oldText, this.text);

  // }

}