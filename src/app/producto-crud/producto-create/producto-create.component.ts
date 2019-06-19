import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../producto.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(private empService: ProductoService,private router: Router) { }

  
  @ViewChild("f") form: any;
  
  ngOnInit() {
    this.emps = this.empService.getProductos();
  }

  // addProducto() {
  //   let newProducto = {
  //     text: this.text
  //   }
   
  // }
  
  onSubmit() {
    if (this.form.value) {
    let newProducto = {
      id:uuid(),
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      cantidad: this.form.value.cantidad,
      proveedor: this.form.value.proveedor,

    }
    this.emps.push(newProducto);
    this.empService.addProducto(newProducto);
    this.router.navigate(['producto-list']);
    }
  }

  // editProducto(todo) {
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }

  // updateProducto() {
  //   console.log(this.text);
  //       for(let i = 0; i < this.emps.length; i++) {
  //         if(this.emps[i].text == this.oldText) {
  //         this.emps[i].text = this.text;
  //     }
  // }

  // this.empService.updateProducto(this.oldText, this.text);

  // }

}