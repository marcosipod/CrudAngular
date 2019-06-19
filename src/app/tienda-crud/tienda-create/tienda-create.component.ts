import { Component, OnInit, ViewChild } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda-create',
  templateUrl: './tienda-create.component.html',
  styleUrls: ['./tienda-create.component.css']
})
export class TiendaCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(private empService: TiendaService,private router: Router) { }

  
  @ViewChild("f") form: any;
  
  ngOnInit() {
    this.emps = this.empService.getTiendas();
  }

  // addTienda() {
  //   let newTienda = {
  //     text: this.text
  //   }
   
  // }
  
  onSubmit() {
    if (this.form.value) {
    let newTienda = {
      id:uuid(),
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,

    }
    this.emps.push(newTienda);
    this.empService.addTienda(newTienda);
    this.router.navigate(['tienda-list']);
    }
  }

  // editTienda(todo) {
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }

  // updateTienda() {
  //   console.log(this.text);
  //       for(let i = 0; i < this.emps.length; i++) {
  //         if(this.emps[i].text == this.oldText) {
  //         this.emps[i].text = this.text;
  //     }
  // }

  // this.empService.updateTienda(this.oldText, this.text);

  // }

}