import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventarioService } from '../inventario.service';


@Component({
  selector: 'app-inventario-edit',
  templateUrl: './inventario-edit.component.html',
  styleUrls: ['./inventario-edit.component.css']
})
export class InventarioEditComponent implements OnInit {
  emp;
  id;
  constructor(private _Activatedroute:ActivatedRoute,private empService: InventarioService,private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getInventarios();
    this.emp=emps.find(p => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.empService.updateInventario(this.emp,this.form.value);
    this.router.navigate(['inventario-list']);
    }
  }
}
