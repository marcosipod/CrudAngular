import { Component, OnInit, ViewChild } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventario-create',
  templateUrl: './inventario-create.component.html',
  styleUrls: ['./inventario-create.component.css']
})
export class InventarioCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(private empService: InventarioService,private router: Router) { }

  
  @ViewChild("f") form: any;
  
  ngOnInit() {
    this.emps = this.empService.getInventarios();
  }

  // addInventario() {
  //   let newInventario = {
  //     text: this.text
  //   }
   
  // }
  
  onSubmit() {
    if (this.form.value) {
    let newInventario = {
      id:uuid(),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      languages: this.form.value.languages,

    }
    this.emps.push(newInventario);
    this.empService.addInventario(newInventario);
    this.router.navigate(['inventario-list']);
    }
  }

  // editInventario(todo) {
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }

  // updateInventario() {
  //   console.log(this.text);
  //       for(let i = 0; i < this.emps.length; i++) {
  //         if(this.emps[i].text == this.oldText) {
  //         this.emps[i].text = this.text;
  //     }
  // }

  // this.empService.updateInventario(this.oldText, this.text);

  // }

}